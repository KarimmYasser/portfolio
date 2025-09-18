import base, { type Content } from "./en.ts";

const ar: Content = {
  ...base,
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
    greeting: "مرحباً، أنا",
    name: "كريم ياسر",
    title: "مطوّر برمجيات ومهندس حاسبات",
    description:
      "مهندس حاسبات موجّه للنتائج ولديه خبرة عملية في تطبيقات الهاتف متعددة المنصات والحلول الويب. مُلمّ بالهندسة النظيفة وأساسيات هندسة البرمجيات لتقديم تطبيقات قابلة للتوسع وتركّز على المستخدم.",
    favoriteCarLabel: "هذه سيارتي المفضلة",
    favoriteCarName: "فيراري 458 إيطاليا",
    ctas: {
      seeProjects: "استعراض المشاريع",
      getInTouch: "تواصل معي",
      openInTerminal: "افتح في الطرفية",
    },
  },
  about: {
    heading: "نبذة عني",
    subheading: "مهندس حاسبات شغوف ببناء تطبيقات مؤثرة وقابلة للتوسع",
    avatarInitials: "KY",
    name: "كريم ياسر",
    role: "مطوّر Flutter ومهندس برمجيات",
    bio1: "كطالب هندسة حاسبات بجامعة القاهرة مع خبرة عملية في Flutter وتطوير الويب، أركّز على بناء تطبيقات جوال متعددة المنصات وحلول Backend قوية. أستمتع بتطبيق الهندسة النظيفة وأساسيات البرمجة لتقديم منتجات قابلة للتوسع ومتمحورة حول المستخدم.",
    bio2: "بعيداً عن التطوير، أتعلم باستمرار تقنيات جديدة، وأتعمّق في الخوارزميات وهياكل البيانات، وأستكشف كيفية تطبيق الأطر الحديثة لحل مشكلات واقعية.",
    values: [
      {
        icon: "code",
        title: "كود نظيف",
        description:
          "صياغة كود أنيق وفعّال وقوي بلغات ++C وDart وPython وKotlin يدوم مع الزمن.",
      },
      {
        icon: "heart",
        title: "متمحور حول المستخدم",
        description:
          "تصميم تطبيقات بفهم عميق لسلوك المستخدم لتحويل المسارات المعقّدة إلى تجارب سلسة.",
      },
      {
        icon: "zap",
        title: "ابتكار",
        description:
          "دفع الحدود باستخدام أطر حديثة وKotlin Multiplatform وحلول مدفوعة بالبيانات تحقق أثراً.",
      },
      {
        icon: "target",
        title: "حل المشكلات",
        description:
          "تفكيك المشكلات الصعبة إلى حلول عملية تجمع بين دقّة الخوارزميات والهندسة التطبيقية.",
      },
    ],
    technologies: base.about.technologies,
  },
  skills: {
    heading: "المهارات والخبرة",
    subheading: "مجموعة أدوات صقلتها أساسيات الهندسة ومشروعات من الواقع",
    categories: [
      {
        icon: "smartphone",
        title: "تطوير تطبيقات الجوال",
        color: "cyber-blue",
        skills: base.skills.categories[0].skills,
      },
      {
        icon: "database",
        title: "الخوادم وقواعد البيانات",
        color: "cyber-purple",
        skills: base.skills.categories[1].skills,
      },
      {
        icon: "code2",
        title: "أساسيات هندسة البرمجيات",
        color: "cyber-green",
        skills: base.skills.categories[2].skills,
      },
      {
        icon: "cpu",
        title: "الأنظمة والأدوات",
        color: "cyber-pink",
        skills: base.skills.categories[3].skills,
      },
    ],
    toolsHeading: "ماذا أستطيع أن أقدّمه لك",
    tools: [
      {
        icon: "smartphone",
        name: "تطوير الجوال",
        description: "تطبيقات متعددة المنصات باستخدام Flutter وهندسة نظيفة",
      },
      {
        icon: "globe",
        name: "حلول الويب",
        description: "خوادم وتطبيقات ويب قوية مع أنظمة تعتمد على SQL",
      },
      {
        icon: "zap",
        name: "حل المشكلات الخوارزمية",
        description:
          "حلول فعّالة ومُحسّنة مبنية على أساس قوي في هياكل البيانات والخوارزميات",
      },
      {
        icon: "brain",
        name: "التعلّم والتكيّف",
        description: "أتعلّم التقنيات الجديدة بسرعة وأطبقها في مشروعات واقعية",
      },
    ],
  },
  projects: {
    heading: "مشاريع مميّزة",
    subheading: "عرض لأحدث أعمالي واستكشافاتي الإبداعية",
    moreHeading: "مشاريع أخرى",
    ctaAllGithub: "عرض الكل على GitHub",
    items: base.projects.items.map((p) => ({
      ...p,
      description:
        p.id === 1
          ? "نظام نقاط بيع متعدد المنصات مبنيّ باستخدام Flutter وSupabase. يتضمن بحثاً في المخزون وإدارة السلة ومزامنة دون اتصال باستخدام Hive."
          : p.id === 2
          ? "تطبيق Flutter للتحكم في روبوت قائم على معالج دقيق في الزمن الحقيقي عبر بروتوكول HTTP."
          : p.id === 3
          ? "روبوت محادثة وتوصية للتجارة الإلكترونية مدعوم بالذكاء الاصطناعي في Flutter باستخدام Gemini API وإدارة الحالة بـ Bloc ورسوم متحركة مخصّصة."
          : p.id === 4
          ? "تطبيق وصفات مع عوامل تصفية وحفظ دون اتصال باستخدام Hive ومؤقتات طبخ تفاعلية لتجربة سلسة."
          : p.id === 5
          ? "لعبة كسر الطوب متعددة اللاعبين بلغة التجميع مع اتصال فوري عبر Wi‑Fi وعرض رسومي فعّال."
          : p.description,
    })),
  },
  experience: {
    heading: "الخبرات",
    subheading: "رحلتي المهنية والأثر الذي حققته",
    educationHeading: "التعليم",
    timeline: base.experience.timeline.map((t) => ({
      ...t,
      position:
        t.position === "Flutter Developer Intern"
          ? "متدرّب مطوّر Flutter"
          : t.position === "Flutter Instructor"
          ? "مدرّس Flutter"
          : t.position === "Mobile App Development Trainee"
          ? "متدرّب تطوير تطبيقات جوال"
          : t.position,
      type:
        t.type === "Internship"
          ? "تدرّب"
          : t.type === "Volunteer"
          ? "تطوّع"
          : t.type === "Training"
          ? "تدريب"
          : t.type,
      description:
        t.id === 1
          ? "أعمل على نظام نقاط بيع باستخدام Flutter بعد حصولي على المركز الأوّل في هاكاثون الشركة."
          : t.id === 2
          ? "قدّمت منهج Flutter للطلاب متضمناً إدارة الحالة وواجهات برمجة التطبيقات وواجهات متقدّمة."
          : t.id === 3
          ? "أتممت برنامج تدريب Flutter لمدة 96 ساعة يركّز على التطوير متعدد المنصات والهندسة النظيفة."
          : t.id === 4
          ? "ساهمت في روبوت محادثة للتجارة الإلكترونية مدعوم بالذكاء الاصطناعي باستخدام Flutter وواجهات REST."
          : t.description,
      achievements:
        t.id === 1
          ? [
              "حصلت على المركز الأوّل من بين 30+ فريقاً في الهاكاثون",
              "ساهمت في بنية وميزات تطبيق نقاط البيع",
              "تعاونت مع مهندسي الخلفية وأفراد الاختبار",
            ]
          : t.id === 2
          ? [
              "درّبت أكثر من 30 طالباً مع 90% تقييم إيجابي",
              "85% بنوا تطبيقات حقيقية بنهاية الدورة",
              "مواد تفاعلية زادت التفاعل بنسبة 40%",
            ]
          : t.id === 3
          ? [
              "أتقنت إدارة الحالة المتقدمة باستخدام Bloc وProvider",
              "طبّقت الهندسة النظيفة لسهولة الصيانة",
              "بنيت عدة تطبيقات وعروض تدريبية",
            ]
          : t.id === 4
          ? [
              "حسّنت تفاعل المستخدم بنسبة 25%",
              "قلّلت أوقات التحميل 30% عبر التخزين المؤقت",
              "سلمت ميزات ضمن فريق Agile",
            ]
          : t.achievements,
    })),
    education: base.experience.education.map((e) => ({
      ...e,
      institution: "جامعة القاهرة - كلية الهندسة",
      degree: "بكالوريوس هندسة الحاسبات",
      location: "القاهرة، مصر",
      description:
        "تخصص في هندسة البرمجيات وهياكل البيانات والخوارزميات وأنظمة التشغيل والمعالجات الدقيقة.",
      projects: [
        "مُجدول نظام تشغيل بلغة C",
        "محرك بحث مع واجهة خلفية بـ Spring Boot",
        "نظام روبوت مُتحكَّم به بمعالج دقيق (تطبيق زنجبرى)",
      ],
    })),
  },
  contact: {
    heading: "دعنا نعمل معاً",
    subheading:
      "هل أنت مستعد لتحويل رؤيتك الرقمية إلى واقع؟ لنتحدث ونصنع شيئاً رائعاً معاً.",
    form: {
      name: "الاسم *",
      email: "البريد الإلكتروني *",
      subject: "الموضوع *",
      message: "الرسالة *",
      submit: "إرسال الرسالة",
      submitting: "جارٍ الإرسال...",
      successTitle: "تم إرسال الرسالة!",
      successDesc: "شكراً على رسالتك. سأتواصل معك قريباً!",
      errorTitle: "خطأ",
      errorDesc: "تعذّر إرسال الرسالة. حاول مرة أخرى.",
    },
    quickChatHeading: "مكالمة سريعة؟",
    quickChatDesc: "تفضّل مكالمة قصيرة؟ أنا متاح لاستشارة لمدة 15 دقيقة.",
    scheduleCall: "حجز مكالمة",
    resumeHeading: "مهتم بعملي؟",
    resumeDesc: "حمّل سيرتي الذاتية للتعرّف أكثر على خبرتي ومهاراتي.",
    resumeCta: "تحميل السيرة الذاتية",
    socialsHeading: "تواصل معي",
  },
  footer: {
    brand: "<كريم ياسر/>",
    tagline: "نصنع تجارب رقمية تمزج الإبداع بأحدث التقنيات.",
    navHeading: "التنقّل",
    contactHeading: "طرق التواصل",
    builtWith: "بُني باستخدام React وThree.js وTailwindCSS",
    rights: "© {year} كريم ياسر. صُنع بحب وكثير من القهوة",
  },
  socials: base.socials,
};

export default ar;
