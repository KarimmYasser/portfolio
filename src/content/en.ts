// Centralized content for easy editing/localization
// Copy this file to another locale (e.g., ar.ts, es.ts) and wire it via src/content/index.ts

export type SocialLink = {
  label: string;
  href: string;
  color?: string;
  icon?: string; // semantic key: 'github' | 'linkedin' | 'x' | 'mail'
};

export type Content = {
  meta: {
    siteName: string;
    author: string;
    location: string;
    email: string;
    phone: string;
  };
  nav: { items: { label: string; href: string }[] };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    favoriteCarLabel?: string;
    favoriteCarName?: string;
    ctas: {
      seeProjects: string;
      getInTouch: string;
      openInTerminal: string;
    };
  };
  about: {
    heading: string;
    subheading: string;
    avatarInitials: string;
    name: string;
    role: string;
    bio1: string;
    bio2: string;
    values: { title: string; description: string; icon: string }[]; // icon: 'code' | 'heart' | 'zap' | 'target'
    technologies: string[];
  };
  skills: {
    heading: string;
    subheading: string;
    categories: {
      icon: string; // 'code2' | 'database' | 'cloud' | 'palette'
      title: string;
      color: string; // tailwind token suffix used in from-*/to-* bg gradients
      skills: { name: string; level: number }[];
    }[];
    toolsHeading: string;
    tools: { icon: string; name: string; description: string }[]; // icon: 'globe' | 'smartphone' | 'zap' | 'brain'
  };
  projects: {
    ctaAllGithubLink: string;
    heading: string;
    subheading: string;
    moreHeading: string;
    ctaAllGithub: string;
    items: {
      id: number;
      title: string;
      description: string;
      image: string;
      tags: string[];
      featured: boolean;
      hasDemo?: boolean;
      links: { demo: string; github: string };
      hasGithubRepo?: boolean;
      hidden?: boolean; // added hidden flag
    }[];
  };
  experience: {
    heading: string;
    subheading: string;
    educationHeading: string;
    timeline: {
      id: number;
      company: string;
      position: string;
      period: string;
      location: string;
      type: string;
      description: string;
      achievements: string[];
      technologies: string[];
    }[];
    education: {
      institution: string;
      degree: string;
      period: string;
      location: string;
      description: string;
      projects: string[];
    }[];
    certifications: string[]; // added list of certifications
  };
  contact: {
    heading: string;
    subheading: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successDesc: string;
      errorTitle: string;
      errorDesc: string;
    };
    quickChatHeading: string;
    quickChatDesc: string;
    scheduleCall: string;
    resumeHeading: string;
    resumeDesc: string;
    resumeCta: string;
    socialsHeading: string;
  };
  footer: {
    brand: string;
    tagline: string;
    navHeading: string;
    contactHeading: string;
    builtWith: string;
    rights: string; // use {year} placeholder
  };
  socials: SocialLink[];
};

