import base, { type Content } from "./en";

const es: Content = {
  ...base,
  nav: {
    items: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre mí", href: "#about" },
      { label: "Habilidades", href: "#skills" },
      { label: "Proyectos", href: "#projects" },
      { label: "Experiencia", href: "#experience" },
      { label: "Contacto", href: "#contact" },
    ],
  },
  hero: {
    greeting: "Hola, soy",
    name: base.hero.name,
    title: "Desarrollador de Software e Ingeniero Informático",
    description:
      "Ingeniero informático junior que crea soluciones móviles y basadas en datos centradas en el usuario. Aprendo mediante proyectos prácticos, mejoro software fiable que resuelve problemas reales y sigo ampliando mis habilidades más allá del aula.",
    favoriteCarLabel: "ese es mi coche favorito",
    favoriteCarName: "Ferrari 458 Italia",
    ctas: {
      seeProjects: "Ver Proyectos",
      getInTouch: "Contactar",
      openInTerminal: "Abrir en la Terminal",
    },
  },
  about: {
    heading: "Sobre mí",
    subheading:
      "Un ingeniero informático apasionado por crear aplicaciones escalables e impactantes",
    avatarInitials: "KY",
    name: base.about.name,
    role: "Desarrollador de Software e Ingeniero Informático",
    bio1: "Ingeniero informático con más de 2 años de experiencia en el desarrollo de aplicaciones móviles y web utilizando Flutter, Android y frameworks de desarrollo modernos. Historial probado en desarrollo full-stack, integración de machine learning y metodologías de desarrollo ágiles. Fuertes habilidades de resolución de problemas con experiencia en estructuras de datos, algoritmos y arquitectura de software. Experiencia liderando equipos técnicos y entregando soluciones escalables para desafíos empresariales del mundo real.",
    bio2: "Me enfoco en Flutter, Kotlin, estructuras de datos, algoritmos, arquitectura limpia y paradigmas multiplataforma emergentes como Kotlin Multiplatform mientras me formo activamente en Ciencia de Datos (Python, SQL, MLflow, fundamentos de ML) y exploro aplicaciones prácticas de machine learning.",
    values: [
      {
        icon: "code",
        title: "Código limpio",
        description:
          "Crear código elegante, eficiente y robusto en C++, Dart, Python y Kotlin que perdura en el tiempo.",
      },
      {
        icon: "heart",
        title: "Centrado en el usuario",
        description:
          "Diseñar apps con un profundo entendimiento del usuario, convirtiendo flujos complejos en experiencias fluidas.",
      },
      {
        icon: "zap",
        title: "Innovación",
        description:
          "Superar límites con frameworks modernos, Kotlin Multiplatform y soluciones basadas en datos que generan impacto.",
      },
      {
        icon: "target",
        title: "Resolución de problemas",
        description:
          "Descomponer problemas difíciles en soluciones accionables, combinando precisión algorítmica con ingeniería práctica.",
      },
    ],
    technologies: base.about.technologies,
  },
  skills: {
    heading: "Habilidades y Experiencia",
    subheading:
      "Un conjunto de herramientas formado por fundamentos de ingeniería y proyectos reales",
    categories: [
      {
        icon: "smartphone",
        title: "Desarrollo móvil",
        color: "cyber-blue",
        skills: base.skills.categories[0].skills,
      },
      {
        icon: "database",
        title: "Backend y Bases de Datos",
        color: "cyber-purple",
        skills: base.skills.categories[1].skills,
      },
      {
        icon: "code2",
        title: "Ingeniería de Software",
        color: "cyber-green",
        skills: base.skills.categories[2].skills,
      },
      {
        icon: "cpu",
        title: "Sistemas y Herramientas",
        color: "cyber-pink",
        skills: base.skills.categories[3].skills,
      },
    ],
    toolsHeading: "Qué puedo hacer por ti",
    tools: [
      {
        icon: "smartphone",
        name: "Desarrollo móvil",
        description: "Apps multiplataforma con Flutter y arquitectura limpia",
      },
      {
        icon: "globe",
        name: "Datos y Persistencia",
        description:
          "Diseño de capas de datos fiables: modelado SQL/NoSQL, sincronización offline y consultas eficientes",
      },
      {
        icon: "zap",
        name: "Resolución algorítmica",
        description:
          "Soluciones eficientes y optimizadas basadas en fundamentos de EDD y algoritmos",
      },
      {
        icon: "brain",
        name: "Ciencia de Datos y ML",
        description:
          "Aplicación de Python, SQL, MLflow y técnicas de ML (clasificación, recomendaciones) con mentalidad experimental",
      },
    ],
  },
  projects: {
    heading: "Proyectos Destacados",
    subheading: "Un escaparate de mi trabajo y exploraciones creativas",
    moreHeading: "Más Proyectos",
    ctaAllGithub: "Ver todo en GitHub",
    ctaAllGithubLink: base.projects.ctaAllGithubLink,
    items: base.projects.items.map((p) => ({
      ...p,
      // Translate descriptions; keep titles/tags as-is for clarity
      description:
        p.id === 1
          ? "Robot autónomo de seguimiento de paredes que conecta la simulación de gemelo digital Webots con el hardware. Desarrolló firmware C en bare-metal para ATmega328P."
          : p.id === 2
          ? "Motor 3D de alto rendimiento desarrollado en C++17 y OpenGL 3.3 con un sistema de entidades y componentes (ECS) basado en datos."
          : p.id === 3
          ? "Arquitectura de pipeline de IA de doble vía para el mantenimiento predictivo de bombas, ventiladores y motores. Alcanzó un 95.61% de precisión."
          : p.id === 4
          ? "Ganador del 1.er lugar en el Hackathon de IA de ODC x INSTANT mediante el desarrollo de un pipeline de segmentación de tumores cerebrales en 3D usando MedNeXt."
          : p.id === 5
          ? "Sistema POS multiplataforma construido con Flutter y Supabase. Incluye búsqueda de inventario, gestión de carrito y sincronización offline-first con Hive."
          : p.id === 6
          ? "App Flutter que controla en tiempo real un robot basado en microprocesador a través de HTTP."
          : p.id === 7
          ? "Chatbot y recomendación e‑commerce con IA en Flutter usando Gemini API, gestión de estado con Bloc y animaciones personalizadas."
          : p.id === 8
          ? "App de recetas con filtros, persistencia offline con Hive y temporizadores de cocina interactivos para una experiencia fluida."
          : p.id === 9
          ? "Juego multijugador de romper ladrillos en Assembly con red en tiempo real por Wi‑Fi y renderizado eficiente."
          : p.id === 10
          ? "Portafolio interactivo construido con React, TypeScript, Three.js y TailwindCSS con soporte multilingüe, fondo 3D de planetas tipo Saturno y una interfaz estilo terminal."
          : p.id === 11
          ? "Diseñó un procesador segmentado de 5 etapas y 32 bits en VHDL con arquitectura Von Neumann, manejo de riesgos mediante reenvío de datos y un ensamblador personalizado en Python."
          : p.id === 12
          ? "App de redes sociales multiplataforma en React Native con Expo, mensajería en tiempo real por WebSockets, notificaciones push y resumen de tweets con IA."
          : p.id === 13
          ? "Pipeline de ML de extremo a extremo para el pronóstico de ventas con 99.96% de precisión, desplegado mediante FastAPI y Streamlit con seguimiento de MLflow."
          : p.id === 14
          ? "Acelerador de convolución 2D de alto rendimiento en Verilog utilizando una matriz sistólica de 8x8 y flujo completo RTL-a-GDSII a través de OpenLane."
          : p.description,
    })),
  },
  experience: {
    heading: "Experiencia",
    subheading: "Mi trayectoria profesional y el impacto logrado",
    educationHeading: "Educación",
    timeline: [
      {
        id: 1,
        company: "Orange Digital Center Egypt",
        position: "Trainee de IA Agéntica",
        period: "Feb 2026 - Abr 2026",
        location: "Egipto",
        type: "Formación",
        description:
          "Experiencia práctica en la creación de agentes de IA utilizando LLMs y el ecosistema LangChain.",
        achievements: [
          "Adquirió experiencia práctica en la creación de agentes de IA utilizando LLMs y el ecosistema LangChain.",
          "Construyó y evaluó aplicaciones basadas en agentes y las desplegó con una interfaz web.",
          "Evaluó LLMs locales versus remotos para la integración de aplicaciones.",
        ],
        technologies: ["LLMs", "LangChain", "AI Agents", "API Automation"],
      },
      {
        id: 2,
        company: "Udacity (Digital Egypt Cubs Initiative - DECI)",
        position: "Líder de Sesión",
        period: "Nov 2025 - Mar 2026",
        location: "Remoto",
        type: "Tiempo parcial",
        description:
          "Liderar sesiones semanales para cohortes de estudiantes, impartiendo fundamentos básicos de informática.",
        achievements: [
          "Lideró sesiones semanales para cohortes de estudiantes, impartiendo fundamentos de informática.",
          "Apoyó a los estudiantes mediante explicaciones guiadas y ejemplos prácticos.",
          "Colaboró con el equipo instructivo de Udacity.",
        ],
        technologies: ["Computer Fundamentals", "Mentoring", "Remote Teaching"],
      },
      {
        id: 3,
        company: "Enactus Cairo University",
        position: "Miembro del Equipo de Gestión de Recursos",
        period: "Dic 2025 - Feb 2026",
        location: "El Cairo, Egipto",
        type: "Voluntariado",
        description:
          "Contribuyó como miembro del Equipo de Gestión de Recursos, apoyando las actividades de planificación y preparación.",
        achievements: [
          "Contribuyó como miembro del Equipo de Gestión de Recursos.",
          "Participó en el programa Innovation Campus.",
          "Participó en procesos de validación de problemas.",
        ],
        technologies: ["Resource Management", "Market Research", "Ideation"],
      },
      {
        id: 4,
        company: "i'SUPPLY",
        position: "Desarrollador Flutter",
        period: "Jul 2025 - Dic 2025",
        location: "Maadi, El Cairo, Egipto",
        type: "Prácticas",
        description:
          "Incorporado tras ganar el primer lugar en un hackathon interno; contribuyendo a un sistema POS en Flutter junto a backend y QA.",
        achievements: [
          "1.º lugar entre 30+ equipos en hackathon interno",
          "Implementación de funcionalidades POS con arquitectura limpia y sincronización offline",
          "Colaboración multidisciplinaria para rendimiento y UX",
        ],
        technologies: ["Flutter", "Supabase", "Hive", "Dart"],
      },
      {
        id: 5,
        company: "Iniciativa Pioneros Digital Egypt (DEPI)",
        position: "Trainee de Ciencia de Datos",
        period: "Jun 2025 - Dic 2025",
        location: "Giza, Egipto",
        type: "Formación",
        description:
          "Ruta IBM Data Scientist con experiencia práctica en Python, SQL, análisis de datos, machine learning y herramientas MLOps (MLflow, Hugging Face).",
        achievements: [
          "Avance en módulos de Python, visualización e ingeniería de prompts",
          "Aplicación de técnicas de ML en proyecto capstone",
          "Integración de herramientas MLOps para seguimiento de experimentos",
        ],
        technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "MLflow"],
      },
      {
        id: 6,
        company: "Banque Misr",
        position: "Desarrollador Android (Kotlin)",
        period: "Jul 2025 - Sep 2025",
        location: "Nuevo Cairo, Egipto",
        type: "Formación",
        description:
          "Programa avanzado de desarrollo Android centrado en Jetpack, Room Database y arquitectura escalable.",
        achievements: [
          "Módulos creados usando componentes Jetpack",
          "Capa de persistencia con Room y estrategias offline",
          "Patrones modernos de Kotlin para mantenibilidad",
        ],
        technologies: ["Kotlin", "Room", "Jetpack", "Android"],
      },
      {
        id: 7,
        company: "Informatique",
        position: "Desarrollador Flutter (ML)",
        period: "Jul 2025 - Ago 2025",
        location: "Nasr City, Egipto",
        type: "Prácticas",
        description:
          "Prácticas combinando Flutter con machine learning para prototipos funcionales.",
        achievements: [
          "Integración de funciones impulsadas por ML en flujos Flutter",
          "Mejora de precisión mediante iteraciones",
          "Prototipos entregados en sprints cortos",
        ],
        technologies: ["Flutter", "Dart", "Machine Learning"],
      },
      {
        id: 8,
        company: "IEEE Cairo University SB",
        position: "Instructor de Flutter",
        period: "Feb 2025 - May 2025",
        location: "El Cairo, Egipto",
        type: "Voluntariado",
        description:
          "Primera fase de formación Flutter cubriendo fundamentos de Dart, POO y widgets introductorios para 30+ estudiantes.",
        achievements: [
          "3 sesiones base con feedback muy positivo",
          "Actividades prácticas que facilitaron el avance de principiantes",
          "Ayudó a establecer confianza para continuar el aprendizaje",
        ],
        technologies: ["Flutter", "Dart"],
      },
      {
        id: 9,
        company: "Orange Digital Center Egypt",
        position: "Trainee Desarrollador Flutter",
        period: "Jan 2025 - Mar 2025",
        location: "El Cairo, Egipto",
        type: "Formación",
        description:
          "Programa práctico de Flutter cubriendo diseño UI, gestión de estado y despliegue.",
        achievements: [
          "Patrones Bloc y Provider aplicados en apps de ejemplo",
          "Despliegue de builds demostrativas mostrando hitos",
          "Principios de arquitectura limpia para escalabilidad",
        ],
        technologies: ["Flutter", "Bloc", "Provider"],
      },
      {
        id: 10,
        company: "Slash Hub",
        position: "Desarrollador de Aplicaciones Móviles",
        period: "Oct 2024 - Dec 2024",
        location: "El Cairo, Egipto (Remoto)",
        type: "Prácticas",
        description:
          "Contribución a funcionalidades de chatbot e‑commerce con IA y mejoras de rendimiento.",
        achievements: [
          "Mejora de interacción de usuarios en 25%",
          "Reducción de tiempos de carga un 30% mediante caché",
          "Entrega iterativa de funcionalidades en equipo ágil",
        ],
        technologies: ["Flutter", "REST APIs", "Dio"],
      },
    ],
    education: [
      {
        institution: "Universidad de El Cairo - Facultad de Ingeniería",
        degree: "Grado en Ingeniería Informática",
        period: "2022 - 2027 (Previsto)",
        location: "El Cairo, Egipto",
        description:
          "Especialización en ingeniería de software, estructuras de datos, algoritmos, sistemas operativos y microprocesadores.",
        projects: [
          "Planificador de sistema operativo en C",
          "Motor de búsqueda con backend Spring Boot",
          "Sistema de robot controlado por microprocesador (Zengbary App)",
        ],
      },
    ],
    certifications: [
      "Microsoft - Aprovechar herramientas y recursos de IA para tu negocio",
      "Microsoft - Crear una app optimizada para móvil con Power Apps",
      "Sprints x Banque Misr - Desarrollo moderno de apps móviles con Kotlin",
      "Microsoft - Implementar gestión de apps móviles",
      "Sprints x Microsoft Summer Camp - Desarrollo móvil",
    ],
  },
  contact: {
    heading: "Trabajemos juntos",
    subheading:
      "¿Listo para dar vida a tu visión digital? Hablemos y creemos algo increíble juntos.",
    form: {
      name: "Nombre *",
      email: "Correo *",
      subject: "Asunto *",
      message: "Mensaje *",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
      successTitle: "¡Mensaje enviado!",
      successDesc:
        "Gracias por tu mensaje. ¡Me pondré en contacto contigo pronto!",
      errorTitle: "Error",
      errorDesc: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
    },
    quickChatHeading: "¿Charla rápida?",
    quickChatDesc:
      "¿Prefieres una llamada rápida? Estoy disponible para una consulta de 15 minutos.",
    scheduleCall: "Agendar una llamada",
    resumeHeading: "¿Interesado en mi trabajo?",
    resumeDesc:
      "Descarga mi currículum para conocer más sobre mi experiencia y habilidades.",
    resumeCta: "Descargar currículum",
    socialsHeading: "Conecta conmigo",
  },
  footer: {
    brand: "<Karim Yasser/>",
    tagline:
      "Creando experiencias digitales que combinan creatividad con tecnología de vanguardia.",
    navHeading: "Navegación",
    contactHeading: "Contacto",
    builtWith: "Construido con React, Three.js y TailwindCSS",
    rights: "© {year} Karim Yasser. Hecho con ❤️ y mucho café",
  },
  socials: base.socials,
};

export default es;
