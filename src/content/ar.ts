// Arabic locale - initial translations; expand as needed
import base, { type Content } from "./en.ts";

const ar: Content = {
  ...base,
  meta: {
    ...base.meta,
  },
  nav: {
    items: [
      { label: "الرئيسية", href: "#home" },
      { label: "عنّي", href: "#about" },
      { label: "المهارات", href: "#skills" },
      { label: "المشاريع", href: "#projects" },
      { label: "الخبرات", href: "#experience" },
      { label: "تواصل", href: "#contact" },
    ],
  },
  hero: {
    ...base.hero,
    greeting: "مرحباً، أنا",
    title: "مطور إبداعي ومهندس رقمي",
    description:
      "أبني واجهات جميلة وأداءً عالياً وتجارب تفاعلية تجمع بين التصميم والهندسة.",
    ctas: {
      seeProjects: "استعراض المشاريع",
      getInTouch: "تواصل معي",
    },
  },
  about: {
    ...base.about,
    heading: "نبذة عني",
    subheading: "مطور شغوف يصنع تجارب رقمية مؤثرة",
    role: base.about.role, // keep English if brand-specific
  },
  skills: {
    ...base.skills,
    heading: "المهارات والخبرة",
    toolsHeading: "ماذا أستطيع أن أقدم لك",
  },
  projects: {
    ...base.projects,
    heading: "مشاريع مميزة",
    moreHeading: "مشاريع أخرى",
    ctaAllGithub: "استعراض الكل على GitHub",
  },
  experience: {
    ...base.experience,
    heading: "الخبرات",
    educationHeading: "التعليم",
  },
  contact: {
    ...base.contact,
    heading: "دعنا نعمل معاً",
    subheading:
      "هل أنت مستعد لتحويل رؤيتك الرقمية إلى واقع؟ لنتحدث ونبتكر شيئاً رائعاً.",
    form: {
      ...base.contact.form,
      name: "الاسم *",
      email: "البريد الإلكتروني *",
      subject: "الموضوع *",
      message: "الرسالة *",
      submit: "إرسال الرسالة",
      submitting: "جاري الإرسال...",
    },
    quickChatHeading: "مكالمة سريعة؟",
    quickChatDesc: "تفضّل مكالمة قصيرة؟ أنا متاح لاستشارة لمدة 15 دقيقة.",
    scheduleCall: "حجز مكالمة",
    resumeHeading: "مهتم بعملي؟",
    resumeDesc: "قم بتحميل السيرة الذاتية للتعرّف أكثر على خبراتي ومهاراتي.",
    resumeCta: "تحميل السيرة الذاتية",
    socialsHeading: "تواصل معي",
  },
  footer: {
    ...base.footer,
    navHeading: "روابط",
    contactHeading: "معلومات التواصل",
    builtWith: "بُني باستخدام React و Three.js و TailwindCSS",
    rights: "© {year} Alex Chen. صُنع بحب وكثير من القهوة",
  },
};

export default ar;
