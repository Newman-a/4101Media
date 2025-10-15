import React from 'react';
// Importar los datos desde el archivo de constantes
import { TEAM_MEMBERS, COMPANY_VALUES } from '@/utils/constants';

// --- Componentes auxiliares (sin cambios) ---

const TextBlock: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className = '' }) => (
  <div
    className={`col-span-2 md:col-span-3 row-span-2 bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col justify-center ${className}`}
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#ff6600] tracking-tight">{title}</h2>
    <div className="mt-4 text-base md:text-lg text-white/80">{children}</div>
  </div>
);

const ImageTile: React.FC<{ src: string; alt: string; name?: string; role?: string }> = ({ src, alt, name, role }) => (
  <div className="group relative col-span-1 row-span-2 rounded-2xl overflow-hidden">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 p-4">
        {name && <h3 className="text-white text-lg font-bold">{name}</h3>}
        {role && <p className="text-[#ff6600] text-sm font-medium">{role}</p>}
      </div>
    </div>
  </div>
);


// --- Componente principal: La página unificada "Nosotros" ---

const NosotrosUnificado: React.FC = () => {
  // Lógica para filtrar los miembros del equipo que se mostrarán
  const membersToKeep = new Set([
    'Cesar',
    'Angelvis',
    'Newman',
    'Roberto',
    'Arianna',
    'Jeremi',
  ]);

  const filteredMembers = TEAM_MEMBERS.filter(member => membersToKeep.has(member.name));

  // Dividir el array de miembros filtrados para el diseño del mosaico
  const firstHalf = filteredMembers.slice(0, 3);
  const secondHalf = filteredMembers.slice(3, 6);

  return (
    // 1. Padding superior e inferior aplicado aquí para consistencia
    <div className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-20">
      {/* 2. Padding lateral (eje x) ajustado para móviles */}
      <div className="container mx-auto px-6">
        {/* 3. Títulos y párrafos con tamaños de texto responsivos */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter">
            Conoce a <span className="text-[#ff6600]">Nuestro Equipo</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-white/70">
            Somos un colectivo de profesionales apasionados, dedicados a impulsar el crecimiento y la innovación en el mundo digital.
          </p>
        </header>

        {/* Mosaico de contenido e imágenes */}
        {/* 4. Columnas y espaciado ajustados para una mejor visualización en móviles */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          
          <TextBlock title="Nuestra Misión">
            <p>
              Contribuir al desarrollo de empresas y emprendedores, conectándolos con su mercado en el ámbito digital.
            </p>
          </TextBlock>

          {firstHalf.map((member, i) => (
            <ImageTile key={`team-first-${i}`} src={member.imageUrl} alt={member.name} name={member.name} role={member.role} />
          ))}

          {secondHalf.map((member, i) => (
            <ImageTile key={`team-second-${i}`} src={member.imageUrl} alt={member.name} name={member.name} role={member.role} />
          ))}

          <TextBlock title="Nuestra Visión">
            <p>
              Ser el medio de crecimiento empresarial, personal y social de mayor posicionamiento en Latinoamérica.
            </p>
          </TextBlock>
          
          <TextBlock title="Nuestros Valores">
            <ul className="list-disc list-inside space-y-2">
              {COMPANY_VALUES.map(value => (
                <li key={value.title}>{value.title}</li>
              ))}
            </ul>
          </TextBlock>
          
        </div>
      </div>
    </div>
  );
};

export default NosotrosUnificado;