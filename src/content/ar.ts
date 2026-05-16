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
        icon: "brain",
        title: "علم البيانات والذكاء الاصطناعي",
        color: "cyber-pink",
        skills: base.skills.categories[3].skills,
      },
      {
        icon: "cpu",
        title: "الأنظمة والتخصصات",
        color: "cyber-purple",
        skills: base.skills.categories[4].skills,
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
          ? "روبوت مستقل يتبع الجدران يربط بين محاكاة التوأم الرقمي Webots والأجهزة. تم تطوير برنامج ثابت C على bare-metal لـ ATmega328P."
          : p.id === 2
          ? "محرك ثلاثي الأبعاد عالي الأداء باستخدام C++17 و OpenGL 3.3 يتميز بنظام كيان ومكون (ECS) مدفوع بالبيانات."
          : p.id === 3
          ? "بنية خط أنابيب ذكاء اصطناعي مزدوج المسار للصيانة التنبؤية للمضخات والمراوح والمحركات. حقق دقة بنسبة 95.61%."
          : p.id === 4
          ? "الفوز بالمركز الأول في هاكاثون ODC x INSTANT AI من خلال تطوير خط أنابيب لتقطيع أورام الدماغ ثلاثية الأبعاد باستخدام MedNeXt."
          : p.id === 5
          ? "نظام نقاط بيع متعدد المنصات مبني باستخدام Flutter و Supabase. يتضمن بحثاً في المخزون وإدارة السلة ومزامنة دون اتصال باستخدام Hive."
          : p.id === 6
          ? "تطبيق Flutter للتحكم في روبوت قائم على معالج دقيق في الزمن الحقيقي عبر بروتوكول HTTP."
          : p.id === 7
          ? "روبوت محادثة وتوصية للتجارة الإلكترونية مدعوم بالذكاء الاصطناعي في Flutter باستخدام Gemini API وإدارة الحالة بـ Bloc ورسوم متحركة مخصّصة."
          : p.id === 8
          ? "تطبيق وصفات مع عوامل تصفية وحفظ دون اتصال باستخدام Hive ومؤقتات طبخ تفاعلية لتجربة سلسة."
          : p.id === 9
          ? "لعبة كسر الطوب متعددة اللاعبين بلغة التجميع مع اتصال فوري عبر Wi‑Fi وعرض رسومي فعّال."
          : p.id === 10
          ? "موقع بورتفوليو تفاعلي مبني بـ React وTypeScript وThree.js وTailwindCSS مع دعم لغات متعددة وخلفية ثلاثية الأبعاد لكواكب شبيهة بزحل وواجهة بأسلوب الطرفية."
          : p.id === 11
          ? "تصميم معالج مجدول خماسي المراحل 32 بت في VHDL مع بنية Von Neumann."
          : p.id === 12
          ? "تطبيق شبكات اجتماعية React Native مع Expo يتميز بمحادثات حقيقية واختصارات ذكية."
          : p.id === 13
          ? "خط أنابيب تعلم آلي للتنبؤ بالمبيعات الأسبوعية بدقة عالية."
          : p.id === 14
          ? "مسرع تلافيف 2D عالي الأداء في Verilog."
          : p.id === 15
          ? "تقييم 10 بنيات تجزئة تشفيرية مختلفة (BLAKE، Keccak، Skein، إلخ)."
          : p.id === 16
          ? "منصة تقييم مدفوعة بالأبحاث للذكاء الاصطناعي متعدد الوسائط."
          : p.id === 17
          ? "امتداد عالي التزامن لمحرك البحث Sherlook في Rust باستخدام Tokio."
          : p.description,
    })),
  },
  experience: {
    heading: "الخبرات",
    subheading: "رحلتي المهنية والأثر الذي حققته",
    educationHeading: "التعليم",
    timeline: base.experience.timeline.map((item) => ({
      ...item,
      company: 
        item.id === 1 ? "Orange Digital Center Egypt" :
        item.id === 2 ? "Udacity (Digital Egypt Cubs Initiative - DECI)" :
        item.id === 3 ? "Enactus Cairo University" :
        item.id === 4 ? "i'SUPPLY" :
        item.id === 5 ? "Digital Egypt Pioneers Initiative (DEPI)" :
        item.id === 6 ? "Banque Misr" :
        item.id === 7 ? "Informatique" :
        item.id === 8 ? "IEEE Cairo University SB" :
        item.id === 9 ? "Orange Digital Center Egypt" :
        item.id === 10 ? "Slash Hub" : item.company,
      position:
        item.id === 1 ? "متدرب ذكاء اصطناعي (Agentic AI)" :
        item.id === 2 ? "قائد جلسة (Session Lead)" :
        item.id === 3 ? "عضو فريق إدارة الموارد" :
        item.id === 4 ? "مطوّر برمجيات" :
        item.id === 5 ? "متدرب علم بيانات" :
        item.id === 6 ? "متدرب تطوير أندرويد" :
        item.id === 7 ? "متدرب تطوير تطبيقات جوال" :
        item.id === 8 ? "مدرّس Flutter" :
        item.id === 9 ? "متدرّب مطوّر Flutter" :
        item.id === 10 ? "مطوّر تطبيقات جوال" : item.position,
      description:
        item.id === 1 ? "خبرة عملية في بناء وكلاء الذكاء الاصطناعي باستخدام LLMs ونظام LangChain." :
        item.id === 2 ? "قيادة جلسات أسبوعية لمجموعات الطلاب، وتقديم أساسيات الكمبيوتر الأساسية." :
        item.id === 3 ? "ساهم كعضو في فريق إدارة الموارد، ودعم أنشطة التخطيط والتحضير." :
        item.id === 4 ? "انضممت بعد الفوز بالمركز الأول في هاكاثون الشركة؛ أساهم في نظام نقاط بيع مبني بـ Flutter." :
        item.id === 5 ? "مسار عالم بيانات من IBM مع خبرة عملية في Python وSQL وتحليل البيانات وتعلم الآلة." :
        item.id === 6 ? "برنامج تطوير أندرويد متقدم يركّز على Jetpack وRoom Database وهندسة قابلة للتوسع." :
        item.id === 7 ? "تدريب يجمع بين تطوير Flutter وتطبيق التعلم الآلي لبناء نماذج أولية عملية." :
        item.id === 8 ? "قدت المرحلة الأولى من تدريب Flutter مغطياً أساسيات Dart والبرمجة الكائنية." :
        item.id === 9 ? "برنامج عملي لـ Flutter يشمل تصميم الواجهات وإدارة الحالة والنشر." :
        item.id === 10 ? "المساهمة في خصائص روبوت محادثة تجارة إلكترونية مدعوم بالذكاء الاصطناعي." : item.description,
    })),
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
