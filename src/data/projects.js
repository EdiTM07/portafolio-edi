export const projectsData = [
  {
    id: "sita-plataforma",
    title: {
      es: "SITA - Sistema Integral de Tutorías Académicas",
      en: "SITA - Integral Academic Tutoring System"
    },
    description: {
      es: "Sistema de gestión académica estructurado estrictamente en tres roles (Administrador, Docente, Estudiante). Desarrollado para optimizar el seguimiento de tutorías.",
      en: "Academic management system structured strictly in three roles (Admin, Teacher, Student). Developed to optimize tutoring tracking."
    },
    technologies: ["React", "MySQL", "Node.js", "APIs"],
    type: "Web App",
    links: {
      github: "", 
      demo: null 
    },
    caseStudy: {
      challenge: {
        es: "El Instituto requería centralizar el seguimiento de tutorías académicas, eliminando procesos manuales y asegurando que solo existieran tres roles estrictos (Administrador, Docente, Estudiante) para evitar fugas de información.",
        en: "The Institute needed to centralize the tracking of academic tutoring, eliminating manual processes and ensuring strict access control with only three roles (Admin, Teacher, Student)."
      },
      solution: {
        es: "Diseñé una base de datos relacional en MySQL optimizada para consultas rápidas. En el frontend, utilicé React para crear dashboards específicos por rol, protegiendo las rutas privadas e integrando reportes en tiempo real.",
        en: "I designed a relational database in MySQL optimized for fast queries. On the frontend, I used React to create role-specific dashboards, protecting private routes and integrating real-time reports."
      }
    }
  },
  {
    id: "pos-invisible",
    title: {
      es: "Punto de Venta Invisible",
      en: "Invisible POS"
    },
    description: {
      es: "Aplicación web SaaS multi-tenant diseñada para microempresas ecuatorianas, integrando flujos de facturación electrónica e inventario.",
      en: "Multi-tenant SaaS web application designed for micro-enterprises, integrating electronic invoicing and inventory flows."
    },
    technologies: ["PHP", "CodeIgniter 4", "MySQL", "Tailwind CSS"],
    type: "SaaS Web",
    links: {
      github: "",
      demo: ""
    },
    caseStudy: {
      challenge: {
        es: "Las microempresas necesitaban un sistema ágil para facturar electrónicamente sin lidiar con interfaces complejas, requiriendo una arquitectura multi-tenant donde cada cliente tuviera su información aislada.",
        en: "Micro-enterprises needed an agile system for electronic invoicing without complex interfaces, requiring a multi-tenant architecture where each client's data was isolated."
      },
      solution: {
        es: "Implementé el patrón HMVC (Hierarchical Model View Controller) en CodeIgniter 4. Desarrollé el flujo de consumo de la API del SRI para firmar documentos XML y optimicé la interfaz con Tailwind CSS para garantizar tiempos de carga menores a 1 segundo.",
        en: "I implemented the HMVC pattern in CodeIgniter 4. I developed the flow to consume the government API for signing XML documents and optimized the UI with Tailwind CSS to ensure load times under 1 second."
      }
    }
  },
  {
    id: "geoparque-app",
    title: {
      es: "App Geoparque Imbabura",
      en: "Imbabura Geopark App"
    },
    description: {
      es: "Aplicación móvil interactiva para la visualización de rutas y geositios turísticos consumiendo ArcGIS Esri REST APIs.",
      en: "Interactive mobile application for visualizing tourist routes and geosites consuming ArcGIS Esri REST APIs."
    },
    technologies: ["Flutter", "Dart", "ArcGIS APIs", "Figma"],
    type: "Mobile App",
    links: {
      github: "",
      demo: ""
    }
  },
  {
    id: "global-events",
    title: {
      es: "Global Events",
      en: "Global Events"
    },
    description: {
      es: "Plataforma para la gestión de torneos de fútbol juvenil, inscripciones de equipos y generación de llaves (brackets) de partidos en tiempo real.",
      en: "Platform for youth soccer tournament management, team registrations, and real-time match bracket generation."
    },
    technologies: ["React", "Firebase", "Tailwind CSS"],
    type: "Web App",
    links: {
      github: "",
      demo: ""
    }
  }
];