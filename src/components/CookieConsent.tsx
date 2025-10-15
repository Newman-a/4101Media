// src/components/CookieConsent.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  if (typeof window.dataLayer === 'undefined') {
    (window as any).dataLayer = [];
  }
  (window as any).dataLayer.push({
    'event': 'consent_choice',
    'analytics_consent': consent.analytics ? 'granted' : 'denied',
    'marketing_consent': consent.marketing ? 'granted' : 'denied'
  });
  console.log('Evento de consentimiento enviado a Analytics:', consent);
};


// --- COMPONENTE PRINCIPAL ---

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showManage, setShowManage] = useState(false);
  
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

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
      console.log('Cargando scripts de Analítica...');
      // Reemplaza GTM-XXXXXX con tu ID de Google Tag Manager
      // injectScript('https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXX', 'gtm-script');
    }
    if (consent.marketing) {
      console.log('Cargando scripts de Marketing...');
      // Reemplaza YOUR-PIXEL-ID con tu ID de Meta Pixel
      // injectScript('https://connect.facebook.net/en_US/fbevents.js', 'meta-pixel-script');
    }
  };

  const savePreferences = (consent: { essential: boolean, analytics: boolean, marketing: boolean }) => {
    localStorage.setItem(CMP_KEY, JSON.stringify(consent));
    setShowBanner(false);
    trackConsentEvent(consent);
    loadScripts(consent);
  };
  
  const handleAcceptAll = () => savePreferences({ essential: true, analytics: true, marketing: true });
  const handleRejectAll = () => savePreferences({ essential: true, analytics: false, marketing: false });
  const handleSave = () => savePreferences({ essential: true, analytics: analyticsConsent, marketing: marketingConsent });

  return (
    <section 
      role="dialog"
      aria-modal="true"
      aria-labelledby="cmp-title"
      aria-hidden={!showBanner}
      // Clases para posicionamiento, estilo y animación con Tailwind
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-50 p-6 mb-4 w-[calc(100%-2rem)] max-w-lg 
                 bg-neutral-900 text-white border border-neutral-700 rounded-xl shadow-2xl 
                 transition-all duration-500 ease-in-out
                 ${showBanner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
    >
      <h2 id="cmp-title" className="text-xl font-bold mb-2">Usamos cookies 🍪</h2>
      <p className="text-sm text-neutral-300 mb-4">
        Usamos cookies para personalizar tu experiencia y analizar el tráfico del sitio. 
        <a 
    href="/politicaDePrivacidad" 
    target="_blank" 
    rel="noopener noreferrer"
    className="ml-1 text-orange-500 underline hover:text-orange-400"
  >
    Aprende más
  </a>
      </p>

      {/* Acciones principales */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
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
        <button 
          onClick={() => setShowManage(!showManage)} 
          className="w-full sm:w-auto px-5 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:bg-neutral-800 transition-colors"
        >
          Gestionar
        </button>
      </div>
      
      {/* Panel para gestionar preferencias */}
      {showManage && (
        <div className="mt-4 pt-4 border-t border-neutral-800 space-y-3">
          {/* Fila Esenciales */}
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">Esenciales</div>
              <div className="text-xs text-neutral-400">Requeridas para que el sitio funcione.</div>
            </div>
            <label className="relative inline-flex items-center cursor-not-allowed">
              <input type="checkbox" className="sr-only" checked disabled />
              <div className="w-11 h-6 bg-neutral-700 rounded-full"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-neutral-400 rounded-full"></div>
            </label>
          </div>

          {/* Fila Analíticas */}
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">Analíticas</div>
              <div className="text-xs text-neutral-400">Ayudan a medir el tráfico y rendimiento.</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={analyticsConsent} onChange={(e) => setAnalyticsConsent(e.target.checked)} />
              <div className="w-11 h-6 bg-neutral-600 rounded-full peer-checked:bg-orange-600 transition-colors"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
            </label>
          </div>

          {/* Fila Marketing */}
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">Marketing</div>
              <div className="text-xs text-neutral-400">Para publicidad y contenido relevante.</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={marketingConsent} onChange={(e) => setMarketingConsent(e.target.checked)} />
              <div className="w-11 h-6 bg-neutral-600 rounded-full peer-checked:bg-orange-600 transition-colors"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
            </label>
          </div>

          <div className="pt-2">
            <button 
              onClick={handleSave} 
              className="w-full px-5 py-2 rounded-lg text-sm font-medium bg-neutral-800 border border-neutral-600 hover:bg-neutral-700 transition-colors"
            >
              Guardar selección
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CookieConsent;