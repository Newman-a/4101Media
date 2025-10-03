import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registrar el plugin de GSAP
gsap.registerPlugin(ScrollTrigger);

const ServicesHighlightSection: React.FC = () => {
  // 1. Usaremos una sola ref para el contenedor principal del contenido
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 2. Seleccionamos TODOS los elementos que queremos animar
    //    En este caso, son los dos bloques: el de títulos y el grid de tarjetas.
    const elementsToAnimate = containerRef.current?.children;
    if (!elementsToAnimate) return;

    // 3. Creamos UNA SOLA animación para todos los elementos
    gsap.from(elementsToAnimate, {
      opacity: 0,
      y: 50, // Mover 50px hacia arriba
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3, // Un retraso de 0.3s entre la animación del bloque de título y el grid
      scrollTrigger: {
        trigger: containerRef.current, // Usamos el contenedor como único disparador
        start: 'top 80%', // La animación empieza cuando el 80% del contenedor es visible
        once: true, // La animación solo ocurre una vez
      },
    });

  }, { scope: containerRef });

  return (
    <section className="py-24 bg-black">
      {/* 4. Colocamos la ref en el div que envuelve TODO el contenido a animar */}
      <div ref={containerRef} className="container mx-auto px-6">
        
        {/* Este es el primer hijo (elementsToAnimate[0]) */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-[#ff6600] tracking-wider uppercase">Servicios</h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-5xl">Cómo podemos ayudarte</p>
        </div>
        
        {/* Este es el segundo hijo (elementsToAnimate[1]) */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-[#ff6600] transition-all duration-300">
            <h3 className="text-2xl font-bold text-white">Producción Audiovisual</h3>
            <p className="mt-4 text-white/70">Desde la concepción de la idea hasta la entrega final, creamos contenido visual impactante y efectivo que cautiva a tu audiencia.</p>
          </div>
          <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-[#ff6600] transition-all duration-300">
            <h3 className="text-2xl font-bold text-white">Marketing Digital y Creatividad</h3>
            <p className="mt-4 text-white/70">Desarrollamos estrategias integrales para conectar tu marca con su audiencia, acelerando el crecimiento en el ámbito digital.</p>
          </div>
          <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-[#ff6600] transition-all duration-300">
            <h3 className="text-2xl font-bold text-white">Desarrollo Web a la Medida</h3>
            <p className="mt-4 text-white/70">Creamos sitios web potentes y atractivos que convierten visitantes en clientes, desde WordPress hasta soluciones personalizadas desde cero.</p>
          </div>
          <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-[#ff6600] transition-all duration-300">
            <h3 className="text-2xl font-bold text-white">Trafficker Digital y Estrategia de Campañas</h3>
            <p className="mt-4 text-white/70">Atraemos tráfico cualificado y maximizamos tu retorno de inversión con campañas optimizadas en Meta, Google y TikTok Ads.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesHighlightSection;