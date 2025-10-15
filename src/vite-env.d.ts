// src/declarations.d.ts (o src/vite-env.d.ts)

// Indica a TypeScript cómo tratar las importaciones de archivos SVG.
declare module '*.svg' {
  const content: string;
  export default content;
}

// Declaración de módulos para archivos de video (.mp4)
declare module '*.mp4' {
  const src: string;
  export default src;
}

// 🚀 SOLUCIÓN AL ERROR TS2307: Declaración para imágenes PNG
declare module '*.png' {
  const content: string;
  export default content;
}

// Opcional: Si usas otros formatos de imagen
declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// 👇 AÑADE ESTO
interface Window {
  dataLayer: any[];
}