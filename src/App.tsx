// src/App.tsx

import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";

// Componente 404: Debes crearlo en src/pages/NotFoundPage.tsx
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const TeamPage = lazy(() => import("@/pages/TeamPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const TerminosDeUso = lazy(() => import("@/pages/Terminos-de-uso"));
const PoliticaDePrivacidad = lazy(
  () => import("@/pages/Politica-de-privacidad")
);
const PoliticaDeCookies = lazy(() => import("@/pages/Politica-de-cookies"));
const AcademyPage = lazy(() => import("@/pages/AcademyPage")); // <-- AÑADIR ESTA LÍNEA

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Componente visual MODIFICADO para mostrar el spinner y el texto.
const LoadingFallback = () => (
  // Contenedor principal: Centra vertical y horizontalmente en la pantalla (h-screen, items-center, justify-center)
  <div className="flex h-screen w-full items-center justify-center bg-black">
    {/* Contenedor Flex para el Spinner y el Texto */}
    {/* Usamos 'flex' y 'flex-col' para apilarlos verticalmente, y 'gap-4' para separarlos */}
    <div className="flex flex-col items-center gap-4">
      {/* Spinner SVG */}
      <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-[#ff6600]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="#ff6600"
          />
        </svg>
      </div>

      {/* Texto de Carga */}
      <p className="text-white text-xl">Cargando...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-black">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/equipo" element={<TeamPage />} />
            <Route path="/porfolio" element={<PortfolioPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/Terminos-de-uso" element={<TerminosDeUso />} />
            <Route
              path="/Politica-de-privacidad"
              element={<PoliticaDePrivacidad />}
            />
            <Route
              path="/Politica-de-cookies"
              element={<PoliticaDeCookies />}
            />
            <Route path="/academia" element={<AcademyPage />} /> {/* <-- AÑADIR ESTA LÍNEA */}

            {/* 💡 RUTA DE CAPTURA 404: Debe ser la última ruta. */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;
