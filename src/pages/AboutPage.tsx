import React from "react";
// import { gsap } from "gsap"; // <--- Adiós GSAP
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // <--- Adiós
// import { useGSAP } from "@gsap/react"; // <--- Adiós
import { COMPANY_VALUES } from "@/utils/constants";
import type { Value } from "@/types/index";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import RotatingText from "@/components/RotatingText";
import AnimateOnScroll from "@/components/AnimateOnScroll"; // <--- ¡Hola!

// gsap.registerPlugin(ScrollTrigger); // <--- Adiós

const AboutPage: React.FC = () => {
  // const containerRef = useRef<HTMLDivElement>(null); // <--- Adiós
  // useGSAP( ... ); // <--- Adiós a todo el hook

  return (
    <div className=" text-white min-h-screen">
      <SEO
        title="Nuestra Filosofía"
        description="Conoce la misión, visión y valores de nuestra empresa de marketing digital."
        canonicalUrl="/nosotros"
      />

      {/* No necesitamos el 'ref' aquí */}
      <div>
        <header className="relative w-full h-[500px] md:h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 f-homepage-new">
          
          {/* 1. Usamos el wrapper en el header-block */}
          <AnimateOnScroll className="text-center relative z-10 px-6">
            <div className="header-block"> {/* Mantenemos la clase por si acaso */}
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter inline-flex flex-wrap justify-center items-center gap-x-3">
                <span>Nuestra </span>
                <span className="text-[#ff6600]">Filosofia</span>
              </h1>

              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Somos una empresa de marketing digital con un propósito claro:
                acelerar el desarrollo de empresas y emprendedores.
              </p>
            </div>
          </AnimateOnScroll>

        </header>

        <div className="pb-20">
          <div className="container mx-auto px-6">
            <div className="mission-vision-grid grid md:grid-cols-2 gap-12 pt-20 md:pt-24 mb-20">
              
              {/* 2. Usamos el wrapper en Misión */}
              <AnimateOnScroll className="p-8 rounded-2xl border border-white/10 bg-[#171717]">
                <h2 className="text-3xl font-bold text-[#ff6600]">Misión</h2>
                <p className="mt-4 text-lg text-white/80">
                  Acelerar el desarrollo de empresas y emprendedores,
                  conectándolos con su mercado en el ámbito digital.
                </p>
              </AnimateOnScroll>
              
              {/* 3. Usamos el wrapper en Visión (con delay para 'stagger') */}
              <AnimateOnScroll
                delay={200} // delay de 200ms
                className="p-8 rounded-2xl border border-white/10 bg-[#171717]"
              >
                <h2 className="text-3xl font-bold text-[#ff6600] ">Visión</h2>
                <p className="mt-4 text-lg text-white/80">
                  Ser el medio de crecimiento empresarial, personal y social de
                  mayor posicionamiento en Latinoamérica...
                </p>
              </AnimateOnScroll>

            </div>

            {/* Values */}
            <div className="text-center mb-12">
              {/* 4. Usamos el wrapper en el título de Valores */}
              <AnimateOnScroll>
                <h2 className="text-4xl font-bold tracking-tight">
                  Nuestras Éticas y Valores
                </h2>
              </AnimateOnScroll>
            </div>

            <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COMPANY_VALUES.map((value: Value, index: number) => {
                const IconComponent = value.icon;

                return (
                  // 5. Usamos el wrapper DENTRO del .map()
                  //    Usamos el 'index' para crear un 'stagger' dinámico
                  <AnimateOnScroll
                    key={value.title}
                    delay={index * 150} // 0ms, 150ms, 300ms, etc.
                    className="p-6 rounded-lg border border-white/10 hover:border-[#ff6600] bg-[#171717] transition-colors duration-300 flex flex-col items-center text-center"
                  >
                    <IconComponent className="text-4xl mb-4 text-[#ff6600]" />
                    <h3 className="text-xl font-semibold text-[#ff6600]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-white/70">{value.description}</p>
                  </AnimateOnScroll>
                );
              })}
            </div>
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