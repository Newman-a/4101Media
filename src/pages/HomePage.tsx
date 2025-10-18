// src/pages/HomePage.tsx

import React, { lazy, Suspense } from 'react';

// =======================================================
// 1. IMPORTACIONES CRÍTICAS (Se cargan inmediatamente)
// =======================================================
// Estos componentes suelen ser críticos para el LCP (Largest Contentful Paint)
import HeroSection from '@/components/HomePage/HeroSection';


// =======================================================
// 2. IMPORTACIONES LAZY (Se cargan solo cuando son necesarias)
// =======================================================
// Estos componentes son candidatos ideales para carga diferida, 
// ya que arrastran librerías grandes (como framer-motion) o están fuera del viewport inicial.

const LazyStatsSection = lazy(() => import('@/components/HomePage/StatsSection'));
const LazyClientsSection = lazy(() => import('@/components/HomePage/ClientsSection'));
const LazyAboutSection = lazy(() => import('@/components/HomePage/AboutSection'));
const LazyServicesHighlightSection = lazy(() => import('@/components/HomePage/ServicesHighlightSection'));
const LazyContactSection = lazy(() => import('@/components/ContactSection'));


const HomePage: React.FC = () => {
  return (
    <div className=" text-white">
      
      {/* ------------------------------------------- */}
      {/* SECCIÓN CRÍTICA: Se carga de inmediato */}
      {/* ------------------------------------------- */}
      <HeroSection />

      {/* ------------------------------------------- */}
      {/* SECCIONES NO CRÍTICAS: Aplicamos Suspense y Lazy */}
      {/* ------------------------------------------- */}

      {/* * Suspense envuelve la sección y muestra un 'fallback' mientras el bundle de JS
        * de LazyStatsSection (que incluye framer-motion.js) se descarga.
      */}
      <Suspense fallback={<div className="h-20 flex items-center justify-center">Cargando estadísticas...</div>}>
        <LazyStatsSection />
      </Suspense>

      {/* Agrupamos las demás secciones que suelen estar fuera de la vista */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Cargando secciones adicionales...</div>}>
        <LazyClientsSection />
        <LazyAboutSection />
        <LazyServicesHighlightSection />
        {/* <PortfolioHighlightSection /> */}

        {/* Sección de Contacto Diferida */}
        <div className="py-20 md:py-32 app-grainy-background ">
          <div className="container mx-auto px-6 ">
            <LazyContactSection 
              title="Inicia tu Próximo Gran Proyecto"
              subtitle="Nos encantaría escuchar sobre tus ideas y ayudarte a hacerlas realidad. Contáctanos para empezar."
            />
          </div>
        </div>
      </Suspense>
      
    </div>
  );
};

export default HomePage;