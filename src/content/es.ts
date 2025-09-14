import base, { type Content } from "./en";

const es: Content = {
  ...base,
  meta: {
    ...base.meta,
  },
  nav: base.nav,
  hero: {
    ...base.hero,
    greeting: "Hola, soy",
    title: "Desarrollador Creativo y Arquitecto Digital",
    ctas: {
      seeProjects: "Ver Proyectos",
      getInTouch: "Contactar",
    },
  },
  about: {
    ...base.about,
    heading: "Sobre mí",
    subheading:
      "Un desarrollador apasionado que crea experiencias digitales que importan",
  },
  skills: {
    ...base.skills,
    heading: "Habilidades y Experiencia",
    toolsHeading: "Qué puedo hacer por ti",
  },
  projects: {
    ...base.projects,
    heading: "Proyectos Destacados",
    moreHeading: "Más Proyectos",
    ctaAllGithub: "Ver todo en GitHub",
  },
  experience: {
    ...base.experience,
    heading: "Experiencia",
    educationHeading: "Educación",
  },
  contact: {
    ...base.contact,
    heading: "Trabajemos juntos",
    subheading:
      "¿Listo para dar vida a tu visión digital? Hablemos y creemos algo increíble juntos.",
    form: {
      ...base.contact.form,
      name: "Nombre *",
      email: "Correo *",
      subject: "Asunto *",
      message: "Mensaje *",
      submit: "Enviar Mensaje",
      submitting: "Enviando...",
    },
    quickChatHeading: "¿Charla rápida?",
    quickChatDesc:
      "¿Prefieres una llamada rápida? Estoy disponible para una consulta de 15 minutos.",
    scheduleCall: "Agendar una llamada",
    resumeHeading: "¿Interesado en mi trabajo?",
    resumeDesc:
      "Descarga mi currículum para conocer más sobre mi experiencia y habilidades.",
    resumeCta: "Descargar Currículum",
    socialsHeading: "Conecta conmigo",
  },
  footer: {
    ...base.footer,
    navHeading: "Navegación",
    contactHeading: "Contacto",
    builtWith: "Construido con React, Three.js y TailwindCSS",
    rights: "© {year} Alex Chen. Hecho con ♥ y mucho café",
  },
};

export default es;
