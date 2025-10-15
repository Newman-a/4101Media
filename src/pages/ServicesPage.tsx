import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SERVICES_DATA } from '@/utils/constants';
import type { Service } from '@/types/index';
import ContactSection from '@/components/ContactSection'; // 1. IMPORTAR EL COMPONENTE DE CONTACTO

gsap.registerPlugin(ScrollTrigger);

const ServicesPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animación para el bloque del encabezado (se mantiene igual)
    gsap.from('.header-block', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.header-block',
        start: 'top 85%',
        once: true,
      }
    });

    // --> 2. CAMBIO: Animación individual para cada tarjeta de servicio
    // En lugar de animarlas todas a la vez, recorremos cada tarjeta
    // y le asignamos su propio ScrollTrigger.
    gsap.utils.toArray('.service-card').forEach(card => {
      gsap.from(card as Element, {
        opacity: 0,
        y: 50,
        duration: 0.8, // Una duración un poco más corta puede sentirse mejor
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card as Element, // El trigger ahora es la propia tarjeta
          start: 'top 85%',
          once: true,
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div className="app-grainy-background text-white min-h-screen">
      <div ref={containerRef} className="pt-24 md:pt-32 pb-20 ">
        <div className="container mx-auto px-6">
          
          <div className="header-block text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Nuestros <span className="text-[#ff6600]">Servicios</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Ofrecemos soluciones integrales para potenciar tu presencia y crecimiento en el entorno digital.
            </p>
          </div>

          <div className="services-container space-y-16">
            {SERVICES_DATA.map((service: Service, index: number) => (
              <div key={service.title} className={`service-card bg-black rounded-2xl p-8 md:p-12 border border-white/10`}>
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                     <h2 className="text-3xl font-bold text-[#ff6600] mb-4">{service.title}</h2>
                     <p className="text-white/80">{service.description}</p>
                  </div>
                  <div className={`md:col-span-3 flex ${index % 2 === 0 ? 'md:order-2 justify-end' : 'md:order-1 justify-start'}`}>
                    <div className="space-y-6">
                      {service.steps.map(step => (
                        <div key={step.name}>
                          <h3 className="text-xl font-semibold text-white">{step.name}</h3>
                          <ul className="mt-2 list-disc list-inside text-white/70 space-y-1">
                            {step.details.map(detail => <li key={detail}>{detail}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
         {/* 2. AÑADE LA SECCIÓN DE CONTACTO AL FINAL */}
        <div className="container mx-auto px-6 mt-20 md:mt-32">
          <ContactSection 
            title="¿Listo para potenciar tu marca?"
            subtitle="Cuéntanos tu idea y descubre cómo nuestros servicios pueden llevar tu proyecto al siguiente nivel."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;