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
    bio1: "Junior computer engineer at Cairo University creating user‑focused mobile and data‑driven solutions. I learn through hands‑on projects, refine reliable software that solves real problems, and keep expanding my skills beyond the classroom.",
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
          { name: "Kotlin", level: 68 },
          { name: "KMP (Kotlin Multiplatform)", level: 72 },
          { name: "React Native", level: 50 },
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
          { name: "Python", level: 77 },
          { name: "Clean Architecture", level: 88 },
          { name: "Problem Solving", level: 85 },
        ],
      },
      {
        icon: "cpu",
        title: "Systems & Tools",
        color: "cyber-pink",
        skills: [
          { name: "Assembly", level: 70 },
          { name: "Operating System Algorithms", level: 75 },
          { name: "Git/GitHub", level: 85 },
          { name: "VS Code / Android Studio", level: 90 },
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
        title: "i'Supply POS App",
        description:
          "Cross-platform POS system built with Flutter and Supabase. Features inventory search, cart management, and offline-first synchronization with Hive.",
        image: "/pos.png",
        tags: ["Flutter", "Supabase", "Hive", "Clean Architecture"],
        featured: true,
        links: {
          demo: "#",
          github: "https://github.com/KarimmYasser/isupply_app",
        },
        hasDemo: false,
        hasGithubRepo: true,
      },
      {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
        title: "3D Portfolio Website",
        description:
          "Interactive developer portfolio built with React, TypeScript, Three.js (react-three-fiber) and TailwindCSS featuring multilingual support, dynamic stars and planet background, and a terminal-style interface.",
        image: "/home.png",
        tags: ["React", "TypeScript", "Three.js", "TailwindCSS", "i18n"],
        featured: true,
        links: {
          demo: "https://karim-yasser.vercel.app/", // TODO: replace with actual deployed URL
          github: "#",
        },
        hasDemo: true,
        hasGithubRepo: false,
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
        company: "i'SUPPLY",
        position: "Flutter Developer",
        period: "Jul 2025 - Present",
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
        id: 2,
        company: "Digital Egypt Pioneers Initiative (DEPI)",
        position: "Data Science Trainee",
        period: "Jun 2025 - Present",
        location: "Giza, Egypt",
        type: "Training",
        description:
          "IBM Data Scientist track gaining hands-on exposure to Python, SQL, data analysis, machine learning, and MLOps tools (MLflow, Hugging Face).",
        achievements: [
          "Progressed through Python, visualization, and prompt engineering modules",
          "Applied ML techniques in a capstone project setting",
          "Integrated MLOps tooling for experiment tracking",
        ],
        technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "MLflow"],
      },
      {
        id: 3,
        company: "Banque Misr",
        position: "Android Developer (Kotlin)",
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
        id: 4,
        company: "Informatique",
        position: "Flutter Developer (ML)",
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
