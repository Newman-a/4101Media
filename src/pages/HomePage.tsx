// src/pages/HomePage.tsx

import React, { lazy, Suspense } from 'react';

// =============================================================
// 1. IMPORTACIÓN ESTÁTICA (CRÍTICA)
// El HeroSection debe cargarse inmediatamente para la métrica LCP (Largest Contentful Paint).
import HeroSection from '@/components/HomePage/HeroSection';

// =============================================================
// 2. IMPORTACIONES DINÁMICAS (LAZY LOADING)
// Los componentes de abajo se importan dinámicamente. Esto evita que sus dependencias (como framer-motion o grandes archivos JS)
// se carguen con la carga inicial de la página.

const StatsSection = lazy(() => import('@/components/HomePage/StatsSection'));
const ClientsSection = lazy(() => import('@/components/HomePage/ClientsSection'));
const AboutSection = lazy(() => import('@/components/HomePage/AboutSection'));
const ServicesHighlightSection = lazy(() => import('@/components/HomePage/ServicesHighlightSection'));
const ContactSection = lazy(() => import('@/components/ContactSection')); 

// =============================================================
// 3. FALLBACK (Lo que se muestra mientras se carga el componente)
// Es crucial usar un fallback que sea ligero y que mantenga la estructura visual.
const SectionFallback: React.FC = () => (
    // Usa estilos ligeros y animaciones CSS simples. 
    // Un 'skeleton loader' o un espacio con altura fija es ideal.
    <div className="min-h-[300px] w-full bg-gray-900 animate-pulse flex items-center justify-center text-gray-500">
        Cargando sección...
    </div>
);


const HomePage: React.FC = () => {
    return (
        <div className=" text-white">
            
            {/* ------------------------------------------------------------------ */}
            {/* 1. SECCIÓN CRÍTICA: Se carga de inmediato */}
            <HeroSection />
            
            {/* ------------------------------------------------------------------ */}
            {/* 2. SECCIONES SECUNDARIAS: Usan Suspense y Lazy Loading */}

            {/* StatsSection es el más importante de cargar de forma perezosa por la dependencia de 'framer-motion' */}
            <Suspense fallback={<SectionFallback />}>
                <StatsSection />
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
                <ClientsSection />
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
                <AboutSection />
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
                <ServicesHighlightSection />
            </Suspense>

            {/* <Suspense fallback={<SectionFallback />}>
                <PortfolioHighlightSection />
            </Suspense> */}

            {/* ------------------------------------------------------------------ */}
            {/* 3. SECCIÓN DE CONTACTO: Se carga de forma perezosa */}
            <div className="py-20 md:py-32 app-grainy-background ">
                <div className="container mx-auto px-6 ">
                    <Suspense fallback={<SectionFallback />}>
                        <ContactSection 
                            title="Inicia tu Próximo Gran Proyecto"
                            subtitle="Nos encantaría escuchar sobre tus ideas y ayudarte a hacerlas realidad. Contáctanos para empezar."
                        />
                    </Suspense>
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;