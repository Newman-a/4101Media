import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES_DATA } from "@/utils/constants";
import type { Service } from "@/types/index";
import ContactSection from "@/components/ContactSection"; // 1. IMPORTAR EL COMPONENTE DE CONTACTO
import SEO from "@/components/SEO"; // 2. IMPORTAR EL COMPONENTE SEO

gsap.registerPlugin(ScrollTrigger);

const ServicesPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Animación para el bloque del encabezado (se mantiene igual)
      gsap.from(".header-block", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".header-block",
          start: "top 85%",
          once: true,
        },
      });

      // --> 2. OPTIMIZACIÓN: Animación por lotes (batch) para las tarjetas
      // En lugar de un trigger por tarjeta, usamos un solo ScrollTrigger
      // para el contenedor y aplicamos 'stagger' a las tarjetas.
      gsap.from(".service-card", {
        // Apuntamos a TODAS las tarjetas
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // ¡Esta es la magia! Aplica un retraso de 0.2s entre cada tarjeta
        scrollTrigger: {
          trigger: ".services-container", // El trigger ahora es el CONTENEDOR de las tarjetas
          start: "top 80%", // Inicia cuando el CONTENEDOR esté al 80%
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (

    
    <div className="app-grainy-background text-white min-h-screen">
      <SEO
        title="Nuestros Servicios"
        description="Ofrecemos soluciones integrales para potenciar tu presencia y crecimiento en el entorno digital."
        canonicalUrl="/servicios"
      />
      <div ref={containerRef} className="pt-24 md:pt-32 pb-20 ">
        <div className="container mx-auto px-6">
          <div className="header-block text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Nuestros <span className="text-[#ff6600]">Servicios</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Ofrecemos soluciones integrales para potenciar tu presencia y
              crecimiento en el entorno digital.
            </p>
          </div>

          {/* El trigger de la animación por lotes apunta a este contenedor */}
          <div className="services-container space-y-16">
            {SERVICES_DATA.map((service: Service, index: number) => (
              <div
                key={service.title}
                className={`service-card rounded-2xl p-8 md:p-12 border border-white/10`}
              >
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div
                    className={`md:col-span-2 ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
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
