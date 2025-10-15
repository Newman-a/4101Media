import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { COMPANY_VALUES } from '@/utils/constants';
import type { Value } from '@/types/index';
import ContactSection from '@/components/ContactSection'; // 1. IMPORTAR EL COMPONENTE DE CONTACTO

// Registrar el plugin de GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animación para el bloque del encabezado
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

    // 2. Animación para las tarjetas de Misión y Visión
    gsap.from('.mission-vision-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2, // Anima una después de la otra
      scrollTrigger: {
        trigger: '.mission-vision-grid',
        start: 'top 85%',
        once: true,
      }
    });

    // 3. Animación para las tarjetas de Valores
    gsap.from('.value-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15, // Un stagger más rápido para más tarjetas
      scrollTrigger: {
        trigger: '.values-grid',
        start: 'top 85%',
        once: true,
      }
    });

  }, { scope: containerRef });

  return (
    <div className="app-grainy-background text-white min-h-screen">
      {/* Añadimos la ref principal para el scope de GSAP */}
      <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Header - Añadimos una clase para seleccionarlo */}
          <div className="header-block text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Nuestra <span className="text-[#ff6600]">Filosofía</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Somos una empresa de marketing digital con un propósito claro: acelerar el desarrollo de empresas y emprendedores.
            </p>
          </div>

          {/* Mission and Vision - Añadimos clases para seleccionar el grid y las tarjetas */}
          <div className="mission-vision-grid grid md:grid-cols-2 gap-12 mb-20">
            <div className="mission-vision-card  p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-[#ff6600]">Misión</h2>
              <p className="mt-4 text-lg text-white/80">
                Acelerar el desarrollo de empresas y emprendedores, conectándolos con su mercado en el ámbito digital.
              </p>
            </div>
            <div className="mission-vision-card  p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-[#ff6600]">Visión</h2>
              <p className="mt-4 text-lg text-white/80">
                Ser el medio de crecimiento empresarial, personal y social de mayor posicionamiento en Latinoamérica, con una constante adaptación a nuevos escenarios tecnológicos y estructuras de negocio.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight value-card">Nuestros Valores</h2>
          </div>
          {/* Añadimos clases para seleccionar el grid y las tarjetas */}
          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_VALUES.map((value: Value) => (
              <div key={value.title} className="value-card p-6 rounded-lg border border-white/10 hover:border-[#ff6600] transition-colors duration-300">
                <h3 className="text-xl font-semibold text-[#ff6600]">{value.title}</h3>
                <p className="mt-2 text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* 2. AÑADE LA SECCIÓN DE CONTACTO AL FINAL */}
        <div className="container mx-auto px-6 mt-20 md:mt-32">
          <ContactSection 
            title="¿Interesado en nuestra filosofía?"
            subtitle="Hablemos de cómo nuestros valores pueden potenciar tu proyecto."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;