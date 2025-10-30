import React, { lazy, Suspense } from "react";
import HeroSection from "@/components/HomePage/HeroSection";

const LazyStatsSection = lazy(
  () => import("@/components/HomePage/StatsSection")
);
const LazyClientsSection = lazy(
  () => import("@/components/HomePage/ClientsSection")
);
const LazyAboutSection = lazy(
  () => import("@/components/HomePage/AboutSection")
);
const LazyServicesHighlightSection = lazy(
  () => import("@/components/HomePage/ServicesHighlightSection")
);
const LazyContactSection = lazy(() => import("@/components/ContactSection"));
import SEO from "@/components/SEO"; // 1. IMPORTAR EL COMPONENTE SEO

const PortfolioHighlightSection = lazy(
  () => import("@/components/HomePage/PortfolioHighlightSection")
);


const HomePage: React.FC = () => {
  return (
    <div className="text-white">
      {/* 2. COLOCAR EL COMPONENTE AQUÍ ARRIBA */}
      <SEO
        title="Agencia de Marketing Digital y Desarrollo Web"
        description="Potenciamos empresas y emprendedores con marketing digital, diseño y desarrollo web."
        canonicalUrl="/"
      />
      <HeroSection />

      {/* ---------------------------------------------------- */}
      {/* B. CONTENIDO RESTANTE (CON FONDO GRANULADO) */}
      {/* Se aplica la clase de fondo a este nuevo contenedor. */}
      {/* ---------------------------------------------------- */}
      <div className="]">
        <Suspense
          fallback={
            <div className="h-20 flex items-center justify-center">
              Cargando estadísticas...
            </div>
          }
        >
          <LazyStatsSection />
        </Suspense>

        {/* Agrupamos las demás secciones que suelen estar fuera de la vista */}
        <Suspense
          fallback={
            <div className="h-40 flex items-center justify-center">
              Cargando secciones adicionales...
            </div>
          }
        >
          <LazyClientsSection />
          <LazyAboutSection />
          <LazyServicesHighlightSection />
          <PortfolioHighlightSection />

          {/* Sección de Contacto Diferida */}
          <div className="py-20 md:py-32">
            <div className="container mx-auto px-6 ">
              <LazyContactSection
                title="Inicia tu Próximo Gran Proyecto"
                subtitle="Nos encantaría escuchar sobre tus ideas y ayudarte a hacerlas realidad. Contáctanos para empezar."
              />
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
