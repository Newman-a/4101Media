import React from "react";
// import { useRef } from "react"; // <--- Adiós
// import { gsap } from "gsap"; // <--- Adiós
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // <--- Adiós
// import { useGSAP } from "@gsap/react"; // <--- Adiós
import { SERVICES_DATA } from "@/utils/constants";
import type { Service } from "@/types/index";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import AnimateOnScroll from "@/components/AnimateOnScroll"; // <--- ¡Hola!

// gsap.registerPlugin(ScrollTrigger); // <--- Adiós

const ServicesPage: React.FC = () => {
  // const containerRef = useRef<HTMLDivElement>(null); // <--- Adiós
  // useGSAP( ... ); // <--- Adiós a todo el hook

  return (
    <div className=" text-white min-h-screen ">
      <SEO
        title="Nuestros Servicios"
        description="Ofrecemos soluciones integrales para potenciar tu presencia y crecimiento en el entorno digital."
        canonicalUrl="/servicios"
      />

      {/* <div ref={containerRef}> // <--- Adiós al 'ref' */}
      <div className="">
        <header className="relative w-full h-[500px] md:h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 f-homepage-new">
          
          {/* 1. Reemplazamos el 'div' del header con 'AnimateOnScroll' */}
          <AnimateOnScroll className="header-block text-center relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Nuestros <span className="text-[#ff6600]">Servicios</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Ofrecemos soluciones integrales para potenciar tu presencia y
              crecimiento en el entorno digital.
            </p>
          </AnimateOnScroll>
        </header>

        <div className="pb-20 ">
          <div className="container mx-auto px-6">
            <div className="services-container space-y-16 pt-20 md:pt-24">
              
              {SERVICES_DATA.map((service: Service, index: number) => {
                const IconComponent = service.icon;

                return (
                  // 2. Reemplazamos el 'div' de la tarjeta por 'AnimateOnScroll'
                  //    Añadimos el 'delay' para replicar el 'stagger: 0.2'
                  <AnimateOnScroll
                    key={service.title}
                    delay={index * 200} // stagger: 0.2s = 200ms
                    className={`service-card rounded-2xl p-8 md:p-12 border border-white/10 bg-[#171717]`}
                  >
                    <div className="grid md:grid-cols-5 gap-8 items-start ">
                      <div
                        className={`md:col-span-2 ${
                          index % 2 === 0 ? "md:order-1" : "md:order-2"
                        }`}
                      >
                        <IconComponent className="text-5xl mb-4 text-[#ff6600]" />
                        <h2 className="text-3xl font-bold text-[#ff6600] mb-4">
                          {service.title}
                        </h2>
                        <p className="text-white/80">{service.description}</p>
                      </div>
                      <div
                        className={`md:col-span-3 flex ${
                          index % 2 === 0
                            ? "md:order-2 justify-end"
                            : "md:order-1 justify-start"
                        }`}
                      >
                        <div className="space-y-6">
                          {service.steps.map((step) => (
                            <div key={step.name}>
                              <h3 className="text-xl font-semibold text-white">
                                {step.name}
                              </h3>
                              <ul className="mt-2 list-disc list-inside text-white/70 space-y-1">
                                {step.details.map((detail) => (
                                  <li key={detail}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
              
            </div>
          </div>

          {/* --- Sección de Contacto --- */}
          <div className="container mx-auto px-6 mt-20 md:mt-32">
            <ContactSection
              title="¿Listo para potenciar tu marca?"
              subtitle="Cuéntanos tu idea y descubre cómo nuestros servicios pueden llevar tu proyecto al siguiente nivel."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;