const content: Content = {
  meta: {
    siteName: "Karim's Portfolio",
    author: "Karim Yasser",
    location: "Cairo, Egypt",
    email: "karimmyasserr@gmail.com",
    phone: "+20 114 443 2284", // unchanged in supplied data (mobile listed as 01144432284 -> local format). Keep international version.
  },
  nav: {
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Karim Yasser",
    title: "Software Developer & Computer Engineer",
    description:
      "Junior computer engineer creating user-focused mobile and data-driven solutions. I learn through hands-on projects, refine reliable software that solves real problems, and keep expanding my skills beyond the classroom.",
    favoriteCarLabel: "that's my favorite car",
    favoriteCarName: "Ferrari 458 Italia",
    ctas: {
      seeProjects: "See Projects",
      getInTouch: "Get in Touch",
      openInTerminal: "Open in Terminal",
    },
  },
  about: {
    heading: "About Me",
    subheading:
      "A computer engineer passionate about building impactful, scalable applications",
    avatarInitials: "KY",
    name: "Karim Yasser",
    role: "Software Developer & Computer Engineer",
    bio1: "Computer Engineer with 2+ years of experience developing mobile and web applications using Flutter, Android, and modern development frameworks. Proven track record in full-stack development, machine learning integration, and agile development methodologies. Strong problem solving skills with experience in data structures, algorithms, and software architecture. Experience leading technical teams and delivering scalable solutions for real-world business challenges.",
    bio2: "I focus on Flutter, Kotlin, data structures, algorithms, clean architecture, and emerging cross‑platform paradigms like Kotlin Multiplatform while actively training in Data Science (Python, SQL, MLflow, ML fundamentals) and exploring practical ML applications.",
    values: [
      {
        icon: "code",
        title: "Clean Code",
        description:
          "Crafting elegant, efficient, and robust code in C++, Dart, Python, and Kotlin that stands the test of time.",
      },
      {
        icon: "heart",
        title: "User-Centric",
        description:
          "Designing apps with a deep understanding of user behavior, turning complex workflows into seamless experiences.",
      },
      {
        icon: "zap",
        title: "Innovation",
        description:
          "Pushing boundaries with cutting-edge frameworks, Kotlin Multiplatform, and data-driven solutions that deliver impact.",
      },
      {
        icon: "target",
        title: "Problem Solving",
        description:
          "Deconstructing tough problems into actionable solutions, combining algorithmic precision with practical engineering.",
      },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Kotlin Multiplatform (KMP)",
      "React Native",
      "MySQL",
      "C++",
      "Python",
      "Data Structures",
      "Algorithms",
      "Data Science",
    ],
  },
  skills: {
    heading: "Skills & Expertise",
    subheading:
      "A toolkit shaped by engineering fundamentals and real-world projects",
    categories: [
      {
        icon: "smartphone",
        title: "Mobile Development",
        color: "cyber-blue",
        skills: [
          { name: "Flutter/Dart", level: 95 },
          { name: "Kotlin", level: 75 },
          { name: "KMP (Kotlin Multiplatform)", level: 72 },
          { name: "React Native", level: 60 },
        ],
      },
      {
        icon: "database",
        title: "Backend & Databases",
        color: "cyber-purple",
        skills: [
          { name: "Hive", level: 80 },
          { name: "Supabase", level: 70 },
          { name: "MySQL/PostgreSQL", level: 85 },
          { name: "SQLite", level: 75 },
        ],
      },
      {
        icon: "code2",
        title: "Core Software Engineering",
        color: "cyber-green",
        skills: [
          { name: "C++ (DS & Algorithms)", level: 95 },
          { name: "Python", level: 85 },
          { name: "Clean Architecture", level: 88 },
          { name: "Data Structures", level: 90 },
        ],
      },
      {
        icon: "cpu",
        title: "Systems & Tools",
        color: "cyber-pink",
        skills: [
          { name: "Git/GitHub", level: 85 },
          { name: "Docker", level: 75 },
          { name: "FastAPI", level: 70 },
          { name: "PyTorch", level: 70 },
        ],
      },
    ],
    toolsHeading: "What I Can Do For You",
    tools: [
      {
        icon: "smartphone",
        name: "Mobile Development",
        description: "Cross-platform apps with Flutter and clean architecture",
      },
      {
        icon: "globe",
        name: "Data & Persistence",
        description:
          "Designing reliable data layers: SQL/NoSQL modeling, offline sync, and performant querying",
      },
      {
        icon: "zap",
        name: "Algorithmic Problem Solving",
        description:
          "Efficient, optimized solutions built on strong DS & Algo foundations",
      },
      {
        icon: "brain",
        name: "Data Science & ML",
        description:
          "Applying Python, SQL, MLflow, and ML techniques (classification, recommendations) with an experimentation mindset",
      },
    ],
  },
  projects: {
    heading: "Featured Projects",
    subheading: "A showcase of my latest work and creative explorations",
    moreHeading: "More Projects",
    ctaAllGithub: "View All on GitHub",
    ctaAllGithubLink: "https://github.com/KarimmYasser?tab=repositories",
    items: [
      {
        id: 1,
        title: "Autonomous Wall-Following Robot",
        description:
          "Engineered a high-performance autonomous robot bridging Webots Digital Twin simulation and hardware. Developed professional-grade bare-metal C firmware for ATmega328P.",
        image: "/placeholder.svg",
        tags: ["Bare-Metal C", "ATmega328P", "Webots", "PID Controller"],
        featured: true,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/robot-wall-follower",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 2,
        title: "Aladdin: Nasira's Revenge - C++ Game Engine",
        description:
          "Developed a high-performance 3D engine using C++17 and OpenGL 3.3 featuring a data-driven Entity Component System (ECS).",
        image: "/placeholder.svg",
        tags: ["C++17", "OpenGL", "ECS", "Game Engine"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/aladdin-nasiras-revenge",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 3,
        title: "Industrial Machine Sound Classification",
        description:
          "Architected a Dual-Track AI pipeline for predictive maintenance of pumps, fans, and motors. Achieved 95.61% accuracy.",
        image: "/placeholder.svg",
        tags: ["XGBoost", "EfficientAT", "Rust", "Docker"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/machine-sound-classification",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 4,
        title: "BioMedIAMBZ - Brain Tumor Segmentation",
        description:
          "Won 1st place in the ODC x INSTANT AI Hackathon by developing a 3D brain tumor segmentation pipeline using MedNeXt.",
        image: "/placeholder.svg",
        tags: ["PyTorch", "MONAI", "MedNeXt", "FastAPI"],
        featured: true,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/braTs-ai-hackathon-ODCxINSTANT",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 5,
        title: "i'Supply POS App",
        description:
          "Cross-platform POS system built with Flutter and Supabase. Features inventory search, cart management, and offline-first synchronization with Hive.",
        image: "/pos.png",
        tags: ["Flutter", "Supabase", "Hive", "Clean Architecture"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/isupply_app",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 6,
        title: "Zengbary App",
        description:
          "Flutter app controlling a microprocessor-based robot in real-time over HTTP.",
        image: "/zengbary.jpg",
        tags: ["Flutter", "Dio", "Microprocessor", "HTTP"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/ZengebaryRobot/flutter-app",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 7,
        title: "Fashion Assistant",
        description:
          "AI-powered Flutter e-commerce chatbot and recommendation system using Gemini API, Bloc state management, and custom animations.",
        image: "/fashion_assistant.jpg",
        tags: ["Flutter", "Gemini API", "Bloc", "AI Integration"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/Slash-Fashion-Assistant-App",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 8,
        title: "Cooking Up App",
        description:
          "Recipe app with filtering, offline persistence using Hive, and interactive cooking timers for a smooth UX.",
        image: "/placeholder.svg",
        tags: ["Flutter", "Hive", "Clean Architecture"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/Cooking-up-application",
        },
        hasDemo: false,
        hasGithubRepo: true,
        hidden: true,
      },
      {
        id: 9,
        title: "Bricks Breaker - Assembly Game",
        description:
          "Multiplayer brick breaker game in Assembly with real-time networking over Wi-Fi and efficient graphics rendering.",
        image: "/bricks.png",
        tags: ["Assembly", "Networking", "Game Dev"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/brick-breaker-pro",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 10,
        title: "3D Portfolio Website",
        description:
          "Interactive developer portfolio built with React, TypeScript, Three.js (react-three-fiber) and TailwindCSS featuring multilingual support, dynamic stars and planet background, and a terminal-style interface.",
        image: "/home.png",
        tags: ["React", "TypeScript", "Three.js", "TailwindCSS", "i18n"],
        featured: false,
        links: {
          demo: "https://karim-yasser.vercel.app/",
          github: "#",
        },
        hasDemo: true,
        hasGithubRepo: false,
      },
      {
        id: 11,
        title: "5-Stage Pipelined Processor",
        description:
          "Designed a 32-bit 5-stage pipelined processor in VHDL with Von Neumann architecture, hazard handling via data forwarding, and a custom Python assembler.",
        image: "/placeholder.svg",
        tags: ["VHDL", "Computer Architecture", "Python", "Assembler"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/stall_3alda2ery",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 12,
        title: "Yapper - X Clone Mobile App",
        description:
          "Built a cross-platform React Native social media app with Expo, featuring real-time WebSocket messaging, push notifications, and AI-powered tweet summarization.",
        image: "/placeholder.svg",
        tags: ["React Native", "WebSockets", "AI", "CI/CD"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/yapper-mobile",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 13,
        title: "Walmart Sales Forecasting",
        description:
          "Developed an end-to-end ML pipeline for sales forecasting with 99.96% accuracy, deployed via FastAPI and Streamlit with MLflow tracking.",
        image: "/placeholder.svg",
        tags: ["Python", "Machine Learning", "FastAPI", "MLflow"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/Walmart-Sales-Forecasting-ML",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 14,
        title: "VLSI Convolution Systolic Accelerator",
        description:
          "High-performance 2D convolution accelerator in Verilog using an 8x8 systolic array and full RTL-to-GDSII flow via OpenLane.",
        image: "/placeholder.svg",
        tags: ["Verilog", "VLSI", "OpenLane", "Hardware"],
        featured: false,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/VLSI-Convolution-Systolic-Accelerator",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
    ],
  },
  experience: {
    heading: "Experience",
    subheading: "My professional journey and the impact I've made",
    educationHeading: "Education",
    timeline: [
      {
        id: 1,
        company: "Orange Digital Center Egypt",
        position: "Agentic AI Trainee",
        period: "Feb 2026 - Apr 2026",
        location: "Cairo, Egypt",
        type: "Training",
        description:
          "Gained hands-on experience building AI agents using LLMs and the LangChain ecosystem.",
        achievements: [
          "Gained hands-on experience building AI agents using LLMs and the LangChain ecosystem, working with memory and context management, knowledge integration, multi-agent collaboration, and API-based automation.",
          "Built and evaluated agent-driven applications and deployed them with a web interface.",
          "Evaluated local versus remote LLMs for application integration, optimizing operational costs by strategically limiting API requests based on business and technical requirements.",
        ],
        technologies: ["LLMs", "LangChain", "AI Agents", "API Automation"],
      },
      {
        id: 2,
        company: "Udacity (Digital Egypt Cubs Initiative - DECI)",
        position: "Session Lead",
        period: "Nov 2025 - Mar 2026",
        location: "Remote",
        type: "Part-time",
        description:
          "Lead weekly sessions for student cohorts, delivering core computer fundamentals.",
        achievements: [
          "Lead weekly sessions for student cohorts, delivering core computer fundamentals in alignment with Udacity's learning standards.",
          "Support learners through guided explanations, practical examples, and structured discussions to ensure high-quality learning outcomes.",
          "Collaborate with Udacity's instructional team to monitor student progress and maintain an engaging remote learning environment.",
        ],
        technologies: ["Computer Fundamentals", "Mentoring", "Remote Teaching"],
      },
      {
        id: 3,
        company: "Enactus Cairo University",
        position: "Resource Management Team Member",
        period: "Dec 2025 - Feb 2026",
        location: "Cairo, Egypt",
        type: "Volunteer",
        description:
          "Contributed as a member of the Resource Management Team, supporting planning and preparation activities.",
        achievements: [
          "Contributed as a member of the Resource Management Team, supporting planning and preparation activities for the annual Enactus cycle.",
          "Participated in the Innovation Campus program, applying structured ideation and validation methodologies across teams.",
          "Engaged in problem validation processes including survey design, market research, and expert consultations.",
        ],
        technologies: ["Resource Management", "Market Research", "Ideation"],
      },
      {
        id: 4,
        company: "i'SUPPLY",
        position: "Software Developer",
        period: "Jul 2025 - Dec 2025",
        location: "Qesm El Maadi, Cairo, Egypt",
        type: "Internship",
        description:
          "Joined after winning first place in a company hackathon; contributing to a Flutter-based POS system alongside backend and QA teams.",
        achievements: [
          "Won 1st place among 30+ teams in internal hackathon",
          "Implemented POS features with clean architecture and offline sync",
          "Collaborated cross-functionally to refine performance and UX",
        ],
        technologies: ["Flutter", "Supabase", "Hive", "Dart"],
      },
      {
        id: 5,
        company: "Digital Egypt Pioneers Initiative (DEPI)",
        position: "Data Science Trainee",
        period: "Jun 2025 - Dec 2025",
        location: "Giza, Egypt",
        type: "Training",
        description:
          "IBM Data Scientist track gaining hands-on exposure to Python, SQL, data analysis, machine learning, and MLOps tools.",
        achievements: [
          "Progressed through Python, visualization, and prompt engineering modules",
          "Applied ML techniques in a capstone project setting",
          "Integrated MLOps tooling for experiment tracking",
        ],
        technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "MLflow"],
      },
      {
        id: 6,
        company: "Banque Misr",
        position: "Android Developer Intern",
        period: "Jul 2025 - Sep 2025",
        location: "New Cairo, Cairo, Egypt",
        type: "Training",
        description:
          "Advanced Android development program focusing on Jetpack, Room Database, and scalable mobile architecture.",
        achievements: [
          "Built sample modules leveraging Jetpack components",
          "Implemented persistence layer with Room and offline strategies",
          "Adopted modern Kotlin patterns for maintainability",
        ],
        technologies: ["Kotlin", "Room", "Jetpack", "Android"],
      },
      {
        id: 7,
        company: "Informatique",
        position: "Mobile Development Intern (Flutter & ML)",
        period: "Jul 2025 - Aug 2025",
        location: "Nasr City, Egypt",
        type: "Internship",
        description:
          "Internship combining Flutter development with applied machine learning for practical solution prototypes.",
        achievements: [
          "Integrated basic ML-driven features into Flutter app flows",
          "Improved solution accuracy through iterative experimentation",
          "Delivered functioning prototypes within short sprint cycles",
        ],
        technologies: ["Flutter", "Dart", "Machine Learning"],
      },
      {
        id: 8,
        company: "IEEE Cairo University SB",
        position: "Flutter Instructor",
        period: "Feb 2025 - May 2025",
        location: "Cairo, Egypt",
        type: "Volunteer",
        description:
          "Led initial phase of Flutter training covering Dart fundamentals, OOP, and introductory widgets for 30+ students.",
        achievements: [
          "Delivered 3 foundational sessions with strong positive feedback",
          "Designed hands-on activities enabling beginner progress",
          "Helped participants establish confidence for continued learning",
        ],
        technologies: ["Flutter", "Dart"],
      },
      {
        id: 9,
        company: "Orange Digital Center Egypt",
        position: "Flutter Developer Trainee",
        period: "Jan 2025 - Mar 2025",
        location: "Cairo, Egypt",
        type: "Training",
        description:
          "Hands-on cross-platform Flutter program covering UI design, state management, and deployment.",
        achievements: [
          "Practiced Bloc and Provider patterns across sample apps",
          "Deployed demonstration builds showcasing learning milestones",
          "Adopted clean architecture principles for scalability",
        ],
        technologies: ["Flutter", "Bloc", "Provider"],
      },
      {
        id: 10,
        company: "Slash Hub",
        position: "Mobile Application Developer",
        period: "Oct 2024 - Dec 2024",
        location: "Cairo, Egypt (Remote)",
        type: "Internship",
        description:
          "Contributed to AI-powered e-commerce chatbot features and performance improvements.",
        achievements: [
          "Improved user interaction metrics by 25%",
          "Reduced load times by 30% via caching strategies",
          "Collaborated in Agile team to ship iterative feature releases",
        ],
        technologies: ["Flutter", "REST APIs", "Dio"],
      },
    ],
    education: [
      {
        institution: "Cairo University - Faculty of Engineering",
        degree: "Bachelor of Computer Engineering",
        period: "2022 - 2027 (Expected)",
        location: "Cairo, Egypt",
        description:
          "Specialized in software engineering, data structures, algorithms, operating systems, and microprocessors.",
        projects: [
          "Operating System Scheduler in C",
          "Search Engine with Spring Boot backend",
          "Microprocessor-controlled robot system (Zengbary App)",
        ],
      },
    ],
    certifications: [
      "Microsoft - Leverage AI tools and resources for your business",
      "Microsoft - Build a mobile-optimized app from Power Apps",
      "Sprints x Banque Misr - Modern Mobile App Development with Kotlin",
      "Microsoft - Implement Mobile App Management",
      "Sprints x Microsoft Summer Camp - Mobile Development",
    ],
  },
  contact: {
    heading: "Let's Work Together",
    subheading:
      "Ready to bring your digital vision to life? Let's discuss your project and create something amazing together.",
    form: {
      name: "Name *",
      email: "Email *",
      subject: "Subject *",
      message: "Message *",
      submit: "Send Message",
      submitting: "Sending...",
      successTitle: "Message sent!",
      successDesc: "Thank you for your message. I'll get back to you soon!",
      errorTitle: "Error",
      errorDesc: "Failed to send message. Please try again.",
    },
    quickChatHeading: "Quick Chat?",
    quickChatDesc:
      "Prefer a quick call? I'm available for a 15-minute consultation.",
    scheduleCall: "Schedule a Call",
    resumeHeading: "Interested in My Work?",
    resumeDesc:
      "Download my resume to learn more about my experience and skills.",
    resumeCta: "Download Resume",
    socialsHeading: "Connect with Me",
  },
  footer: {
    brand: "<Karim Yasser/>",
    tagline:
      "Crafting digital experiences that blend creativity with cutting-edge technology. Let's build something amazing together.",
    navHeading: "Navigation",
    contactHeading: "Get in Touch",
    builtWith: "Built with React, Three.js & TailwindCSS",
    rights: "© {year} Karim Yasser. Made with ❤️ and lots of coffee",
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/KarimmYasser",
      color: "hover:text-gray-600",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/karimmyasserr/",
      color: "hover:text-blue-600",
      icon: "linkedin",
    },
    {
      label: "Twitter",
      href: "https://x.com/KarimYa42741293",
      color: "hover:text-blue-400",
      icon: "x",
    },
    {
      label: "Email",
      href: "mailto:karimmyasserr@gmail.com",
      color: "hover:text-red-500",
      icon: "mail",
    },
  ],
};

export default content;
