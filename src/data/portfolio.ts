export const personalInfo = {
  name: "Kevin Martinez E.",
  title: "Frontend Developer",
  tagline:
    "Creando experiencias web modernas, accesibles y visualmente impactantes",
  description:
    "Desarrollador Full Stack con un fuerte enfoque en el frontend, especializado en crear aplicaciones web y móviles de alto rendimiento. Mi objetivo es transformar ideas complejas en productos digitales intuitivos y escalables.",
  email: "martinezkevindev@gmail.com",
  location: "Colombia",
  availability: "Disponible para oportunidades",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/kevinmartinez", icon: "Github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kevinmartinez",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/kevinmartinez",
    icon: "Twitter",
  },
  { name: "Email", url: "mailto:kevin@example.com", icon: "Mail" },
];

export const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lideris Hub",
    description: "Aplicativo de gestión integral para el sector salud.",
    longDescription:
      "Desarrollador frontend en Lideris, aplicativo de gestión para el sector salud. Implementé arquitectura de frontend escalable, definiendo estructuras de carpetas y componentes reutilizables. Colaboré con equipo UI/UX para crear interfaces accesibles y responsivas orientadas a flujos clínicos y administrativos.",
    image: "/projects/project-1.webp",
    tags: ["React", "Next.js", "TypeScript", "UI/UX", "Scalable Arch"],
  },
  {
    id: 2,
    title: "Auralis",
    description: "Aplicación SaaS multitenant moderna y escalable.",
    longDescription:
      "Participé como desarrollador frontend en el proyecto Auralis SAS, construyendo interfaces modernas y escalables para una aplicación SaaS multitenant. Colaboré en el diseño y la implementación de arquitecturas de frontend con React/Next.js, definiendo estructuras de carpetas mantenibles, componentes reutilizables y buenas prácticas de organización. También integré el frontend con APIs externas (incluyendo servicios relacionados con Meta/WhatsApp/Facebook/Instagram).",
    image: "/projects/project-2.webp",
    tags: ["Next.js", "React", "SaaS", "Multitenant", "Meta API"],
  },
  {
    id: 3,
    title: "Cotizador de Cirugías Estéticas",
    description: "Plataforma web para cotización de procedimientos estéticos.",
    longDescription:
      "Desarrollé una plataforma web que permite a los pacientes cotizar procedimientos estéticos, adjuntar exámenes médicos, gestionar servicios de turismo médico y realizar pagos en línea.",
    image: "/projects/project-3.webp",
    tags: ["React", "Web App", "Payments", "Medical", "Tourism"],
  },
  {
    id: 4,
    title: "Software Administrativo para Empresa de Confección",
    description: "Sistema integral de gestión de producción y administración.",
    longDescription:
      "Desarrollé un sistema integral de gestión para una empresa de confección de ropa, que abarca desde la planeación de producción hasta la entrega final. Incluye módulos para compras, inventario, órdenes de producción, control de calidad, ventas y reportes financieros. El software permitió digitalizar procesos clave, mejorar la trazabilidad y reducir errores operativos, logrando una mejora en eficiencia administrativa y un mayor control del flujo de trabajo en tiempo real.",
    image: "/projects/project-4.webp",
    tags: ["Fullstack", "ERP", "Inventory", "Production", "Digitalization"],
  },
  {
    id: 5,
    title: "Sempertex - Gestión de Materiales",
    description: "Sistema de gestión de orden de flujo para materiales.",
    longDescription:
      "Desarrollé una solución para Sempertex enfocada en la gestión eficiente del orden de ingreso y salida de materiales, optimizando la logística interna y el control de inventario en tiempo real.",
    image: "/projects/project-1.webp",
    tags: ["React", "Logistics", "Inventory", "Real-time"],
  },
  {
    id: 6,
    title: "Gestión de Planta Mobile",
    description: "App móvil para control de producción y marcaciones.",
    longDescription:
      "Colaboré en el desarrollo de una aplicación móvil híbrida con React Native que complementa el sistema administrativo de confección. El enfoque principal es la gestión de inicio a fin de la planta, permitiendo realizar marcaciones, seguimiento de actividades y control de flujo de trabajo directamente desde el piso de producción.",
    image: "/projects/project-2.webp",
    tags: ["React Native", "Mobile", "IoT", "Production Control"],
  },
];

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend Core",
    icon: "Monitor",
    description: "Interfaces modernas, reactivas y de alto rendimiento.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Mobile Development",
    icon: "Smartphone",
    description: "Apps nativas y multiplataforma con una sola base de código.",
    skills: ["React Native", "Expo", "Mobile UI Patterns", "App Store / Play Store Deploy"],
  },
  {
    category: "Backend & Systems",
    icon: "Terminal",
    description: "Arquitecturas de servidor seguras, escalables y eficientes.",
    skills: ["Node.js", "NestJS", "Express", "REST APIs", "GraphQL", "Auth (JWT, OAuth)"],
  },
  {
    category: "Databases & Cloud",
    icon: "Cloud",
    description: "Gestión de datos y despliegue en la nube.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "AWS (S3, CloudFront)",
      "Docker",
      "Git",
    ],
  },
  {
    category: "Quality & Testing",
    icon: "ShieldCheck",
    description: "Garantizando la estabilidad y mantenibilidad.",
    skills: ["Jest", "Cypress", "Testing Library", "CI/CD", "TDD"],
  },
];

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Pangea Soluciones Digitales SAS",
    position: "Frontend Developer",
    period: "dic. 2023 - actualidad",
    description:
      "Desarrollo de interfaces modernas y escalables para soluciones digitales.",
    highlights: [
      "Especializado en Cascading Style Sheets (CSS) y Git",
      "Colaboración en proyectos con enfoque en UI/UX y accesibilidad",
      "Uso de metodologías ágiles para el desarrollo de software",
    ],
    logo: "/logos/pangea.jpeg",
  },
  {
    id: 2,
    company: "Sempertex S.A.",
    position: "Full Stack Developer",
    period: "abr. 2023 - oct. 2023",
    description:
      "Contrato de prácticas enfocado en el desarrollo de aplicativos internos.",
    highlights: [
      "Creación y despliegue de un Aplicativo Web para mejorar el control de ingreso de Herramientas/Equipos de Proveedores",
      "Mejoras en el Frontend y Backend de Aplicativo Web existente SOLMAT para creación de Materiales internos",
      "Tecnologías: JavaScript (Node.js, Express), SQL Server, Tailwind CSS",
    ],
    logo: "/logos/sempertex.jpeg",
  },
];
