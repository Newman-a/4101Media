import React from 'react';
import { SERVICES_DATA } from '@/utils/constants';
import type { Service } from '@/types/index';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Nuestros <span className="text-[#ff6600]">Servicios</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Ofrecemos soluciones integrales para potenciar tu presencia y crecimiento en el entorno digital.
            </p>
          </div>

          <div className="space-y-16">
            {SERVICES_DATA.map((service: Service, index: number) => (
              <div key={service.title} className={`bg-black rounded-2xl p-8 md:p-12 border border-white/10`}>
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                     <h2 className="text-3xl font-bold text-[#ff6600] mb-4">{service.title}</h2>
                     <p className="text-white/80">{service.description}</p>
                  </div>
                  <div className={`md:col-span-3 flex ${index % 2 === 0 ? 'md:order-2 justify-end' : 'md:order-1 justify-start'}`}>
                    {/* Este div ahora será empujado por las clases justify- de su padre */}
                    <div className="space-y-6">
                      {service.steps.map(step => (
                        <div key={step.name}>
                          <h3 className="text-xl font-semibold text-white">{step.name}</h3>
                          <ul className="mt-2 list-disc list-inside text-white/70 space-y-1">
                            {step.details.map(detail => <li key={detail}>{detail}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;