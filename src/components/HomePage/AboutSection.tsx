// src/components/HomePage/AboutSection.tsx

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import LightningIcon from '../icons/LightningIcon';

// Registrar el plugin de GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // La animación ahora animará las dos grandes columnas: la de Texto y la de Imágenes.
    const elementsToAnimate = containerRef.current?.children;
    if (!elementsToAnimate) return;

    gsap.from(elementsToAnimate, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2, 
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section className="py-24 app-grainy-background">
      
      {/* 💡 CAMBIO 1: Cambiamos la distribución a 6/6 (50%/50%) en desktop */}
      <div ref={containerRef} className="container mx-auto px-6 grid md:grid-cols-12 gap-x-12 gap-y-12 items-center">
        
        {/* COLUMNA 1: TEXTO (Ocupa 6 de 12 columnas) */}
        <div className="md:col-span-6 order-last md:order-first text-center md:text-left">
            <h2 className="text-base font-semibold text-[#ff6600] tracking-wider uppercase">Sobre Nosotros</h2>
            <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Un equipo creando un producto <LightningIcon className="inline-block h-8 w-8 text-[#ff6600]" /> único y poderoso.
            </p>
            <p className="mt-6 max-w-3xl md:max-w-none mx-auto text-lg text-white/80">
                Aquí puedes detallar quién eres, qué haces y por qué eres la mejor opción. Habla de la pasión por el video, el marketing y la tecnología. 
                Recuerda que este componente está usando Lazy Loading, lo cual es excelente para el rendimiento.
            </p>
        </div>
        
        {/* COLUMNA 2: CONTENEDOR DE IMÁGENES (Ocupa 6 de 12 columnas) */}
        <div className="md:col-span-6 order-first md:order-last">
            {/* 💡 CAMBIO 2: Sub-cuadrícula para las dos imágenes */}
            <div className="grid grid-cols-2 gap-4">
                
                {/* Imagen 1 */}
                <img 
                    src="/home-1.webp" 
                    alt="Espacio de trabajo y equipos 4101 Media" 
                    loading="lazy" 
                    className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Imagen 2 */}
                <img 
                    src="/home-2.webp" 
                    alt="Detalle de estudio o producción 4101 Media" 
                    loading="lazy" 
                    className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;