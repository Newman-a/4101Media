// constants.ts (Versión final con LEGAL_LINKS)

import { NavLink, TeamMember, Value, Service, Project, Client } from '@/types/index';
import deltaLogoPath from '@/assets/clients/delta-logo.webp';

export const NAV_LINKS: NavLink[] = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Porfolio', path: '/porfolio' },
    { name: 'Contacto', path: '/contacto' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Cesar', role: 'CEO, Editor y Filmmaker', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' }, // --> Actualizado
  { name: 'Angelvis', role: 'Director de Desarrollao & Trafficker', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' }, // --> Actualizado
  { name: 'Newman', role: 'Desarrollador & Trafficker', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' }, // --> Actualizado
  { name: 'Roberto', role: 'Desarrollador & Trafficker', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' }, // --> Actualizado
  { name: 'Gerardo', role: 'Director de Edición', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Andrea', role: 'Diseñadora & editora', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Emilys', role: 'Editora', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Franco', role: 'Editor', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Tito', role: 'Editor', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Arianna', role: 'Diseñadora', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Bianca', role: 'Diseñadora', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Jeremi', role: 'Filmmaker & Editor', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' }, // --> Actualizado
  { name: 'Evana', role: 'Community Manager', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Andrea', role: 'Community Manager', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Maria', role: 'Community Manager', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Mariana', role: 'Community Manager', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
  { name: 'Rebeca', role: 'Community Manager', imageUrl: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' },
];

export const COMPANY_VALUES: Value[] = [
    { title: 'Honestidad', description: 'Confianza, integridad y respeto mutuo. Ofrecemos productos de calidad a precios justos y cumplimos nuestros compromisos.'},
    { title: 'Humildad', description: 'Reconocemos errores, escuchamos y valoramos las opiniones de los demás. Buscamos el aprendizaje continuo.'},
    { title: 'Creatividad e Innovación', description: 'Originalidad, fluidez y flexibilidad. Generamos valor a través de la conexión emocional y la resolución de problemas.'},
    { title: 'Empatía y Orientación al Cliente', description: 'Escuchamos con mente abierta, sin prejuicios, para comprender y conectar con las necesidades de nuestros clientes.'},
    { title: 'Responsabilidad', description: 'Compromiso, excelencia en el cumplimiento de acuerdos y proactividad para la prevención y aceptación de consecuencias.'},
    { title: 'Trabajo en Equipo', description: 'Metas comunes, comunicación y pensamiento crítico para lograr la satisfacción del cliente y la alta moral de los empleados.'},
];

export const SERVICES_DATA: Service[] = [
    {
        title: 'Producción Audiovisual',
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
        title: 'Desarrollo Web a la Medida',
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
              'Programación a medida con tecnologías modernas (HTML, CSS, JS, React).',
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

export const PORTFOLIO_PROJECTS: Project[] = [
  { title: 'Campaña "Lanzamiento X"', category: 'Video', imageUrl: 'https://picsum.photos/seed/p1/600/400' },
  { title: 'Video Corporativo "TechCorp"', category: 'Video', imageUrl: 'https://picsum.photos/seed/p2/600/400' },
  { title: 'Estrategia Redes Sociales "Moda Viva"', category: 'Marketing', imageUrl: 'https://picsum.photos/seed/p3/600/400' },
  { title: 'Anuncios "GastroFest"', category: 'Marketing', imageUrl: 'https://picsum.photos/seed/p4/600/400' },
  { title: 'Documental "Naturaleza"', category: 'Video', imageUrl: 'https://picsum.photos/seed/p5/600/400' },
  { title: 'Campaña SEO "Global Finance"', category: 'Marketing', imageUrl: 'https://picsum.photos/seed/p6/600/400' },
];

// REEMPLAZA CLIENT_LOGOS CON ESTO:
export const CLIENTS: Client[] = [
  // 2. USA la propiedad 'logoUrl'
  { name: 'Ledicia',}, 
  { name: 'Costa Azul', },
  // Si no tienen logo, simplemente omite la propiedad, y el código usará el texto.
  { name: 'Delta box', logoUrl: deltaLogoPath }, 
  { name: 'Eco club' },
  { name: 'Novaco' },
  { name: 'Dimaco' },
];

// src/utils/constants.ts

export const MASONRY_ITEMS = [
  {
    id: "p1",
    img: "",
    url: "/porfolio", // O un enlace específico a un proyecto
    height: 400,
  },
  {
    id: "p2",
    img: "",
    url: "/porfolio",
    height: 250,
  },
  {
    id: "p3",
    img: "",
    url: "/porfolio",
    height: 350,
  },
  {
    id: "p4",
    img: "",
    url: "/porfolio",
    height: 300,
  },
  {
    id: "p5",
    img: "",
    url: "/porfolio",
    height: 450,
  },
  {
    id: "p6",
    img: "",
    url: "/porfolio",
    height: 280,
  },
];

// Definición de enlaces legales (NUEVA EXPORTACIÓN)
export const LEGAL_LINKS = [
    { name: 'Política de Privacidad', path: '/politica-de-privacidad' },
    { name: 'Términos de Uso', path: '/terminos-de-uso' },
    { name: 'Política de Cookies', path: '/politica-de-cookies' },
];