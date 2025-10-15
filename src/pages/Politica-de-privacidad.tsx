import React from 'react';

const PoliticaDePrivacidad: React.FC = () => {
  return (
    <div className="app-grainy-background text-white min-h-screen">
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Política de <span className="text-[#ff6600]">Privacidad</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Esta política describe cómo <strong>4101 media</strong> recopila, utiliza y protege tu información personal.
            </p>
          </div>

          <div className="space-y-16 max-w-4xl mx-auto">
            <div className="bg-black p-8 md:p-10 rounded-2xl border border-white/10">
              <div className="space-y-6 text-white/80">
                <h3 className="text-xl font-semibold text-white">1. Información que Recopilamos</h3>
                <p>
                  Para cumplir con nuestra misión de acelerar el desarrollo de nuestros clientes[cite: 5], recopilamos información de diversas maneras:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Información proporcionada directamente:</strong> Datos que nos entregas al llenar un formulario de contacto, en reuniones de briefing o al solicitar nuestros servicios (nombre, correo, detalles del negocio)[cite: 28, 30].
                  </li>
                  <li>
                    <strong>Información recopilada automáticamente:</strong> Cuando navegas por nuestro sitio, usamos herramientas como cookies y píxeles para recoger datos técnicos (dirección IP, tipo de navegador) y de comportamiento para mejorar tu experiencia y nuestros servicios.
                  </li>
                  <li>
                    <strong>Información de terceros:</strong> Datos obtenidos a través de plataformas de análisis y publicidad como Google Analytics y Meta Ads para optimizar nuestras estrategias de marketing digital[cite: 41, 42].
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white pt-4">2. Cómo Usamos tu Información</h3>
                <p>
                  La información recopilada se utiliza para los siguientes propósitos:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Para prestar nuestros servicios:</strong> Desde el diagnóstico inicial y la estrategia hasta la implementación y reporte de campañas[cite: 27].
                  </li>
                  <li>
                    <strong>Para comunicarnos contigo:</strong> Enviarte propuestas, informes de rendimiento y actualizaciones sobre tu proyecto.
                  </li>
                  <li>
                    <strong>Para mejorar nuestros procesos:</strong> Analizamos los datos para optimizar continuamente nuestras estrategias y ofrecer mejores resultados[cite: 49, 51].
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white pt-4">3. Cómo Compartimos tu Información</h3>
                <p>
                  No vendemos ni alquilamos tu información personal. Solo la compartimos con:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Proveedores de servicios:</strong> Plataformas tecnológicas (como Google, Meta, herramientas de CRM) que nos ayudan a ejecutar y analizar nuestras campañas[cite: 41, 42].
                  </li>
                  <li>
                    <strong>Requerimientos legales:</strong> Si es requerido por ley o para proteger los derechos de nuestra empresa.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white pt-4">4. Seguridad de los Datos</h3>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra el acceso no autorizado, la alteración o la destrucción[cite: 23].
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">5. Tus Derechos</h3>
                <p>
                  Tienes derecho a acceder, rectificar o eliminar tu información personal. Para ejercer estos derechos, puedes contactarnos a través de los canales proporcionados en este sitio web.
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">6. Cambios a esta Política</h3>
                <p>
                  Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidad;