import React from 'react';

const LegalPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Encabezado de la Página */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Términos <span className="text-[#ff6600]">Legales</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Aquí encontrarás toda la información sobre nuestros términos de uso y política de privacidad.
            </p>
          </div>

          {/* Contenedor Principal de Contenido Legal */}
          <div className="space-y-16 max-w-4xl mx-auto">

            {/* Sección de Términos de Uso */}
            <div className="bg-black p-8 md:p-10 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-[#ff6600] mb-6">Términos de Uso</h2>
              <div className="space-y-4 text-white/80">
                <h3 className="text-xl font-semibold text-white">1. Aceptación de los Términos</h3>
                <p>
                  Al acceder y utilizar este sitio web, aceptas y te comprometes a cumplir con los términos y condiciones descritos en este documento. Si no estás de acuerdo con alguna parte de los términos, no podrás utilizar nuestros servicios.
                </p>
                <h3 className="text-xl font-semibold text-white pt-4">2. Uso del Sitio Web</h3>
                <p>
                  Te comprometes a utilizar este sitio web únicamente con fines lícitos y de una manera que no infrinja los derechos, ni restrinja o inhiba el uso y disfrute de este sitio por parte de terceros.
                </p>
                 <h3 className="text-xl font-semibold text-white pt-4">3. Propiedad Intelectual</h3>
                <p>
                  Todo el contenido presente en este sitio, incluyendo textos, gráficos, logos e imágenes, es de nuestra propiedad o de nuestros licenciantes y está protegido por las leyes de propiedad intelectual.
                </p>
              </div>
            </div>

            {/* Sección de Política de Privacidad */}
            <div className="bg-black p-8 md:p-10 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-[#ff6600] mb-6">Política de Privacidad</h2>
              <div className="space-y-4 text-white/80">
                <h3 className="text-xl font-semibold text-white">1. Información que Recopilamos</h3>
                <p>
                  Podemos recopilar información de identificación personal, como tu nombre y dirección de correo electrónico, cuando te registras en nuestro boletín o llenas un formulario de contacto. También recopilamos datos no personales a través de cookies para mejorar tu experiencia.
                </p>
                <h3 className="text-xl font-semibold text-white pt-4">2. Uso de la Información</h3>
                <p>
                  La información que recopilamos se utiliza para personalizar tu experiencia, mejorar nuestro sitio web, procesar transacciones y enviar correos electrónicos periódicos con información relevante.
                </p>
                <h3 className="text-xl font-semibold text-white pt-4">3. Protección de la Información</h3>
                <p>
                  Implementamos una variedad de medidas de seguridad para mantener la seguridad de tu información personal. No vendemos, intercambiamos ni transferimos de ningún otro modo a terceros tu información de identificación personal.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LegalPage;