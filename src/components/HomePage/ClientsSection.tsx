import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CLIENTS } from '@/utils/constants';
import Marquee from 'react-fast-marquee'; // 1. IMPORTAR MARQUEE

gsap.registerPlugin(ScrollTrigger);

const ClientsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // La animación GSAP para el título sigue igual
  useGSAP(() => {
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
    <section ref={sectionRef} className="">
      
      {/* El título sigue igual */}
      <div className="container mx-auto px-6">
        <p className="text-center text-3xl md:text-4xl font-bold text-[#ff6600] tracking-wider mb-10">
          CONFIAN EN NOSOTROS
        </p>
      </div>

      {/* 3. REEMPLAZAR LogoLoop CON Marquee */}
      <Marquee 
        pauseOnHover={true}
        speed={70}
        gradient={true} // Reemplaza 'fadeOut'
        gradientColor="[0, 0, 0]" // Color del difuminado (negro, de tu fondo)
        gradientWidth={150} // Ancho del difuminado
      >
        {/* 4. Mapeamos CLIENTS directamente aquí */}
        {CLIENTS.map((client, index) => (
          
          // 👇👇 AQUÍ ESTÁ EL CONTROL DE TAMAÑO 👇👇
          // Cambia 'h-20' (80px) por un valor más grande.
          // Por ejemplo: h-24 (96px), h-32 (128px), h-40 (160px)
          <div 
            key={index}
            // Ajusta el 'mx-10' (40px) para el espaciado
            className="mx-10 flex h-40 items-center justify-center" // <--- CAMBIA 'h-20'
          >
            {client.logoUrl ? (
              <img 
                src={client.logoUrl} 
                alt={`${client.name} Logo`}
                // Esta clase ('max-h-full') se asegura de que la imagen
                // crezca hasta el tamaño del 'div' padre que cambiaste.
                className="max-h-full w-auto object-contain" 
              />
            ) : (
              <span 
                // Si aumentas mucho la altura, quizás también
                // quieras aumentar el tamaño del texto (ej: text-3xl)
                className="text-2xl font-semibold uppercase tracking-widest text-white/70"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {client.name}
              </span>
            )}
          </div>
        ))}
      </Marquee>

    </section>
  );
};

export default ClientsSection;