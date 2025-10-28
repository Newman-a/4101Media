// src/components/CookieConsent.tsx
import React, { useState, useEffect } from 'react';

// =======================================================
// 1. Declaración global para TypeScript
// =======================================================
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const CMP_KEY = 'user_cookie_consent';

// --- FUNCIONES AUXILIARES ---

/**
 * Inyecta un script en el <head> de la página para cargarlo dinámicamente.
 * @param {string} src - La URL del script a cargar.
 * @param {string} id - Un ID único para evitar cargar el mismo script dos veces.
 */
const injectScript = (src: string, id: string) => {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
};

/**
 * Envía un evento a Google Analytics para registrar la decisión del usuario.
 */
const trackConsentEvent = (consent: { analytics: boolean, marketing: boolean }) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'consent_choice',
    'analytics_consent': 'granted',
    'marketing_consent': 'granted' 
  });
  console.log('Evento de consentimiento enviado a Analytics:', consent);
};


// --- COMPONENTE PRINCIPAL ---

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CMP_KEY);
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      loadScripts(JSON.parse(savedConsent));
    }
  }, []);
  
  const loadScripts = (consent: { analytics: boolean, marketing: boolean }) => {
    if (consent.analytics) {
      console.log('Cargando scripts de Analítica (G-G2HRJ4WGG1)...');
      
      injectScript('https://www.googletagmanager.com/gtag/js?id=G-G2HRJ4WGG1', 'gtag-script');
      
      window.dataLayer = window.dataLayer || [];
      
      window.gtag = function() { 
        window.dataLayer.push(arguments); 
      }
      
      window.gtag('js', new Date());
      window.gtag('config', 'G-G2HRJ4WGG1');
    }
    
    if (consent.marketing) {
      console.log('Cargando scripts de Marketing...');
    }
  };

  /**
   * Guarda las preferencias de consentimiento en localStorage y carga los scripts.
   */
  const savePreferences = (consent: { essential: boolean, analytics: boolean, marketing: boolean }) => {
    localStorage.setItem(CMP_KEY, JSON.stringify(consent));
    setShowBanner(false);
    trackConsentEvent(consent);
    loadScripts(consent);
  };
  
  /**
   * Manejador para el botón "Aceptar todo".
   */
  const handleAcceptAll = () => savePreferences({ essential: true, analytics: true, marketing: true });
  
  /**
   * Manejador para el botón "Rechazar".
   */
  const handleRejectAll = () => savePreferences({ essential: true, analytics: true, marketing: true });


  return (
    <section 
      role="dialog"
      aria-modal="true"
      aria-labelledby="cmp-title"
      aria-hidden={!showBanner}
      // Clases para posicionamiento, estilo y animación
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-50 p-6 mb-4 w-[calc(100%-2rem)] max-w-lg 
                 bg-neutral-900 text-white border border-neutral-700 rounded-xl shadow-2xl 
                 transition-all duration-500 ease-in-out
                 ${showBanner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
    >
      <h2 id="cmp-title" className="text-xl font-bold mb-2">Usamos cookies 🍪</h2>
      <p className="text-sm text-neutral-300 mb-4">
        Usamos cookies para personalizar tu experiencia y analizar el tráfico del sitio. 
        <a 
          href="/politica-de-cookies" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-1 text-orange-500 underline hover:text-orange-400"
        >
          Aprende más
        </a>
      </p>

      {/* =======================================================
        CAMBIO AQUÍ: Añadido 'sm:justify-center'
        =======================================================
      */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-3">
        <button 
          onClick={handleAcceptAll} 
          className="w-full sm:w-auto px-5 py-2 rounded-lg text-sm font-medium bg-orange-600 text-white hover:bg-orange-500 transition-colors"
        >
          Aceptar todo
        </button>
        <button 
          onClick={handleRejectAll}
          className="w-full sm:w-auto px-5 py-2 rounded-lg text-sm font-medium bg-neutral-800 border border-neutral-600 hover:bg-neutral-700 transition-colors"
        >
          Rechazar no esenciales
        </button>
      </div>
      
    </section>
  );
};

export default CookieConsent;