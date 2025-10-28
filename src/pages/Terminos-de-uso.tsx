import React from 'react';
import SEO from '@/components/SEO'; // IMPORTAR EL COMPONENTE SEO

const TerminosDeUso: React.FC = () => {
  return (
    <div className="app-grainy-background text-white min-h-screen">
      <SEO
        title="Términos de Uso"
        description="Al acceder y utilizar este sitio web, aceptas y te comprometes a cumplir con los siguientes términos y condiciones."
        canonicalUrl="/terminos-de-uso"
      />
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Términos de <span className="text-[#ff6600]">Uso</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Al acceder y utilizar este sitio web, aceptas y te comprometes a cumplir con los siguientes términos y condiciones.
            </p>
          </div>

          <div className="space-y-16 max-w-4xl mx-auto">
            <div className="bg-black p-8 md:p-10 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-[#ff6600] mb-6">Términos y Condiciones</h2>
              <div className="space-y-4 text-white/80">
                <h3 className="text-xl font-semibold text-white">1. Aceptación de los Términos</h3>
                <p>
                  El usuario reconoce y acepta los términos y condiciones descritos a continuación al navegar y utilizar este sitio web. Así mismo, acepta nuestra Política de Privacidad. Si no está de acuerdo con estos términos, debe abstenerse de utilizar nuestros servicios y este sitio.
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">2. Propiedad Intelectual</h3>
                <p>
                  <strong>4101 media</strong> es titular de los Derechos de Autor (copyright) de todo el contenido de este sitio, incluyendo textos, producciones audiovisuales, imágenes, estrategias y gráficos[cite: 1, 2]. El usuario reconoce que no puede utilizar, reproducir o distribuir esta información para su beneficio sin la autorización expresa y por escrito de <strong>4101 media</strong>. Esto constituye una violación de nuestros derechos de propiedad intelectual y nos reservamos el derecho de tomar las acciones legales correspondientes.
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">3. Uso del Sitio Web</h3>
                <p>
                  El usuario se compromete a utilizar este sitio web únicamente con fines lícitos y de una manera que no infrinja los derechos, ni restrinja o inhiba el uso y disfrute de este por parte de terceros.
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">4. Legislación Aplicable y Jurisdicción</h3>
                <p>
                  El usuario reconoce que este sitio web está sometido a la legislación vigente en la <strong>República Bolivariana de Venezuela</strong>. Si el usuario accede desde un territorio fuera de Venezuela, reconoce que <strong>4101 media</strong> solo se hace responsable de dar cumplimiento a las leyes aplicables dentro del territorio venezolano.
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">5. Limitación de Responsabilidad</h3>
                <p>
                  La navegación en este sitio web es bajo el propio riesgo del usuario. Ni <strong>4101 media</strong>, ni sus socios, ni el personal serán responsables por daño alguno que pueda derivarse del uso del sitio web o de los enlaces a sitios de terceros.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TerminosDeUso;