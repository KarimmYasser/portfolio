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
      "Ingeniero informático orientado a resultados con experiencia práctica en apps móviles multiplataforma y soluciones web. Dominio de arquitectura limpia y fundamentos de ingeniería de software para ofrecer aplicaciones escalables y centradas en el usuario.",
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
    role: "Desarrollador Flutter e Ingeniero de Software",
    bio1: "Como estudiante de ingeniería informática en la Universidad de El Cairo con experiencia en Flutter y desarrollo web, me centro en crear apps móviles multiplataforma y soluciones backend robustas. Disfruto aplicando arquitectura limpia y fundamentos sólidos para ofrecer productos escalables y centrados en el usuario.",
    bio2: "Además del desarrollo, estoy en aprendizaje continuo de nuevas tecnologías, profundizando en algoritmos y estructuras de datos y explorando cómo aplicarlos a problemas reales.",
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
        name: "Soluciones web",
        description:
          "Backends robustos y aplicaciones web con sistemas basados en SQL",
      },
      {
        icon: "zap",
        name: "Resolución algorítmica",
        description:
          "Soluciones eficientes y optimizadas basadas en fundamentos de EDD y algoritmos",
      },
      {
        icon: "brain",
        name: "Aprendizaje y adaptabilidad",
        description:
          "Aprendo rápido nuevas tecnologías y las aplico a proyectos reales",
      },
    ],
  },
  projects: {
    heading: "Proyectos Destacados",
    subheading: "Un escaparate de mi trabajo y exploraciones creativas",
    moreHeading: "Más Proyectos",
    ctaAllGithub: "Ver todo en GitHub",
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
          : p.description,
    })),
  },
  experience: {
    heading: "Experiencia",
    subheading: "Mi trayectoria profesional y el impacto logrado",
    educationHeading: "Educación",
    timeline: base.experience.timeline.map((t) => ({
      ...t,
      position:
        t.position === "Flutter Developer Intern"
          ? "Prácticas como Desarrollador Flutter"
          : t.position === "Flutter Instructor"
          ? "Instructor de Flutter"
          : t.position === "Mobile App Development Trainee"
          ? "Becario en Desarrollo de Apps Móviles"
          : t.position === "Flutter Developer Intern"
          ? "Prácticas como Desarrollador Flutter"
          : t.position,
      type:
        t.type === "Internship"
          ? "Prácticas"
          : t.type === "Volunteer"
          ? "Voluntariado"
          : t.type === "Training"
          ? "Formación"
          : t.type,
      description:
        t.id === 1
          ? "Trabajo en un sistema POS en Flutter tras lograr el 1.º puesto en el hackathon de la empresa."
          : t.id === 2
          ? "Impartí plan de estudios de Flutter: gestión de estado, APIs y UI/UX avanzada."
          : t.id === 3
          ? "Completé 96 horas de formación en Flutter, enfocada en desarrollo multiplataforma y arquitectura limpia."
          : t.id === 4
          ? "Contribuí a un chatbot e‑commerce con IA usando Flutter y APIs REST."
          : t.description,
      achievements:
        t.id === 1
          ? [
              "Gané el 1.º lugar entre 30+ equipos en el hackathon",
              "Contribuí a la arquitectura y funcionalidades del POS",
              "Colaboré con backend y QA",
            ]
          : t.id === 2
          ? [
              "Formé a 30+ estudiantes con 90% de feedback positivo",
              "85% construyó apps reales al finalizar",
              "Materiales interactivos que aumentaron la participación un 40%",
            ]
          : t.id === 3
          ? [
              "Dominé gestión de estado avanzada con Bloc y Provider",
              "Apliqué arquitectura limpia para mantenibilidad",
              "Construí múltiples apps y demos de entrenamiento",
            ]
          : t.id === 4
          ? [
              "Mejoré la interacción del usuario en un 25%",
              "Reduje tiempos de carga un 30% con caché",
              "Entregué funcionalidades en equipo ágil",
            ]
          : t.achievements,
    })),
    education: base.experience.education.map((e) => ({
      ...e,
      institution: "Universidad de El Cairo - Facultad de Ingeniería",
      degree: "Grado en Ingeniería Informática",
      period: e.period,
      location: "El Cairo, Egipto",
      description:
        "Especialización en ingeniería de software, estructuras de datos, algoritmos, sistemas operativos y microprocesadores.",
      projects: [
        "Planificador de sistema operativo en C",
        "Motor de búsqueda con backend Spring Boot",
        "Sistema de robot controlado por microprocesador (Zengbary App)",
      ],
    })),
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
