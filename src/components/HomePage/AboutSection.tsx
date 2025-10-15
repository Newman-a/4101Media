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
    // Seleccionar los elementos a animar dentro del contenedor
    const elementsToAnimate = containerRef.current?.children;
    if (!elementsToAnimate) return;

    // Animación "fade up" para cada elemento hijo
    gsap.from(elementsToAnimate, {
      opacity: 0,
      y: 50, // Mover 50px hacia arriba
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2, // Retraso entre la animación de cada elemento
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', // La animación empieza cuando el 80% del contenedor es visible
        once: true, // La animación solo ocurre una vez
      },
    });
  }, { scope: containerRef });

  return (
    <section className="py-24 app-grainy-background">
      {/* Añadimos la ref al contenedor principal */}
      <div ref={containerRef} className="container mx-auto px-6 text-center">
        <h2 className="text-base font-semibold text-[#ff6600] tracking-wider uppercase">Sobre Nosotros</h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Un equipo creando un producto <LightningIcon className="inline-block h-8 w-8 text-[#ff6600]" /> único y poderoso.
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80">
          Por más de 5 años, nuestro equipo de más de 20 personas ha estado en la vanguardia del crypto y fintech, y ahora aplicamos esa misma pasión y experiencia para llevar tu marca al siguiente nivel en el marketing digital.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;