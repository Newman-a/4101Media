// constants.ts (Versión final con LEGAL_LINKS)

import { NavLink, TeamMember, Value, Service, Project, Client } from '@/types/index';
import type { Course } from "@/types/index";

import {
  FaShieldAlt,      // Para Honestidad
  FaSeedling,       // Para Humildad
  FaLightbulb,      // Para Creatividad
  FaRegHandshake,   // Para Empatía
  FaCheckDouble,    // Para Responsabilidad
  FaUsers           // Para Trabajo en Equipo
} from "react-icons/fa";

// ... (cerca de otras importaciones de react-icons)
import {
  // ...tus otros iconos...
       // Para Desarrollo Web
  FaPalette,        // Para Diseño Web
  FaFilm,           // Para Premiere Pro
  FaCameraRetro,    // Para Filmmaking
           // Para Community Manager
  FaMagic           // Para After Effects
} from "react-icons/fa";

export const ACADEMY_COURSES: Course[] = [
  {
    title: 'Desarrollo Web Básico',
    description: 'Próximamente...',
    icon: FaLaptopCode
  },
  {
    title: 'Diseño Web Básico',
    description: 'Próximamente...',
    icon: FaPalette
  },
  {
    title: 'Premiere Pro Básico',
    description: 'Próximamente...',
    icon: FaFilm
  },
  {
    title: 'Filmmaking Básico',
    description: 'Próximamente...',
    icon: FaCameraRetro
  },
  {
    title: 'Community Manager desde Cero',
    description: 'Próximamente...',
    icon: FaUsers
  },
  {
    title: 'After Effects Medio/Avanzado',
    description: 'Próximamente...',
    icon: FaMagic
  },
];

// ... (El resto de tus constantes como NAV_LINKS, TEAM_MEMBERS...)

// --- 2. USA LOS ICONOS CORRECTOS EN EL ARRAY ---
export const COMPANY_VALUES: Value[] = [
    { 
      title: 'Honestidad', 
      description: 'Confianza, integridad y respeto mutuo. Ofrecemos productos de calidad a precios justos y cumplimos nuestros compromisos.',
      icon: FaShieldAlt // <-- Icono correcto
    },
    { 
      title: 'Humildad', 
      description: 'Reconocemos errores, escuchamos y valoramos las opiniones de los demás. Buscamos el aprendizaje continuo.',
      icon: FaSeedling // <-- Icono correcto
    },
    { 
      title: 'Creatividad e Innovación', 
      description: 'Originalidad, fluidez y flexibilidad. Generamos valor a través de la conexión emocional y la resolución de problemas.',
      icon: FaLightbulb // <-- Icono correcto
    },
    { 
      title: 'Empatía y Orientación al Cliente', 
      description: 'Escuchamos con mente abierta, sin prejuicios, para comprender y conectar con las necesidades de nuestros clientes.',
      icon: FaRegHandshake // <-- Icono correcto
    },
    { 
      title: 'Responsabilidad', 
      description: 'Compromiso, excelencia en el cumplimiento de acuerdos y proactividad para la prevención y aceptación de consecuencias.',
      icon: FaCheckDouble // <-- Icono correcto
    },
    { 
      title: 'Trabajo en Equipo', 
      description: 'Metas comunes, comunicación y pensamiento crítico para lograr la satisfacción del cliente y la alta moral de los empleados.',
      icon: FaUsers // <-- Icono correcto
    },
];

// src/utils/constants.ts

