// src/components/StatsSection.tsx

import React from 'react';
import StatCard from './StatCard';

const StatsSection: React.FC = () => {
  return (
    // 💡 CAMBIO 1: Reemplazamos py-20 por la clase de altura 'h-[30vh]' 
    // y usamos flex para centrar el contenido verticalmente.
    <section className="h-[40vh]  flex items-center justify-center">
      {/* 1. Añadimos los keyframes y la clase de animación (dejamos el style aquí si no puedes usar un archivo CSS) */}
      <style>
        {`
          @keyframes fade-in-slide-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-stat-card {
            opacity: 0;
            animation: fade-in-slide-up 0.5s ease-out forwards;
          }
        `}
      </style>

      {/* 💡 CAMBIO 2: Removemos el padding vertical 'py-20' del section y lo dejamos al contenedor interno
          para que no interfiera con el 30vh, y centramos el contenido con 'flex' */}
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1 */}
          <div className="animate-stat-card" style={{ animationDelay: '0.2s' }}>
            <StatCard value="+2000" label="Videos editados" />
          </div>

          {/* Tarjeta 2 */}
          <div className="animate-stat-card" style={{ animationDelay: '0.4s' }}>
            <StatCard value="+1000" label="Producciones Realizadas" />
          </div>
          
          {/* Tarjeta 3 */}
          <div className="animate-stat-card" style={{ animationDelay: '0.6s' }}>
            <StatCard value="+20" label="Clientes" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;