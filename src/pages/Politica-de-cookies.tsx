import React from 'react';
import SEO from '@/components/SEO'; // IMPORTAR EL COMPONENTE SEO

const PoliticaDeCookies: React.FC = () => {
  return (
    <div className="app-grainy-background text-white min-h-screen">
      <SEO
        title="Política de Cookies"
        description="Esta política explica qué son las cookies, cómo las utilizamos en nuestro sitio web y cómo puedes gestionarlas."
        canonicalUrl="/politica-de-cookies"
      />
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Política de <span className="text-[#ff6600]">Cookies</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas.
            </p>
          </div>

          <div className="space-y-16 max-w-4xl mx-auto">
            <div className="bg-black p-8 md:p-10 rounded-2xl border border-white/10">
              <div className="space-y-6 text-white/80">
                
                <h3 className="text-xl font-semibold text-white">1. ¿Qué son las Cookies?</h3>
                <p>
                  Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, teléfono, tablet) mientras navegas. Estos archivos contienen información que permite al sitio recordar tus acciones y preferencias, como el inicio de sesión, el idioma o la configuración de visualización.
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">2. Tipos de Cookies que Utilizamos</h3>
                <p>
                  Utilizamos cookies propias y de terceros con diferentes fines, tal como se explica a continuación:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Cookies Estrictamente Necesarias (Técnicas):</strong> Son esenciales para que el sitio web funcione correctamente. Permiten funciones básicas como la navegación por la página y el acceso a áreas seguras.
                  </li>
                  <li>
                    <strong>Cookies de Rendimiento o Análisis:</strong> Nos permiten recopilar datos sobre cómo los visitantes utilizan nuestro sitio, como qué páginas visitan con más frecuencia o si encuentran errores. Utilizamos plataformas como Google Analytics para este fin, lo que nos ayuda a mejorar la experiencia del usuario y optimizar nuestros servicios.
                  </li>
                  <li>
                    <strong>Cookies de Publicidad y Marketing:</strong> Se utilizan para rastrear a los visitantes a través de los sitios web, con la intención de mostrar anuncios relevantes y atractivos para el usuario individual. Estas son las cookies utilizadas en plataformas de gestión de campañas como Meta Ads y Google Ads para medir la efectividad de nuestras estrategias de marketing digital.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white pt-4">3. Consentimiento y Gestión de Cookies</h3>
                <p>
                  Al visitar nuestro sitio, te solicitamos tu consentimiento para el uso de cookies no esenciales (análisis y marketing).
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Gestión por Navegador:</strong> Tienes la opción de configurar tu navegador para que te avise antes de aceptar cookies o para rechazarlas directamente. Sin embargo, desactivar las cookies estrictamente necesarias puede afectar la funcionalidad del sitio.
                  </li>
                  <li>
                    <strong>Retirar Consentimiento:</strong> Si ya has aceptado el uso de cookies y deseas cambiar tu configuración, puedes hacerlo en cualquier momento a través de la herramienta de gestión de cookies disponible en nuestro sitio (o mediante la configuración de tu navegador).
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white pt-4">4. Duración de las Cookies</h3>
                <p>
                  La duración de las cookies que utilizamos varía. Algunas son "cookies de sesión" que se eliminan automáticamente cuando cierras el navegador, mientras que otras son "cookies persistentes" que permanecen en tu dispositivo por un período específico.
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">5. Cambios a esta Política</h3>
                <p>
                  Podemos actualizar esta Política de Cookies periódicamente. Te recomendamos revisarla con regularidad para estar informado sobre cómo utilizamos las cookies.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaDeCookies;