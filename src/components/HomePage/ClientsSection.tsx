import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CLIENTS } from '@/utils/constants';
import LogoLoop from './common/LogoLoop'; // Asegúrate de que la ruta sea correcta

gsap.registerPlugin(ScrollTrigger);

const ClientsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Prepara los datos para el componente LogoLoop
  const clientLogos = CLIENTS.map((client, index) => ({
    node: (
      <span 
        key={index}
        className="text-2xl font-semibold uppercase tracking-widest text-white/70"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {client.name}
      </span>
    )
  }));

  useGSAP(() => {
    // 1. Seleccionamos los hijos directos del div.container
    //    (el título y el componente LogoLoop)
    const elementsToAnimate = sectionRef.current?.querySelector('.container')?.children;

    if (elementsToAnimate) {
      // 2. Creamos UNA SOLA animación para ambos elementos
      gsap.from(elementsToAnimate, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3, // El título aparecerá 0.3s antes que el LogoLoop
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        {/* Este es el primer hijo que se animará */}
        <p className="text-center text-base font-semibold text-[#ff6600] tracking-wider mb-10">
          CONFIAN EN NOSOTROS
        </p>

        {/* Este es el segundo hijo que se animará */}
        <LogoLoop 
          logos={clientLogos}
          speed={70}
          gap={80}
          fadeOut={true}
          fadeOutColor="black"
        />
      </div>
    </section>
  );
};

export default ClientsSection;