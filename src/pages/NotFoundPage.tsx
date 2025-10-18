// src/pages/NotFoundPage.tsx

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const NotFoundPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animación de entrada simple para el contenido
    gsap.from(containerRef.current?.children, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
    });
  }, { scope: containerRef });

  return (
    <div className="app-grainy-background text-white min-h-screen flex items-center justify-center">
      <div ref={containerRef} className="container mx-auto px-6 py-20 text-center">
        
        <h1 className="text-9xl font-extrabold text-[#ff6600] tracking-widest mb-4">404</h1>
        
        <div className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Página No Encontrada
        </div>
        
        <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
          Lo sentimos, la URL que solicitaste no existe. Es posible que la página haya sido eliminada o que la dirección no sea correcta.
        </p>

        <Link 
          to="/" 
          className="bg-[#ff6600] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#e65c00] transition-colors duration-300 transform hover:scale-105 inline-flex items-center gap-2"
        >
          Volver a la Página Principal
        </Link>
        
      </div>
    </div>
  );
};

export default NotFoundPage;