// src/pages/AcademyPage.tsx

import React from "react";
import { Link } from "react-router-dom"; // Importar Link
import { ACADEMY_COURSES } from "@/utils/constants";
import type { Course } from "@/types/index";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const AcademyPage: React.FC = () => {
  return (
    <div className=" text-white min-h-screen">
      <SEO
        title="Academia 4101"
        description="Aprende de profesionales con nuestros cursos y talleres sobre producción audiovisual, marketing digital y desarrollo web."
        canonicalUrl="/academia"
      />

      <div>
        <header className="relative w-full h-[500px] md:h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 f-homepage-new">
          <AnimateOnScroll className="text-center relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter inline-flex flex-wrap justify-center items-center gap-x-3">
              <span>Nuestra </span>
              <span className="text-[#ff6600]">Academia</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Cursos y talleres diseñados para potenciar tus habilidades
              digitales. Aprende de la mano de expertos en la industria.
            </p>
          </AnimateOnScroll>
        </header>

        <div className="pb-20">
          <div className="container mx-auto px-6">
            
            {/* Título de la sección */}
            <AnimateOnScroll className="text-center mb-16 pt-20 md:pt-24">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Próximos Cursos y Talleres
              </h2>
            </AnimateOnScroll>
            
            {/* Grid de Cursos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {ACADEMY_COURSES.map((course: Course, index: number) => {
                const IconComponent = course.icon;

                return (
                  <AnimateOnScroll
                    key={course.title}
                    delay={index * 150} // Stagger de 150ms
                    // Contenedor de la tarjeta
                    className="p-8 rounded-2xl border border-white/10 bg-[#181818] shadow-lg flex flex-col h-full"
                  >
                    {/* Contenido de la tarjeta */}
                    <div className="flex flex-col flex-grow">
                      <IconComponent className="text-4xl mb-5 text-[#ff6600]" />
                      <h3 className="text-2xl font-bold text-[#ff6600] mb-3">
                        {course.title}
                      </h3>
                      <p className="text-white/80 flex-grow">
                        {course.description}
                      </p>
                    </div>

                    {/* Botón de acción */}
                    <div className="mt-6">
                      <Link
                        to="/contacto"
                        className="inline-block w-full text-center bg-[#ff6600] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#e65c00] transition-all duration-300 transform hover:scale-105"
                      >
                        Pedir más información
                      </Link>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {/* Sección de Contacto */}
          <div className="container mx-auto px-6 mt-20 md:mt-32">
            <ContactSection
              title="¿Interesado en un curso?"
              subtitle="Escríbenos para conocer fechas, precios y detalles de inscripción. ¡Tu carrera digital empieza aquí!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyPage;