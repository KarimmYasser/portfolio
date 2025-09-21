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
    bio1: "Ingeniero informático junior en la Universidad de El Cairo que crea soluciones móviles y basadas en datos centradas en el usuario. Aprendo mediante proyectos prácticos y perfecciono software fiable que aporta valor tangible.",
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
          ? "Sistema POS multiplataforma construido con Flutter y Supabase. Incluye búsqueda de inventario, gestión de carrito y sincronización offline-first con Hive."
          : p.id === 2
          ? "App Flutter que controla en tiempo real un robot basado en microprocesador a través de HTTP."
          : p.id === 3
          ? "Chatbot y recomendación e‑commerce con IA en Flutter usando Gemini API, gestión de estado con Bloc y animaciones personalizadas."
          : p.id === 4
          ? "App de recetas con filtros, persistencia offline con Hive y temporizadores de cocina interactivos para una experiencia fluida."
          : p.id === 5
          ? "Juego multijugador de romper ladrillos en Assembly con red en tiempo real por Wi‑Fi y renderizado eficiente."
          : p.id === 6
          ? "Portafolio interactivo construido con React, TypeScript, Three.js y TailwindCSS con soporte multilingüe, fondo 3D de planetas tipo Saturno y una interfaz estilo terminal."
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
        company: "i'SUPPLY",
        position: "Desarrollador Flutter",
        period: "Jul 2025 - Presente",
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
        id: 2,
        company: "Iniciativa Pioneros Digital Egypt (DEPI)",
        position: "Trainee de Ciencia de Datos",
        period: "Jun 2025 - Presente",
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
