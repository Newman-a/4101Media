import React from 'react';

// --- Componente de Tarjeta de Tema para Reutilización ---
// Este componente nos ayuda a no repetir el mismo código HTML para cada tema.
const ThemeCard: React.FC<{
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  subtitleColor: string;
  buttonText: string;
}> = ({ title, description, bgColor, textColor, accentColor, subtitleColor, buttonText }) => (
  <div className={`rounded-2xl border border-white/10 p-8 md:p-12 ${bgColor}`}>
    <h2 className={`text-3xl font-bold ${accentColor}`}>{title}</h2>
    <p className={`mt-3 max-w-xl text-lg ${subtitleColor}`}>
      {description}
    </p>
    <div className="mt-6">
      <h3 className={`text-xl font-semibold ${textColor}`}>Ejemplo de Título Secundario</h3>
      <p className={`mt-2 ${subtitleColor}`}>
        Este es un párrafo de ejemplo para mostrar cómo se ve el texto del cuerpo principal dentro de esta paleta de colores. La legibilidad es clave.
      </p>
    </div>
    <button
      className={`mt-8 px-6 py-3 font-semibold rounded-full transition-transform duration-300 hover:scale-105 ${accentColor.startsWith('text-') ? `bg-[${accentColor.slice(5, -1)}] text-white` : `${accentColor} text-white`}`}
    >
      {buttonText}
    </button>
  </div>
);


// --- Página Principal para Probar los Temas ---
const ThemeTesterPage: React.FC = () => {
  return (
    // Usamos un fondo neutro oscuro para que las tarjetas de prueba resalten
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-20 md:py-28">
        
        {/* --- Título de la Página de Prueba --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
            Prueba de <span className="text-[#ff6600]">Temas de Color</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Visualiza cómo diferentes paletas de colores podrían cambiar la percepción de la marca.
          </p>
        </div>

        {/* --- Contenedor de las Paletas de Prueba --- */}
        <div className="space-y-12">

          {/* Opción 1: Tema Claro y Profesional (Estándar) */}
          <ThemeCard
            title="Tema Claro (Light & Professional)"
            description="Máxima legibilidad y una sensación de limpieza y amplitud. El naranja resalta como un acento vibrante."
            bgColor="bg-white"
            textColor="text-gray-900"
            subtitleColor="text-gray-600"
            accentColor="text-[#ff6600]"
            buttonText="Botón de Acción"
          />

          {/* Opción 2: Tema Oscuro Alternativo (Modern Slate) */}
          <ThemeCard
            title="Tema Pizarra (Modern Slate)"
            description="Más suave que el negro puro. Este gris oscuro (pizarra) se siente moderno y tecnológico, pero es menos intenso para la vista."
            bgColor="bg-slate-900"
            textColor="text-white"
            subtitleColor="text-slate-400"
            // Un acento cian o turquesa funciona muy bien con los tonos pizarra.
            accentColor="text-cyan-400" 
            buttonText="Explorar Servicios"
          />

          {/* Opción 3: Tema Corporativo y Confiable (Corporate Blue) */}
          <ThemeCard
            title="Tema Corporativo (Corporate Blue)"
            description="Ideal para proyectar confianza, seriedad y fiabilidad. El azul es un color clásico en el mundo empresarial."
            bgColor="bg-white"
            textColor="text-gray-900"
            subtitleColor="text-gray-600"
            // Un azul intenso y profesional como color de acento.
            accentColor="text-blue-600"
            buttonText="Contactar Ahora"
          />
          
        </div>
      </div>
    </div>
  );
};

export default ThemeTesterPage;