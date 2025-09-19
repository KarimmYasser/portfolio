// Minimal email sending via Resend REST API to avoid extra deps.
// Required env vars on Vercel:
// - RESEND_API_KEY
// - CONTACT_TO_EMAIL (recipient)
// - CONTACT_FROM_EMAIL (verified domain sender, e.g. "Portfolio <noreply@yourdomain.com>")

function isValidEmail(email: string) {
  return /^(?:[^\s@]+)@(?:[^\s@]+)\.(?:[^\s@]+)$/.test(email);
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL;
  const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

  if (!RESEND_API_KEY || !TO_EMAIL || !FROM_EMAIL) {
    return res.status(500).json({
      ok: false,
      code: "CONFIG_MISSING",
      error: "Server not configured: missing env",
    });
  }

  try {
    const {
      name = "",
      email = "",
      subject = "",
      message = "",
      website = "",
    } = req.body || {};

    // Honeypot: if filled, pretend success but ignore.
    if (typeof website === "string" && website.trim().length > 0) {
      return res.status(200).json({ ok: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    if (!isValidEmail(email)) {
      return res
        .status(400)
        .json({ ok: false, code: "INVALID_EMAIL", error: "Invalid email" });
    }

    if (subject.trim().length < 3 || message.trim().length < 10) {
      return res.status(400).json({
        ok: false,
        code: "CONTENT_TOO_SHORT",
        error: "Subject or message too short",
      });
    }

    // Basic upper bounds to prevent abuse
    if (name.length > 80 || subject.length > 140 || message.length > 5000) {
      return res.status(400).json({
        ok: false,
        code: "CONTENT_TOO_LONG",
        error: "Field length limits exceeded",
      });
    }

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;">
        <h2>New message from portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap;border-left:4px solid #ddd;padding:8px 12px;">${escapeHtml(
          message
        )}</div>
      </div>
    `;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: `[Portfolio] ${subject}`,
        html,
        reply_to: email,
      }),
    });
    if (!resp.ok) {
      let bodyText: string | null = null;
      let json: any = null;
      try {
        bodyText = await resp.text();
        json = JSON.parse(bodyText);
      } catch {
        // ignore
      }
      const resendMessage: string | undefined = json?.message || json?.error;
      const lower = (resendMessage || "").toLowerCase();
      let code = "SERVICE_FAILURE";
      if (lower.includes("not verified")) code = "DOMAIN_NOT_VERIFIED";
      if (resp.status === 401 || resp.status === 403) code = "AUTH_FAILED";
      console.error("Resend error:", resp.status, resendMessage || bodyText);
      return res.status(502).json({
        ok: false,
        code,
        error:
          code === "DOMAIN_NOT_VERIFIED"
            ? "Sender domain not verified. Verify domain in Resend."
            : code === "AUTH_FAILED"
            ? "Email service authentication failed"
            : "Email service failed",
        providerStatus: resp.status,
      });
    }

    return res.status(200).json({ ok: true, code: "SENT" });
  } catch (err) {
    console.error("/api/contact error", err);
    return res.status(500).json({
      ok: false,
      code: "INTERNAL_ERROR",
      error: "Internal Server Error",
    });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
