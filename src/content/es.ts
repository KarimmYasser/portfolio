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
        icon: "brain",
        title: "Ciencia de Datos e IA",
        color: "cyber-pink",
        skills: base.skills.categories[3].skills,
      },
      {
        icon: "cpu",
        title: "Sistemas y Especialidades",
        color: "cyber-purple",
        skills: base.skills.categories[4].skills,
      },
      {
        icon: "terminal",
        title: "Herramientas",
        color: "cyber-blue",
        skills: base.skills.categories[5].skills,
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
          : p.id === 15
          ? "Evaluó 10 arquitecturas distintas de hash criptográfico (BLAKE, Keccak, Skein, etc.). Desarrolló un conjunto de pruebas personalizado para simular criptoanálisis avanzado y diseñó una implementación de BLAKE-256 de alto rendimiento desde cero."
          : p.id === 16
          ? "Diseñó una plataforma de evaluación impulsada por investigación para IA multimodal y flujos de trabajo agénticos. Implementó una taxonomía de calidad de cinco niveles y un marco de métrica dual para analizar la fidelidad del modelo."
          : p.id === 17
          ? "Diseñó una extensión de alta concurrencia para el motor de búsqueda Sherlook en Rust utilizando Tokio. Integró Qdrant para búsqueda vectorial semántica y Neo4j para procesamiento de PageRank basado en grafos."
          : p.description,
    })),
  },
  experience: {
    heading: "Experiencia",
    subheading: "Mi trayectoria profesional y el impacto logrado",
    educationHeading: "Educación",
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
        item.id === 1 ? "Trainee de IA Agéntica" :
        item.id === 2 ? "Líder de Sesión" :
        item.id === 3 ? "Miembro del Equipo de Gestión de Recursos" :
        item.id === 4 ? "Desarrollador de Software" :
        item.id === 5 ? "Trainee de Ciencia de Datos" :
        item.id === 6 ? "Pasante de Desarrollo Android" :
        item.id === 7 ? "Pasante de Desarrollo Móvil (Flutter & ML)" :
        item.id === 8 ? "Instructor de Flutter" :
        item.id === 9 ? "Trainee de Desarrollo Flutter" :
        item.id === 10 ? "Desarrollador de Aplicaciones Móviles" : item.position,
      description:
        item.id === 1 ? "Experiencia práctica en la creación de agentes de IA utilizando LLMs y el ecosistema LangChain." :
        item.id === 2 ? "Liderar sesiones semanales para cohortes de estudiantes, impartiendo fundamentos básicos de informática." :
        item.id === 3 ? "Contribuyó como miembro del Equipo de Gestión de Recursos, apoyando las actividades de planificación y preparación." :
        item.id === 4 ? "Se unió tras ganar el primer lugar en un hackathon de la empresa; contribuyendo a un sistema POS basado en Flutter." :
        item.id === 5 ? "Track de Científico de Datos de IBM ganando exposición práctica a Python, SQL, análisis de datos, machine learning y herramientas de MLOps." :
        item.id === 6 ? "Programa avanzado de desarrollo Android centrado en Jetpack, Room Database y arquitectura móvil escalable." :
        item.id === 7 ? "Pasantía que combina el desarrollo con Flutter y el aprendizaje automático aplicado para prototipos de soluciones prácticas." :
        item.id === 8 ? "Lideró la fase inicial de capacitación en Flutter cubriendo fundamentos de Dart, OOP y widgets de introducción para más de 30 estudiantes." :
        item.id === 9 ? "Programa práctico de Flutter multiplataforma que cubre diseño de interfaz de usuario, gestión de estado y despliegue." :
        item.id === 10 ? "Contribuyó a las características del chatbot de comercio electrónico impulsado por IA y mejoras de rendimiento." : item.description,
    })),
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
