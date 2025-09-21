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
      "مهندس حاسبات مبتدئ يطوّر حلولاً رقمية متمحورة حول المستخدم في تطبيقات الجوال والبيانات. أتعلّم عبر المشاريع العملية وأحسّن برمجيات موثوقة تعالج مشكلات حقيقية وأطوّر مهاراتي باستمرار خارج قاعات الدراسة.",
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
    role: "مطوّر برمجيات ومهندس حاسبات",
    bio1: "مهندس حاسبات مبتدئ بجامعة القاهرة يطوّر حلولاً متمحورة حول المستخدم في تطبيقات الجوال والبيانات. أتعلم بالممارسة وأحسّن برمجيات موثوقة تضيف قيمة فعلية.",
    bio2: "أركّز على Flutter وKotlin وهياكل البيانات والخوارزميات والهندسة النظيفة وKotlin Multiplatform، وأتدرّب حالياً في مجال علم البيانات (Python وSQL وMLflow وأساسيات ML) مستكشفاً تطبيقات عملية للتعلّم الآلي.",
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
        name: "البيانات والتخزين",
        description:
          "تصميم طبقات بيانات موثوقة: نمذجة SQL/NoSQL ومزامنة دون اتصال واستعلامات عالية الأداء",
      },
      {
        icon: "zap",
        name: "حل المشكلات الخوارزمية",
        description:
          "حلول فعّالة ومُحسّنة مبنية على أساس قوي في هياكل البيانات والخوارزميات",
      },
      {
        icon: "brain",
        name: "علم البيانات وML",
        description:
          "تطبيق Python وSQL وMLflow وتقنيات التعلم الآلي (تصنيف، توصيات) بعقلية تجريبية",
      },
    ],
  },
  projects: {
    heading: "مشاريع مميّزة",
    subheading: "عرض لأحدث أعمالي واستكشافاتي الإبداعية",
    moreHeading: "مشاريع أخرى",
    ctaAllGithub: "عرض الكل على GitHub",
    ctaAllGithubLink: base.projects.ctaAllGithubLink,
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
          : p.id === 6
          ? "موقع بورتفوليو تفاعلي مبني بـ React وTypeScript وThree.js وTailwindCSS مع دعم لغات متعددة وخلفية ثلاثية الأبعاد لكواكب شبيهة بزحل وواجهة بأسلوب الطرفية."
          : p.description,
    })),
  },
  experience: {
    heading: "الخبرات",
    subheading: "رحلتي المهنية والأثر الذي حققته",
    educationHeading: "التعليم",
    timeline: [
      {
        id: 1,
        company: "i'SUPPLY",
        position: "مطوّر Flutter",
        period: "يوليو 2025 - الآن",
        location: "المعادي، القاهرة، مصر",
        type: "تدرّب",
        description:
          "انضممت بعد الفوز بالمركز الأول في هاكاثون الشركة؛ أساهم في نظام نقاط بيع مبني بـ Flutter بالتعاون مع فرق الخلفية وضمان الجودة.",
        achievements: [
          "المركز الأول بين أكثر من 30 فريقاً في هاكاثون داخلي",
          "تطبيق ميزات POS بهندسة نظيفة ومزامنة دون اتصال",
          "تعاون متعدد التخصصات لتحسين الأداء وتجربة المستخدم",
        ],
        technologies: ["Flutter", "Supabase", "Hive", "Dart"],
      },
      {
        id: 2,
        company: "مبادرة رواد مصر الرقمية (DEPI)",
        position: "متدرّب علم بيانات",
        period: "يونيو 2025 - الآن",
        location: "الجيزة، مصر",
        type: "تدريب",
        description:
          "مسار عالم بيانات من IBM مع خبرة عملية في Python وSQL وتحليل البيانات وتعلم الآلة وأدوات MLOps (MLflow, Hugging Face).",
        achievements: [
          "التقدّم في وحدات Python والتصور والهندسة التوليدية للمطالبات",
          "تطبيق تقنيات ML في مشروع تخرّج",
          "دمج أدوات MLOps لتتبع التجارب",
        ],
        technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "MLflow"],
      },
      {
        id: 3,
        company: "Banque Misr",
        position: "مطور أندرويد (Kotlin)",
        period: "يوليو 2025 - سبتمبر 2025",
        location: "القاهرة الجديدة، مصر",
        type: "تدريب",
        description:
          "برنامج تطوير أندرويد متقدم يركّز على Jetpack وRoom Database وهندسة قابلة للتوسع.",
        achievements: [
          "بناء وحدات تجريبية باستخدام مكوّنات Jetpack",
          "تنفيذ طبقة تخزين بـ Room واستراتيجيات دون اتصال",
          "تبنّي أنماط Kotlin حديثة للصيانة",
        ],
        technologies: ["Kotlin", "Room", "Jetpack", "Android"],
      },
      {
        id: 4,
        company: "Informatique",
        position: "مطوّر Flutter (تعلم آلي)",
        period: "يوليو 2025 - أغسطس 2025",
        location: "مدينة نصر، مصر",
        type: "تدرّب",
        description:
          "تدريب يجمع بين تطوير Flutter وتطبيق التعلم الآلي لبناء نماذج أولية عملية.",
        achievements: [
          "دمج خصائص مدعومة بـ ML داخل تدفقات Flutter",
          "تحسين الدقة عبر تجارب متكررة",
          "تسليم نماذج أولية في دورات قصيرة",
        ],
        technologies: ["Flutter", "Dart", "Machine Learning"],
      },
      {
        id: 5,
        company: "IEEE Cairo University SB",
        position: "مدرّس Flutter",
        period: "فبراير 2025 - مايو 2025",
        location: "القاهرة، مصر",
        type: "تطوّع",
        description:
          "قدت المرحلة الأولى من تدريب Flutter مغطياً أساسيات Dart والبرمجة الكائنية وواجهات البداية لـ 30+ طالباً.",
        achievements: [
          "تقديم 3 جلسات أساسية بتقييم إيجابي قوي",
          "أنشطة عملية ساعدت المبتدئين على التقدّم",
          "تعزيز ثقة المشاركين للاستمرار في التعلم",
        ],
        technologies: ["Flutter", "Dart"],
      },
      {
        id: 6,
        company: "Orange Digital Center Egypt",
        position: "متدرّب مطوّر Flutter",
        period: "يناير 2025 - مارس 2025",
        location: "القاهرة، مصر",
        type: "تدريب",
        description:
          "برنامج عملي لـ Flutter يشمل تصميم الواجهات وإدارة الحالة والنشر.",
        achievements: [
          "تطبيق أنماط Bloc وProvider عبر تطبيقات تجريبية",
          "نشر إصدارات توضيحية لأهداف التعلم",
          "تبنّي مبادئ الهندسة النظيفة للتوسع",
        ],
        technologies: ["Flutter", "Bloc", "Provider"],
      },
      {
        id: 7,
        company: "Slash Hub",
        position: "مطوّر تطبيقات جوال",
        period: "أكتوبر 2024 - ديسمبر 2024",
        location: "القاهرة، مصر (عن بُعد)",
        type: "تدرّب",
        description:
          "المساهمة في خصائص روبوت محادثة تجارة إلكترونية مدعوم بالذكاء الاصطناعي وتحسين الأداء.",
        achievements: [
          "تحسين تفاعل المستخدم بنسبة 25%",
          "خفض أوقات التحميل 30% عبر التخزين المؤقت",
          "إطلاق ميزات تدريجية ضمن فريق Agile",
        ],
        technologies: ["Flutter", "REST APIs", "Dio"],
      },
    ],
    education: [
      {
        institution: "جامعة القاهرة - كلية الهندسة",
        degree: "بكالوريوس هندسة الحاسبات",
        period: "2022 - 2027 (متوقع)",
        location: "القاهرة، مصر",
        description:
          "تخصص في هندسة البرمجيات وهياكل البيانات والخوارزميات وأنظمة التشغيل والمعالجات الدقيقة.",
        projects: [
          "مجدول نظام تشغيل بلغة C",
          "محرك بحث بواجهة خلفية Spring Boot",
          "نظام روبوت مُتحكّم فيه بمعالج دقيق (تطبيق Zengbary)",
        ],
      },
    ],
    certifications: [
      "Microsoft - استغلال أدوات وموارد الذكاء الاصطناعي لعملك",
      "Microsoft - بناء تطبيق مُحسَّن للجوال باستخدام Power Apps",
      "Sprints x Banque Misr - تطوير حديث لتطبيقات الجوال بـ Kotlin",
      "Microsoft - تنفيذ إدارة تطبيقات الجوال",
      "Sprints x Microsoft Summer Camp - تطوير الجوال",
    ],
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
