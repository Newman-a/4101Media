import React from 'react';
import StatCard from './StatCard';

const StatsSection: React.FC = () => {
  return (
    <section className="py-20">
      {/* 1. Añadimos los keyframes y la clase de animación */}
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
          /*
            Importante: 'opacity: 0' asegura que el elemento esté invisible
            antes de que comience la animación con retraso.
           */
          .animate-stat-card {
            opacity: 0;
            animation: fade-in-slide-up 0.5s ease-out forwards;
          }
        `}
      </style>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* 2. Envolvemos cada StatCard en un div para animarlo con un retraso */}
          

          <div className="animate-stat-card" style={{ animationDelay: '0.2s' }}>
            <StatCard value="+2000" label="Videos editados" />
          </div>

          <div className="animate-stat-card" style={{ animationDelay: '0.4s' }}>
            <StatCard value="+1000" label="Producciones Realizadas" />
          </div>
          
          <div className="animate-stat-card" style={{ animationDelay: '0.6s' }}>
            <StatCard value="+20" label="Clientes" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;