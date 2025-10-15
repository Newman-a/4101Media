import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CLIENTS } from '@/utils/constants';
import LogoLoop from './common/LogoLoop'; 

gsap.registerPlugin(ScrollTrigger);

const ClientsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const clientLogos = CLIENTS.map((client, index) => ({
    node: (
      client.logoUrl ? (
        <img 
          key={index}
          src={client.logoUrl} 
          alt={`${client.name} Logo`}
          className="h-36 sm:h-20 w-36 object-cover" 
        />
      ) : (
        <span 
          key={index}
          className="text-2xl font-semibold uppercase tracking-widest text-white/70"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {client.name}
        </span>
      )
    )
  }));

  useGSAP(() => {
    // Tu animación GSAP puede seguir igual, ya que apunta a la sección
    const elementsToAnimate = sectionRef.current?.querySelector('.container')?.children;

    if (elementsToAnimate) {
      gsap.from(elementsToAnimate, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });
    }
  }, { scope: sectionRef });

  return (
    // La sección sigue siendo el contenedor principal
    <section ref={sectionRef} className="py-20 app-grainy-background">
      
      {/* 👇 Este contenedor es SOLO para el texto que quieres centrado */}
      <div className="container mx-auto px-6">
        <p className="text-center text-3xl md:text-4xl font-bold text-[#ff6600] tracking-wider mb-10">
          CONFIAN EN NOSOTROS
        </p>
      </div>
      {/* El contenedor termina aquí */}

      {/* 👇 LogoLoop ahora está fuera del contenedor, ocupando el ancho completo */}
      <LogoLoop 
        logos={clientLogos}
        speed={70}
        gap={80}
        fadeOut={true}
        fadeOutColor="transparent"
      />

    </section>
  );
};

export default ClientsSection;