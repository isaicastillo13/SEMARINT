export const siteContent = {
  companyName: "SEMARINT",
  legalName: "Servicios Aéreos Marítimos Internacionales, S.A.",
  navLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "La Empresa", href: "#empresa" },
    { label: "Servicios", href: "#servicios" },
    { label: "Destinos", href: "#destinos" },
    { label: "Junta directiva", href: "#junta" },
    { label: "Contacto", href: "#contacto" },
  ],
  navbar:{
    logo: "/src/assets/Logo.jpg",
    imageAlt: "Logo de SEMARINT"
  },
  hero: {
    eyebrow: "Servicios Aéreos Marítimos",
    title: "Servicios Aéreos Marítimos",
    titleSecundary: "Internacionales, S.A.",
    description:
      "Soluciones integrales de logística, transporte y comercio internacional, conectando Panamá con el Caribe y el resto del mundo",
    primaryCta: { label: "Solicitar servicio", href: "#contacto", src: "/src/assets/icons/icon_MdiFileDocument.svg" },
    whatsappCtaLabel: "Contáctanos por WhatsApp",
    whatsappCtaIcon: "/src/assets/icons/icon_MdiWhatsapp.svg",
    whatsappHref: "https://wa.me/50763683646",
    // TODO: Reemplazar por imagen real corporativa cuando el cliente la comparta.
    imageUrl: "/src/assets/hero_6.PNG",
    imageAlt: "Operación logística de SEMARINT",
    // TODO: Reemplazar por fotografía operativa real provista por cliente.
    visualCaption:
      "Información por confirmar: incluir fotografía operativa real de SEMARINT para este bloque principal.",
  },
  about: {
    title: "Conoce quiénes somos",
    introduction_title: "Introducción",
    introduction_description:
      "SEMARINT es una empresa panameña especializada en transporte marítimo, transporte aéreo y logística integral.",
    intro:
      "Origen, iniciativa, estrategia, misión, visión y alcance de SEMARINT.",
    pillars: [
      {
        title: "Iniciativa",
        text: "Desarrollar una operación coordinada entre servicios marítimos, aéreos y logísticos desde Panamá.",
      },
      {
        title: "Estrategia",
        text: "Integrar la coordinación operativa en un solo punto de atención para cada solicitud.",
      },
      {
        title: "Misión",
        text: "Brindar soluciones de transporte y logística con procesos claros y seguimiento de cada etapa.",
      },
      {
        title: "Visión",
        text: "Consolidar una conexión confiable entre Panamá y el Caribe mediante servicios integrales.",
      },
    ],
    purpose: {
      label: "Nuestro propósito",
      text: "Estamos aquí para construir un servicio mejor, más cercano y más comprometido.",
    },
    scopeTitle: "Alcance de la empresa",
    scopeItems: [
      {
        title: "Transporte marítimo",
        description:
          "Coordinación de carga marítima con planificación operativa y seguimiento del proceso.",
      },
      {
        title: "Logística y transporte aéreo",
        description:
          "Soporte para operaciones de carga aérea y continuidad logística según cada requerimiento.",
      },
    ],
  },
  services: {
    sectionLabel: "Sección 2 · Servicios",
    title: "Servicios",
    intro:
      "Tres líneas de atención diseñadas para cubrir necesidades de movimiento de carga y soporte logístico.",
    items: [
      {
        title: "Transporte marítimo",
        description:
          "Gestión de carga marítima con planeación operativa y coordinación documental desde Panamá.",
      },
      {
        title: "Transporte aéreo",
        description:
          "Servicio de carga aérea orientado a operaciones que requieren tiempos de respuesta ágiles.",
      },
      {
        title: "Logística integral",
        description:
          "Acompañamiento del flujo logístico para mantener continuidad entre transporte, seguimiento y entrega.",
      },
    ],
    scopeBox: {
      title: "Alcance del servicio",
      description:
        "Desde la coordinación y documentación hasta el manejo y la entrega de la mercancía.\nServicios complementarios: gestión portuaria, agenciamiento naviero y fletamento.",
    },
    // TODO: Reemplazar por fotografía oficial de servicios cuando el cliente la comparta.
    imageUrl: "/src/assets/hero_4.jpg",
    imageAlt: "Operación logística de carga",
  },
  destinations: {
    sectionLabel: "Sección 3 · Destinos y objetivos",
    title: "Destinos y objetivos",
    intro:
      "Conectamos Panamá con el Caribe mediante una operación orientada a seguridad, eficiencia y continuidad logística.",
    mainDestination: {
      label: "Destino principal",
      text: "Panamá ↔ principales puertos del Caribe",
    },
    countryGroups: [
      [
        { name: "Guatemala", flag: "/src/assets/flags/guatemala.svg.webp" },
        { name: "El Salvador", flag: "/src/assets/flags/el_salvador.svg.webp" },
        { name: "Honduras", flag: "/src/assets/flags/honduras.svg.webp" },
        { name: "Nicaragua", flag: "/src/assets/flags/nicaraguas.svg.webp" },
        { name: "Costa Rica", flag: "/src/assets/flags/costaRica.svg.webp" },
        { name: "Panamá", flag: "/src/assets/flags/panama.webp" },
      ],
      [
        { name: "Colombia", flag: "/src/assets/flags/colombia.svg.webp" },
        { name: "Venezuela", flag: "/src/assets/flags/venezuela.svg.webp" },
        { name: "Brasil", flag: "/src/assets/flags/brazil.svg.webp" },
        { name: "Guyana", flag: "/src/assets/flags/guyana.svg.webp" },
      ],
      [
        { name: "Belice", flag: "/src/assets/flags/belize.svg.webp" },
        { name: "Cuba", flag: "/src/assets/flags/cuba.svg.webp" },
        { name: "República Dominicana", flag: "/src/assets/flags/dominicanRepublic.svg.webp" },
        { name: "Jamaica", flag: "/src/assets/flags/jamaica.svg.webp" },
      ],
    ],
    objectiveCards: [
      {
        title: "Operaciones regulares",
        description:
          "Establecer conexiones de carga consistentes entre Panamá y puntos estratégicos del Caribe.",
      },
      {
        title: "Servicio integral",
        description:
          "Coordinar la operación desde la planificación inicial hasta la entrega final de la carga.",
      },
      {
        title: "Seguridad y puntualidad",
        description:
          "Priorizar el cumplimiento de tiempos y el resguardo operativo de cada embarque.",
      },
      {
        title: "Transparencia y alianzas",
        description:
          "Fortalecer relaciones de largo plazo con comunicación clara durante todo el proceso.",
      },
    ],
    // TODO: Sustituir por fotografía oficial de la sección destinos.
    imageUrl: "/src/assets/hero_5.jpg",
    imageAlt: "Carga marítima en ruta",
    highlights: [
      "Información por confirmar: detalle oficial de rutas y cobertura por destino.",
      "Información por confirmar: validación de frecuencias y tipo de operación por país.",
    ],
  },
  board: {
    sectionLabel: "Sección 5 · Junta directiva",
    title: "Junta directiva",
    subtitle: "Las personas detrás de la empresa",
    intro:
      "Conoce a los miembros que lideran y respaldan la visión de SEMARINT.",
    // TODO: Completar con nombres, cargos e imágenes oficiales de la junta directiva.
    members: [
      {
        name: "Lic. Arianna Peréz Acosta",
        role: "Directora Presidente",
        imageUrl: "/src/assets/lic_arianna_perez.jpeg",
      },
      {
        name: "Lic. Adolfo Renso Timana Chepote",
        role: "Director Tesorero",
        imageUrl: "/src/assets/lic_adolfo_timana.jpeg",
      },
      {
        name: "Cap. Juan Carlos Madrid Olmos",
        role: "Director Vocal",
        imageUrl: "/src/assets/cap_juan_madrid.jpeg",
      },
    ],
  },
  contact: {
    sectionLabel: "Sección 6 · Contacto",
    title: "Solicita tu servicio",
    intro:"Cuéntanos qué necesitas transportar. Nuestro equipo podrá contactarte para dar seguimiento.",
    imageUrl: "/src/assets/logistic_1.jpg",
    imageAlt: "Contacto operativo de SEMARINT",
    imageCaption: "Panamá · Caribe · Mundo",
    formTitle: "Formulario de solicitud",
    // TODO: Confirmar dirección física oficial.
    helper:
      "Información por confirmar: dirección física oficial de SEMARINT.",
    fields: {
      fullName: "Nombre completo",
      company: "Empresa",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      cargoType: "Tipo de carga",
      route: "Origen y destino",
    },
    submitLabel: "Enviar solicitud de servicio",
    formNote: "Los campos se conectarán al formulario web definitivo.",
    directContact: {
      title: "Contacto directo",
      emailLabel: "Correo electrónico",
      emailValue: "reservas@semarint.com",
      emailHref: "mailto:reservas@semarint.com",
      phonesLabel: "Teléfonos",
      phones: [
        { label: "+507 262-8400", href: "tel:+5072628400" },
        { label: "+507 6368-3646", href: "tel:+50763683646" },
      ],
      whatsappLabel: "WhatsApp directo",
      whatsappValue: "wa.me/50763683646",
      whatsappHref: "https://wa.me/50763683646",
    },
    pendingIntegration:
      "Integración pendiente: este formulario aún no está conectado a un servicio de envío.",
  },
};
