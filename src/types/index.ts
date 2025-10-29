import type { ElementType } from "react"; // --> AÑADE ESTA IMPORTACIÓN

export interface NavLink {
  name: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  imageClassName?: string; // <--- AÑADE ESTA LÍNEA
}

// En: src/types/index.ts


export interface Value {
  title: string;
  description: string;
  icon: ElementType; // --> AÑADE ESTA LÍNEA
}

// ... otros types que puedas tener

export interface Service {
    title: string;
    description: string;
    steps: {
        name: string;
        details: string[];
    }[];
    icon: ElementType; // --> AÑADE ESTA LÍNEA
}

export interface Project {
  title: string;
  category: string;
  imageUrl: string;
}

// En tu archivo types.ts
export interface Client {
  name: string;
  logoUrl?: string;
}