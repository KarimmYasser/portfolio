import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Download } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { useContent } from "@/content/ContentContext";

export default function ContactSection() {
  const { content, locale } = useContent();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot (should stay empty)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: content.meta.email,
      href: `mailto:${content.meta.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: content.meta.phone,
      href: `tel:${content.meta.phone.replace(/[^+\d]/g, "")}`,
    },
  ];

  const socialLinks = content.socials.map((s) => ({
    icon:
      s.icon === "github"
        ? SiGithub
        : s.icon === "linkedin"
        ? SiLinkedin
        : s.icon === "x"
        ? SiX
        : Mail,
    label: s.label,
    href: s.href,
    color: s.color,
  }));

  // Resume URL: use env-provided URL or fallback to a local file in /public
  const resumeUrl =
    (import.meta.env.VITE_RESUME_URL as string | undefined) || "/resume.pdf";
  const isExternalResume = /^https?:\/\//.test(resumeUrl);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await resp
        .json()
        .catch(() => ({ ok: false, error: "Malformed response" }));

      if (!resp.ok || !data?.ok) {
        const code: string | undefined = data?.code;
        let userMessage = content.contact.form.errorDesc;
        switch (code) {
          case "INVALID_EMAIL":
            userMessage = "Invalid email address.";
            break;
          case "CONTENT_TOO_SHORT":
            userMessage = "Subject or message is too short.";
            break;
          case "CONTENT_TOO_LONG":
            userMessage = "One or more fields exceed allowed length.";
            break;
          case "CONFIG_MISSING":
            userMessage = "Server email configuration missing.";
            break;
          case "DOMAIN_NOT_VERIFIED":
            userMessage = "Sender domain not verified. Contact owner.";
            break;
          case "AUTH_FAILED":
            userMessage = "Email service authentication failed.";
            break;
          case "SERVICE_FAILURE":
            userMessage = "Email service temporarily unavailable.";
            break;
          case "INTERNAL_ERROR":
            userMessage = "Internal server error.";
            break;
        }
        toast({
          title: content.contact.form.errorTitle,
          description: userMessage,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: content.contact.form.successTitle,
        description: content.contact.form.successDesc,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      toast({
        title: content.contact.form.errorTitle,
        description: content.contact.form.errorDesc,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-1 md:pb-2 gradient-text">
            {content.contact.heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.contact.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto lg:items-stretch items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full flex flex-col gap-8"
          >
            <Card className="glass p-8 cyber-glow flex-1 flex flex-col h-full justify-between">
              <h3 className="text-2xl font-bold mb-6">
                {content.contact.form.submit}
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex flex-col flex-1 justify-between"
              >
                {/* Honeypot field (hidden from users) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {content.contact.form.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="cyber-border focus:cyber-glow"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {content.contact.form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="cyber-border focus:cyber-glow"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    {content.contact.form.subject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="cyber-border focus:cyber-glow"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {content.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="cyber-border focus:cyber-glow resize-none flex-1"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cyber-glow font-semibold py-3 mt-4"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="mr-2"
                    >
                      <Send className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  {isSubmitting
                    ? content.contact.form.submitting
                    : content.contact.form.submit}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full flex flex-col gap-4"
          >
            {/* Contact Details */}
            <Card className="glass p-8 flex-1">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-4 ${
                      locale === "ar" ? "space-x-reverse" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Social Links (Connect with Me) moved under Send Message */}
            <Card className="glass p-8">
              <h3 className="text-xl font-bold mb-6">
                {content.contact.socialsHeading}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Resume Download */}
            <Card className="glass p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                {content.contact.resumeHeading}
              </h3>
              <p className="text-muted-foreground mb-6">
                {content.contact.resumeDesc}
              </p>
              <Button
                variant="outline"
                className="cyber-border hover:cyber-glow"
                asChild
              >
                <a
                  href={resumeUrl}
                  target={isExternalResume ? "_blank" : undefined}
                  rel={isExternalResume ? "noopener noreferrer" : undefined}
                  download={isExternalResume ? undefined : "resume.pdf"}
                  aria-label="Download resume"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {content.contact.resumeCta}
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
