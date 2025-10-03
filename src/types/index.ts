
export interface NavLink {
  name: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface Service {
    title: string;
    description: string;
    steps: {
        name: string;
        details: string[];
    }[];
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