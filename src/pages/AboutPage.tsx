import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { COMPANY_VALUES } from "@/utils/constants";
import type { Value } from "@/types/index";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import RotatingText from "@/components/RotatingText";

// Registrar el plugin de GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Animación para el bloque del encabezado
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

      // 2. Animación para las tarjetas de Misión y Visión
      gsap.from(".mission-vision-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".mission-vision-grid",
          start: "top 85%",
          once: true,
        },
      });

      // 3. Animación para las tarjetas de Valores
      gsap.from(".value-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="app-grainy-background text-white min-h-screen">
      <SEO
        title="Nuestra Filosofía"
        description="Conoce la misión, visión y valores de nuestra empresa de marketing digital."
        canonicalUrl="/nosotros"
      />
      
      <div ref={containerRef}>
        <header className="relative w-full h-[500px] md:h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 ">
          
          <div className="header-block text-center relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter inline-flex flex-wrap justify-center items-center gap-x-3">
              <span>Nuestra</span>
              
              <RotatingText
                texts={["Filosofía", "Misión", "Visión", "Ética"]}
                mainClassName="px-3 py-1 bg-[#ff6600] text-white overflow-hidden justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
                splitBy="characters"
              />
            </h1>
            
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Somos una empresa de marketing digital con un propósito claro:
              acelerar el desarrollo de empresas y emprendedores.
            </p>
          </div>
        </header>

        <div className="pb-20">
          <div className="container mx-auto px-6">
            
            <div className="mission-vision-grid grid md:grid-cols-2 gap-12 pt-20 md:pt-24 mb-20">
              <div className="mission-vision-card  p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold text-[#ff6600]">Misión</h2>
                <p className="mt-4 text-lg text-white/80">
                  Acelerar el desarrollo de empresas y emprendedores,
                  conectándolos con su mercado en el ámbito digital.
                </p>
              </div>
              <div className="mission-vision-card  p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold text-[#ff6600]">Visión</h2>
                <p className="mt-4 text-lg text-white/80">
                  Ser el medio de crecimiento empresarial, personal y social de
                  mayor posicionamiento en Latinoamérica, con una constante
                  adaptación a nuevos escenarios tecnológicos y estructuras de
                  negocio.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight value-card">
                Nuestras Éticas y Valores
              </h2>
            </div>
            
            {/* --- SECCIÓN DE VALORES ACTUALIZADA --- */}
            <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COMPANY_VALUES.map((value: Value) => {
                // 1. Obtenemos el componente del icono desde el objeto
                const IconComponent = value.icon;
                
                return (
                  <div
                    key={value.title}
                    // 2. Clases añadidas para centrar el contenido
                    className="value-card p-6 rounded-lg border border-white/10 hover:border-[#ff6600] transition-colors duration-300 flex flex-col items-center text-center"
                  >
                    {/* 3. Renderizamos el icono */}
                    <IconComponent className="text-4xl mb-4 text-[#ff6600]" />
                    
                    <h3 className="text-xl font-semibold text-[#ff6600]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-white/70">{value.description}</p>
                  </div>
                );
              })}
            </div>
            {/* --- FIN DE LA SECCIÓN ACTUALIZADA --- */}

          </div>
          
          {/* Sección de Contacto */}
          <div className="container mx-auto px-6 mt-20 md:mt-32">
            <ContactSection
              title="¿Interesado en nuestra filosofía?"
              subtitle="Hablemos de cómo nuestros valores pueden potenciar tu proyecto."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;