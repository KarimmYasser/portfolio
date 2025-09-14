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
    siteName: "DevPortfolio",
    author: "Alex Chen",
    location: "San Francisco, CA",
    email: "alex.chen@example.com",
    phone: "+1 (555) 123-4567",
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
    name: "Alex Chen",
    title: "Creative Developer & Digital Architect",
    description:
      "I craft immersive digital experiences that blend cutting-edge technology with intuitive design. Specializing in React, Three.js, and modern web technologies to bring ideas to life.",
    ctas: { seeProjects: "See Projects", getInTouch: "Get in Touch" },
  },
  about: {
    heading: "About Me",
    subheading:
      "A passionate developer who loves creating digital experiences that matter",
    avatarInitials: "AC",
    name: "Alex Chen",
    role: "Full Stack Developer & Creative Technologist",
    bio1: "With over 5 years of experience in web development, I specialize in creating immersive digital experiences that push the boundaries of what's possible on the web. I'm passionate about clean code, innovative design, and technologies that make a real impact.",
    bio2: "When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or experimenting with creative coding projects that blend art and technology.",
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
    subheading: "A comprehensive toolkit for bringing digital visions to life",
    categories: [
      {
        icon: "code2",
        title: "Frontend Development",
        color: "cyber-blue",
        skills: [
          { name: "React/Next.js", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Three.js/WebGL", level: 85 },
          { name: "TailwindCSS", level: 92 },
        ],
      },
      {
        icon: "database",
        title: "Backend Development",
        color: "cyber-purple",
        skills: [
          { name: "Node.js", level: 88 },
          { name: "Python", level: 82 },
          { name: "GraphQL", level: 85 },
          { name: "PostgreSQL", level: 80 },
        ],
      },
      {
        icon: "cloud",
        title: "DevOps & Cloud",
        color: "cyber-green",
        skills: [
          { name: "AWS/Vercel", level: 78 },
          { name: "Docker", level: 75 },
          { name: "CI/CD", level: 80 },
          { name: "Monitoring", level: 72 },
        ],
      },
      {
        icon: "palette",
        title: "Design & UX",
        color: "cyber-pink",
        skills: [
          { name: "UI/UX Design", level: 85 },
          { name: "Figma", level: 88 },
          { name: "Prototyping", level: 82 },
          { name: "Animation", level: 90 },
        ],
      },
    ],
    toolsHeading: "What I Can Do For You",
    tools: [
      {
        icon: "globe",
        name: "Web Development",
        description:
          "Modern web apps with React, Next.js, and cutting-edge technologies",
      },
      {
        icon: "smartphone",
        name: "Mobile Development",
        description:
          "Cross-platform mobile apps with React Native and Progressive Web Apps",
      },
      {
        icon: "zap",
        name: "Performance Optimization",
        description:
          "Lightning-fast applications with optimized code and best practices",
      },
      {
        icon: "brain",
        name: "AI Integration",
        description: "Intelligent features using machine learning and AI APIs",
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
        title: "Immersive 3D Portfolio",
        description:
          "A stunning portfolio website built with React Three Fiber featuring interactive 3D elements, particle systems, and smooth animations.",
        image: "/api/placeholder/600/400",
        tags: ["React", "Three.js", "TypeScript", "Framer Motion"],
        featured: true,
        links: { demo: "#", github: "#" },
      },
      {
        id: 2,
        title: "AI-Powered Task Manager",
        description:
          "Smart task management application with AI-driven priority suggestions, natural language processing, and intelligent scheduling.",
        image: "/api/placeholder/600/400",
        tags: ["Next.js", "OpenAI", "Prisma", "TailwindCSS"],
        featured: true,
        links: { demo: "#", github: "#" },
      },
      {
        id: 3,
        title: "Real-time Collaboration Tool",
        description:
          "Collaborative workspace with live editing, video calls, screen sharing, and project management features.",
        image: "/api/placeholder/600/400",
        tags: ["React", "Socket.io", "WebRTC", "Node.js"],
        featured: false,
        links: { demo: "#", github: "#" },
      },
      {
        id: 4,
        title: "E-commerce Platform",
        description:
          "Modern e-commerce solution with advanced filtering, payment integration, inventory management, and analytics dashboard.",
        image: "/api/placeholder/600/400",
        tags: ["Next.js", "Stripe", "MongoDB", "Redux"],
        featured: false,
        links: { demo: "#", github: "#" },
      },
      {
        id: 5,
        title: "Data Visualization Dashboard",
        description:
          "Interactive dashboard for complex data analysis with real-time charts, filtering, and export capabilities.",
        image: "/api/placeholder/600/400",
        tags: ["React", "D3.js", "Python", "FastAPI"],
        featured: false,
        links: { demo: "#", github: "#" },
      },
      {
        id: 6,
        title: "Mobile Fitness App",
        description:
          "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
        image: "/api/placeholder/600/400",
        tags: ["React Native", "Firebase", "TypeScript", "Expo"],
        featured: false,
        links: { demo: "#", github: "#" },
      },
    ],
  },
  experience: {
    heading: "Experience",
    subheading:
      "My professional journey and the impact I've made along the way",
    educationHeading: "Education",
    timeline: [
      {
        id: 1,
        company: "TechCorp Innovation",
        position: "Senior Frontend Developer",
        period: "2022 - Present",
        location: "San Francisco, CA",
        type: "Full-time",
        description:
          "Lead frontend development for enterprise applications serving 100k+ users. Architected and implemented micro-frontend solutions, reducing page load times by 60%. Mentored junior developers and established best practices for React development.",
        achievements: [
          "Improved application performance by 60%",
          "Led team of 5 developers",
          "Implemented micro-frontend architecture",
          "Reduced technical debt by 40%",
        ],
        technologies: [
          "React",
          "TypeScript",
          "GraphQL",
          "AWS",
          "Micro-frontends",
        ],
      },
      {
        id: 2,
        company: "StartupXYZ",
        position: "Full Stack Developer",
        period: "2020 - 2022",
        location: "New York, NY",
        type: "Full-time",
        description:
          "Built and scaled web applications from MVP to serving thousands of users. Developed real-time features using WebSockets, implemented CI/CD pipelines, and collaborated closely with design and product teams.",
        achievements: [
          "Built MVP that acquired 10k users in 6 months",
          "Implemented real-time collaboration features",
          "Set up automated testing and deployment",
          "Reduced infrastructure costs by 30%",
        ],
        technologies: [
          "React",
          "Node.js",
          "PostgreSQL",
          "Docker",
          "WebSockets",
        ],
      },
      {
        id: 3,
        company: "Digital Agency Pro",
        position: "Frontend Developer",
        period: "2019 - 2020",
        location: "Los Angeles, CA",
        type: "Contract",
        description:
          "Developed custom websites and web applications for various clients. Specialized in creating interactive experiences using modern JavaScript frameworks and creative coding techniques.",
        achievements: [
          "Delivered 15+ client projects on time",
          "Increased client website conversions by 45%",
          "Developed award-winning interactive website",
          "Established client design system",
        ],
        technologies: ["React", "Vue.js", "Three.js", "GSAP", "Contentful"],
      },
      {
        id: 4,
        company: "CodeBootcamp",
        position: "Junior Developer",
        period: "2018 - 2019",
        location: "Remote",
        type: "Full-time",
        description:
          "Started my professional journey working on various web development projects. Gained experience in full-stack development, database design, and agile methodologies.",
        achievements: [
          "Completed intensive 6-month training program",
          "Contributed to 10+ open source projects",
          "Built first commercial web application",
          "Achieved 95% code review approval rate",
        ],
        technologies: ["JavaScript", "React", "Python", "Django", "MySQL"],
      },
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "Bachelor of Science in Computer Science",
        period: "2014 - 2018",
        location: "Stanford, CA",
        description:
          "Focused on software engineering, algorithms, and human-computer interaction. Graduated Magna Cum Laude.",
        projects: [
          "AI Chatbot for Student Services",
          "Mobile App for Campus Navigation",
          "Machine Learning Research Project",
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
    brand: "<DevPortfolio />",
    tagline:
      "Crafting digital experiences that blend creativity with cutting-edge technology. Let's build something amazing together.",
    navHeading: "Navigation",
    contactHeading: "Get in Touch",
    builtWith: "Built with React, Three.js & TailwindCSS",
    rights: "© {year} Alex Chen. Made with ♥ and lots of coffee",
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-600",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
      icon: "linkedin",
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400",
      icon: "x",
    },
    {
      label: "Email",
      href: "mailto:alex.chen@example.com",
      color: "hover:text-red-500",
      icon: "mail",
    },
  ],
};

export default content;