export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Academia', path: '/academia' }, // <-- AÑADIR ESTA LÍNEA
  { name: 'Equipo', path: '/equipo' },
  { name: 'Porfolio', path: '/porfolio' },
  { name: 'Contacto', path: '/contacto' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Cesar Arteaga', role: 'CEO, Editor y Filmmaker', imageUrl: '/team/cesar_team.webp' }, // --> Actualizado
  { name: 'Angelvis Yanez', role: 'Director de Desarrollo & Trafficker', imageUrl: '/team/angelvis_team.webp', imageClassName: '' }, // --> Actualizado
  { name: 'Newman Acosta', role: 'Desarrollador & Trafficker', imageUrl: '/team/newman_team.webp' }, // --> Actualizado
  { name: 'Roberto Calderón', role: 'Desarrollador & Trafficker', imageUrl: '/team/roberto_team.webp' }, // --> Actualizado
  { name: 'Gerardo', role: 'Director de Edición', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Andrea', role: 'Diseñadora & editora', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Emilys Calderón', role: 'Editora', imageUrl: '/team/emilys_team.webp' },
  { name: 'Franco', role: 'Editor', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Tito', role: 'Editor', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Arianna', role: 'Diseñadora', imageUrl: '/team/arianna_team.webp' },
  { name: 'Bianca', role: 'Diseñadora', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Jeremi Mora', role: 'Filmmaker & Editor', imageUrl: '/team/jeremi_team.webp' }, // --> Actualizado
  { name: 'Evana', role: 'Community Manager', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Andrea', role: 'Community Manager', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Maria', role: 'Community Manager', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Mariana Vera', role: 'Community Manager', imageUrl: '/team/mariana_team.webp' },
  { name: 'Rebeca Puerta', role: 'Community Manager', imageUrl: '/team/rebeca_team.webp' },
];

// --- ICONOS PARA SERVICES_DATA ---
import {
  FaVideo,
  FaChartLine,
  FaLaptopCode,
  FaMousePointer
} from "react-icons/fa";

export const SERVICES_DATA: Service[] = [
    {
        title: 'Producción Audiovisual',
        icon: FaVideo,
        description: 'Desde la concepción de la idea hasta la entrega final, manejamos todos los aspectos de la producción de video para crear contenido visual impactante y efectivo.',
        steps: [
            {
                name: 'Pre-producción',
                details: ['Briefing y diagnóstico inicial', 'Investigación y estrategia', 'Conceptualización y guion', 'Planificación y calendarización']
            },
            {
                name: 'Producción',
                details: ['Diseño de producto digital (UX/UI)', 'Desarrollo tecnológico (Front-end/Back-end)', 'Rodaje y grabación profesional', 'Dirección de fotografía']
            },
            {
                name: 'Post-producción',
                details: ['Edición de video y montaje', 'Corrección de color y diseño de sonido', 'VFX y motion graphics', 'Entrega final en formatos adecuados']
            }
        ]
    },
    {
        title: 'Marketing Digital y Creatividad',
icon: FaChartLine,
        description: 'Desarrollamos estrategias de marketing digital integrales para conectar a las marcas con su audiencia, acelerando su crecimiento en el ámbito digital.',
        steps: [
            {
                name: 'Estrategia',
                details: ['Investigación de mercado y buyer persona', 'Definición de canales y tipo de contenido', 'Plan de acción estratégico alineado a KPIs', 'Estrategia de contenido y SEO/SEM']
            },
            {
                name: 'Ejecución',
                details: ['Creación de textos publicitarios, guiones y slogans', 'Diseño y ejecución de campañas pagadas', 'Gestión de redes sociales (Community Management)', 'Implementación en plataformas (Google Ads, Meta Ads)']
            },
            {
                name: 'Optimización',
                details: ['Monitoreo y análisis de rendimiento', 'Ajustes según resultados (Test A/B)', 'Informes mensuales con insights', 'Iteración y mejora continua']
            }
        ]
    },
    // ----- 👇 COMIENZAN LOS NUEVOS SERVICIOS AÑADIDOS -----
    {
        title: 'Desarrollo Web',
icon: FaLaptopCode,
        description: 'Creamos sitios web potentes y atractivos que convierten visitantes en clientes. Desde plataformas robustas en WordPress hasta soluciones personalizadas desde cero, construimos la presencia digital que tu marca necesita.',
        steps: [
          {
            name: 'Diseño y Estrategia UX/UI',
            details: [
              'Análisis de marca y objetivos comerciales.',
              'Diseño de interfaz centrado en la experiencia del usuario.',
              'Creación de prototipos y wireframes interactivos.'
            ]
          },
          {
            name: 'Desarrollo y Programación',
            details: [
              'Desarrollo experto en WordPress para una fácil gestión de contenido.',
              'Programación a medida con tecnologías modernas (HTML, CSS, JS, React, NextJS).',
              'Integración de funcionalidades específicas y APIs de terceros.'
            ]
          },
          {
            name: 'Automatización y Optimización',
            details: [
              'Implementación de flujos de automatización básicos (ej. email marketing).',
              'Optimización de velocidad y rendimiento para una carga rápida.',
              'Configuración de analítica web y seguimiento de conversiones.'
            ]
          }
        ]
    },
    {
        title: 'Trafficker Digital y Estrategia de Campañas',
icon: FaMousePointer,
        description: 'Atraemos tráfico cualificado a tu negocio y maximizamos tu retorno de inversión. Diseñamos, implementamos y optimizamos campañas publicitarias en las plataformas clave para alcanzar a tu audiencia ideal.',
        steps: [
          {
            name: 'Estrategia y Planificación de Campañas',
            details: [
              'Investigación de mercado y definición del buyer persona.',
              'Establecimiento de objetivos claros y KPIs medibles.',
              'Selección estratégica de canales (Meta Ads, Google Ads, TikTok Ads).'
            ]
          },
          {
            name: 'Implementación y Gestión de Anuncios',
            details: [
              'Creación y configuración técnica de las campañas.',
              'Diseño de creativos (imágenes/videos) y redacción de copy persuasivo.',
              'Gestión diaria del presupuesto y optimización de pujas.'
            ]
          },
          {
            name: 'Análisis y Reporte de Resultados',
            details: [
              'Monitorización constante de las métricas de rendimiento.',
              'Realización de pruebas A/B para mejorar la efectividad.',
              'Informes periódicos con análisis y recomendaciones claras.'
            ]
          }
        ]
    }
];

// --- 👇 EDITA ESTE ARRAY ---
export const PORTFOLIO_PROJECTS: Project[] = [
  {
    title: 'Cápsula Educativa "Rayos-X vs. Tomografía"',
    category: 'Marketing',
    imageUrl: '/projects/veneimagen.avif',
    client: 'VENEIMAGEN',
    description: 'Producción de video corto (cápsula informativa) para pauta en Meta Ads. La Dra. Guadarrama explica la diferencia entre Rayos-X y Tomografía, posicionando a Veneimagen como autoridad y educando a pacientes potenciales.',
    videoUrl: 'https://www.youtube.com/embed/F8bUQUC6238'
  },
  {
    title: 'Campaña "El Repartidor Tentado"',
    category: 'Marketing',
    imageUrl: '/projects/ledicia.avif',
    client: 'Ledicia',
    description: 'Creación de contenido vertical (Reel/TikTok) enfocado en humor para la marca de postres "Ledicia". El video busca generar viralidad y engagement, mostrando el producto como "irresistible" a través de un skit cómico.',
    videoUrl: 'https://www.youtube.com/embed/ayqLssG43zU'
  },
  {
    title: 'CC "Fan Fest Vinotinto"',
    category: 'Marketing',
    imageUrl: '/projects/cc.avif',
    client: 'C.C. Costa Azul / Arkangel Service',
    description: 'Producción y cobertura de evento "Fan Fest" para la transmisión de partidos de la Vinotinto. El proyecto incluyó instalación de pantalla LED gigante, sonido profesional, animación en vivo y dinámicas de premiación para los asistentes, logrando una exitosa activación de marca en alianza con Polar.',
    videoUrl: 'https://www.youtube.com/embed/BLkRLp6zIDI'
  },
  // { 
  //   title: 'Estrategia Redes Sociales "Moda Viva"', 
  //   category: 'Marketing', 
  //   imageUrl: 'https://picsum.photos/seed/p3/600/400',
  //   client: 'Moda Viva',
  //   description: 'Desarrollo e implementación de una estrategia de contenido para "Moda Viva", enfocada en aumentar el engagement y las ventas online.',
  //   // Sin videoUrl, el modal mostrará la imagen
  // },
  // { 
  //   title: 'Anuncios "GastroFest"', 
  //   category: 'Marketing', 
  //   imageUrl: 'https://picsum.photos/seed/p4/600/400',
  //   client: 'GastroFest',
  //   description: 'Campañas de anuncios pagados en Meta y Google para el festival "GastroFest", logrando un ROAS (Retorno de la Inversión Publicitaria) de 5x.',
  //   videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0' // Ejemplo 3
  // },
  // { 
  //   title: 'Documental "Naturaleza"', 
  //   category: 'Video', 
  //   imageUrl: 'https://picsum.photos/seed/p5/600/400',
  //   client: 'Canal Verde',
  //   description: 'Producción y post-producción de un corto documental sobre la biodiversidad local para "Canal Verde".',
  //   // Sin videoUrl
  // },
  // { 
  //   title: 'Campaña SEO "Global Finance"', 
  //   category: 'Marketing', 
  //   imageUrl: 'https://picsum.photos/seed/p6/600/400',
  //   client: 'Global Finance',
  //   description: 'Estrategia de SEO técnico y de contenidos que posicionó a "Global Finance" en el top 3 de búsquedas clave para su sector.',
  //   // Sin videoUrl
  // },
  // { 
  //   title: 'Sitio Web "EcoAventura"', 
  //   category: 'Web', 
  //   imageUrl: 'https://picsum.photos/seed/p7/600/400', // Reemplaza con tu imagen
  //   client: 'EcoAventura Tours',
  //   description: 'Diseño y desarrollo de un sitio web de reservas turísticas, construido con React y Tailwind CSS, enfocado en la velocidad y la experiencia de usuario móvil.',
  //   siteUrl: 'https://www.google.com' // <-- AÑADE LA URL REAL AQUÍ
  //   // Ojo: No añadas 'videoUrl'
  // },
];

// REEMPLAZA CLIENT_LOGOS CON ESTO:
export const CLIENTS: Client[] = [
  // 2. USA la propiedad 'logoUrl'
  { name: 'Ledicia', logoUrl: '/clients/ledicia-logo.webp' }, 
  { name: 'Costa Azul', }, 
  { name: 'Delta box', logoUrl: '/clients/delta-logo.webp' }, 
  { name: 'Eco club', logoUrl: '/clients/ecoclub-logo.webp' },
  { name: 'Novaco', logoUrl: '/clients/novaco-logo.webp' },
  { name: 'Dimaco', logoUrl: '/clients/dimaco-logo.webp' },
  { name: 'Vene imagen', logoUrl: '/clients/veneimagen-logo.webp' },
  { name: 'JBIKE', logoUrl: '/clients/jbike-logo.webp' },
  { name: 'Catgurt', logoUrl: '/clients/catgurt-logo.webp' },
  { name: 'Aerocav Venezuela', logoUrl: '/clients/aerocavvenezuela-logo.webp' },
];

// src/utils/constants.ts

export const MASONRY_ITEMS = [
  {
    id: "p1",
    img: "/gallery/1.avif",
    url: "/porfolio", // O un enlace específico a un proyecto
    height: 550,
  },
  {
    id: "p2",
    img: "/gallery/2.avif",
    url: "https://www.youtube.com/watch?v=bpY6gGjjy5I&list=RDu2ah9tWTkmk&index=4",
    height: 650,
  },
  {
    id: "p3",
    img: "/gallery/3.avif",
    url: "/porfolio",
    height: 550,
  },
  {
    id: "p4",
    img: "/gallery/4.avif",
    url: "/porfolio",
    height: 500,
  },
  {
    id: "p5",
    img: "/gallery/5.avif",
    url: "/porfolio",
    height: 550,
  },
  {
    id: "p6",
    img: "/gallery/6.avif",
    url: "/porfolio",
    height: 400,
  },
  {
    id: "p7",
    img: "/gallery/7.avif",
    url: "/porfolio",
    height: 600,
  },
  {
    id: "p8",
    img: "/gallery/8.avif",
    url: "/porfolio",
    height: 400,
  },
  {
    id: "p9",
    img: "/gallery/9.avif",
    url: "/porfolio",
    height: 500,
  },
  {
    id: "p10",
    img: "/gallery/10.avif",
    url: "/porfolio",
    height: 750,
  },
  {
    id: "p11",
    img: "/gallery/11.avif",
    url: "/porfolio",
    height: 650,
  },
  {
    id: "p12",
    img: "/gallery/12.avif",
    url: "/porfolio",
    height: 600,
  }
];

// Definición de enlaces legales (NUEVA EXPORTACIÓN)
export const LEGAL_LINKS = [
    { name: 'Política de Privacidad', path: '/politica-de-privacidad' },
    { name: 'Términos de Uso', path: '/terminos-de-uso' },
    { name: 'Política de Cookies', path: '/politica-de-cookies' },
];