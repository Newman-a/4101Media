# Documentación del Proyecto 4101 Media

## Índice

- [Descripción General](#descripción-general)
- [Estructura de Carpetas y Archivos](#estructura-de-carpetas-y-archivos)
- [Dependencias Principales](#dependencias-principales)
- [Descripción de Carpetas y Archivos Clave](#descripción-de-carpetas-y-archivos-clave)
- [Estilos y Configuración](#estilos-y-configuración)
- [Scripts de Inicio](#scripts-de-inicio)

---

## Descripción General

**4101 Media** es un proyecto web desarrollado con React, TypeScript y Vite, utilizando TailwindCSS para los estilos. El proyecto está organizado en componentes reutilizables y páginas, siguiendo buenas prácticas de modularidad y escalabilidad.

---

## Estructura de Carpetas y Archivos

```
4101Media/
│
├── App.tsx
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
│
├── public/
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── HomePage/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ClientsSection.tsx
│   │   │   ├── CountUp.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesHighlightSection.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── common/
│   │   │       ├── LogoLoop.tsx
│   │   │       ├── ShinyText.css
│   │   │       └── ShinyText.tsx
│   │   ├── icons/
│   │   │   ├── ArrowLeftIcon.tsx
│   │   │   ├── ArrowRightIcon.tsx
│   │   │   ├── CloseIcon.tsx
│   │   │   ├── LightningIcon.tsx
│   │   │   └── MenuIcon.tsx
│   │   └── layout/
│   │       ├── Footer.tsx
│   │       └── Header.tsx
│   ├── hooks/
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── LegalPage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── TeamPage.tsx
│   ├── styles/
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── constants.ts
```

---

## Dependencias Principales

- **React**: Librería principal para la construcción de interfaces de usuario.
- **TypeScript**: Tipado estático para JavaScript.
- **Vite**: Herramienta de desarrollo y bundler rápido.
- **TailwindCSS**: Framework de utilidades para estilos CSS.

---

## Descripción de Carpetas y Archivos Clave

- **App.tsx**: Componente raíz de la aplicación.
- **index.html**: Archivo HTML principal, incluye el punto de montaje y configuración de Tailwind.
- **index.tsx**: Punto de entrada de React.
- **package.json**: Manejo de dependencias y scripts.
- **tailwind.config.js**: Configuración personalizada de TailwindCSS.
- **tsconfig.json**: Configuración de TypeScript.
- **vite.config.ts**: Configuración de Vite.

### Carpeta `src/`

- **components/**: Componentes reutilizables, organizados por páginas y funcionalidades.
  - **HomePage/**: Secciones específicas de la página de inicio.
  - **icons/**: Iconos SVG como componentes React.
  - **layout/**: Componentes de estructura general (Header, Footer).
- **hooks/**: Custom hooks de React.
- **pages/**: Páginas principales del sitio.
- **styles/**: Archivos de estilos globales o específicos.
- **types/**: Definiciones de tipos TypeScript.
- **utils/**: Utilidades y constantes globales.

### Carpeta `public/`

- Archivos estáticos accesibles públicamente (imágenes, favicon, etc).

---

## Estilos y Configuración

- **TailwindCSS** se importa vía CDN en `index.html` y se configura en `tailwind.config.js`.
- Los estilos personalizados pueden estar en `src/styles/` y en componentes específicos.

---

## Scripts de Inicio

- Para iniciar el proyecto en desarrollo:
  ```bash
  npm run dev
  ```
- Para construir la versión de producción:
  ```bash
  npm run build
  ```
- Para previsualizar la build:
  ```bash
  npm run preview
  ```

---

## Notas

- El proyecto está preparado para escalar y agregar nuevas páginas o componentes fácilmente.
- Se recomienda mantener la estructura modular para facilitar el mantenimiento y la colaboración.