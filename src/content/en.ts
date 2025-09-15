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
    ctas: {
      seeProjects: string;
      getInTouch: string;
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
      links: { demo: string; github: string };
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
    phone: "+20 114 443 2284",
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
      "Results-oriented Computer Engineer with hands-on experience in cross-platform mobile apps and web solutions. Skilled in clean architecture, software engineering fundamentals, and modern frameworks to deliver scalable, user-focused applications.",
    ctas: { seeProjects: "See Projects", getInTouch: "Get in Touch" },
  },
  about: {
    heading: "About Me",
    subheading:
      "A computer engineer passionate about building impactful, scalable applications",
    avatarInitials: "KY",
    name: "Karim Yasser",
    role: "Flutter Developer & Software Engineer",
    bio1: "As a computer engineering student at Cairo University with hands-on experience in Flutter and web development, I focus on creating cross-platform mobile apps and robust backend solutions. I enjoy applying clean architecture and strong software engineering fundamentals to deliver user-focused, scalable products.",
    bio2: "Beyond development, I'm constantly learning new technologies, diving into algorithms and data structures, and exploring how modern frameworks can be applied to solve real-world problems.",
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
          { name: "Room", level: 90 },
          { name: "Supabase", level: 70 },
          { name: "MySQL/PostgreSQL", level: 80 },
          { name: "MongoDB", level: 75 },
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
          { name: "8086 Assembly", level: 70 },
          { name: "Operating System Simulations", level: 75 },
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
        name: "Web Solutions",
        description:
          "Robust backends and web applications with SQL-based systems",
      },
      {
        icon: "zap",
        name: "Algorithmic Problem Solving",
        description:
          "Efficient, optimized solutions built on strong DS & Algo foundations",
      },
      {
        icon: "brain",
        name: "Learning & Adaptability",
        description:
          "Quickly picking up new technologies and applying them to real projects",
      },
    ],
  },
  projects: {
    heading: "Featured Projects",
    subheading: "A showcase of my latest work and creative explorations",
    moreHeading: "More Projects",
    ctaAllGithub: "View All on GitHub",
    items: [
      {
        id: 1,
        title: "i'Supply POS App",
        description:
          "Cross-platform POS system built with Flutter and Supabase. Features inventory search, cart management, and offline-first synchronization with Hive.",
        image: "/api/placeholder/600/400",
        tags: ["Flutter", "Supabase", "Hive", "Clean Architecture"],
        featured: true,
        links: { demo: "#", github: "#" },
      },
      {
        id: 2,
        title: "Zengbary App",
        description:
          "Flutter app controlling a microprocessor-based robot in real-time over HTTP.",
        image: "/api/placeholder/600/400",
        tags: ["Flutter", "Dio", "Microprocessor", "HTTP"],
        featured: true,
        links: { demo: "#", github: "#" },
      },
      {
        id: 3,
        title: "Fashion Assistant",
        description:
          "AI-powered Flutter e-commerce chatbot and recommendation system using Gemini API, Bloc state management, and custom animations.",
        image: "/api/placeholder/600/400",
        tags: ["Flutter", "Gemini API", "Bloc", "AI Integration"],
        featured: false,
        links: { demo: "#", github: "#" },
      },
      {
        id: 4,
        title: "Cooking Up App",
        description:
          "Recipe app with filtering, offline persistence using Hive, and interactive cooking timers for a smooth UX.",
        image: "/api/placeholder/600/400",
        tags: ["Flutter", "Hive", "Clean Architecture"],
        featured: false,
        links: { demo: "#", github: "#" },
      },
      {
        id: 5,
        title: "Bricks Breaker - Assembly Game",
        description:
          "Multiplayer brick breaker game in Assembly with real-time networking over Wi-Fi and efficient graphics rendering.",
        image: "/api/placeholder/600/400",
        tags: ["Assembly", "Networking", "Game Dev"],
        featured: false,
        links: { demo: "#", github: "#" },
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
        company: "i'Supply",
        position: "Flutter Developer Intern",
        period: "Jul 2025 - Present",
        location: "Cairo, Egypt",
        type: "Internship",
        description:
          "Working on a Flutter-based POS system after securing 1st place in the company hackathon.",
        achievements: [
          "Won 1st place out of 30+ teams in hackathon",
          "Contributed to POS app architecture and features",
          "Collaborated with backend engineers and QA testers",
        ],
        technologies: ["Flutter", "Supabase", "Hive", "Dart"],
      },
      {
        id: 2,
        company: "IEEE Cairo University SB",
        position: "Flutter Instructor",
        period: "Feb 2025 - Present",
        location: "Cairo, Egypt",
        type: "Volunteer",
        description:
          "Delivered Flutter curriculum to students, covering state management, APIs, and advanced UI/UX.",
        achievements: [
          "Trained 30+ students with 90% positive feedback",
          "85% built real-world apps by course end",
          "Created interactive materials boosting engagement by 40%",
        ],
        technologies: ["Flutter", "Bloc", "Dio"],
      },
      {
        id: 3,
        company: "Orange Digital Center",
        position: "Mobile App Development Trainee",
        period: "Jan 2025 - Mar 2025",
        location: "Cairo, Egypt",
        type: "Training",
        description:
          "Completed 96-hour Flutter training program focusing on cross-platform development and clean architecture.",
        achievements: [
          "Mastered advanced state management with Bloc and Provider",
          "Applied clean architecture for maintainability",
          "Built multiple training apps and demos",
        ],
        technologies: ["Flutter", "Bloc", "Provider"],
      },
      {
        id: 4,
        company: "SlashHub",
        position: "Flutter Developer Intern",
        period: "Oct 2024 - Jan 2025",
        location: "Remote",
        type: "Internship",
        description:
          "Contributed to AI-powered e-commerce chatbot using Flutter and REST APIs.",
        achievements: [
          "Improved user interaction metrics by 25%",
          "Reduced load times by 30% with caching",
          "Collaborated in Agile team to ship features",
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
          "Operating System Scheduler Simulation",
          "Search Engine with Spring Boot backend",
          "Microprocessor-controlled robot system (Zengbary App)",
        ],
      },
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
    rights: "© {year} Karim Yasser. Made with ♥ and lots of coffee",
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
