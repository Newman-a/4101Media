import React from 'react';
// import { useRef } from 'react'; // <--- Adiós
// import { gsap } from 'gsap'; // <--- Adiós
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; // <--- Adiós
// import { useGSAP } from '@gsap/react'; // <--- Adiós
import { TEAM_MEMBERS } from '@/utils/constants';
import type { TeamMember } from '@/types/index';
import CareersContactForm from '@/pages/CareersContactForm';
import SEO from '@/components/SEO';
import AnimateOnScroll from '@/components/AnimateOnScroll'; // <--- ¡Hola!

// gsap.registerPlugin(ScrollTrigger); // <--- Adiós

// --- El componente TeamMemberCard se mantiene 100% igual ---
const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="group text-center team-member-card">
    <div className="overflow-hidden rounded-lg">
      <img 
        src={member.imageUrl} 
        alt={member.name} 
        className="w-full object-contain md:object-cover aspect-square
                   transform transition-transform duration-300 ease-in-out 
                   group-hover:scale-105 bg-[#d1d1d1] MaskImg"
      />
    </div>
    <div className="mt-4">
      <h3 className="text-white text-lg font-bold">{member.name}</h3>
      <p className="text-[#ff6600] text-sm font-medium">{member.role}</p>
    </div>
  </div>
);


const TeamPage: React.FC = () => {
  // const containerRef = useRef<HTMLDivElement>(null); // <--- Adiós
  // const teamGridRef = useRef<HTMLDivElement>(null); // <--- Adiós

  const membersToKeep = new Set([
    'Cesar Arteaga', 'Angelvis Yanez', 'Newman Acosta', 'Roberto Calderón', 'Arianna', 'Jeremi Mora', 'Rebeca Puerta', 'Mariana Vera', 'Emilys Calderón',
  ]);
  const filteredMembers = TEAM_MEMBERS.filter(member => membersToKeep.has(member.name));


  // useGSAP(() => { ... }); // <--- Adiós a todo el hook GSAP

  return (
    <div className=" text-white min-h-screen">
      <SEO
        title="Nuestro Equipo"
        description="Profesionales apasionados y dedicados a transformar ideas en resultados extraordinarios."
        canonicalUrl="/equipo"
      />
      {/* <div ref={containerRef}> // <--- Adiós al 'ref' */}
      <div>
        
        <header className="relative w-full h-[500px] md:h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 f-homepage-new">
          
          {/* 1. Envolvemos el header-block */}
          <AnimateOnScroll className="header-block text-center relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Conoce a Nuestro <span className="text-[#ff6600]">Equipo</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Profesionales apasionados y dedicados a transformar ideas en resultados extraordinarios.
            </p>
          </AnimateOnScroll>
        </header>

        <div className="pb-20">
          <div className="container mx-auto px-6">
            
            {/* <div ref={teamGridRef} ...> // <--- Adiós al 'ref' */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 pt-20 md:pt-24 ">
              
              {/* 2. Envolvemos cada 'TeamMemberCard' con 'AnimateOnScroll' */}
              {filteredMembers.map((member: TeamMember, index: number) => (
                <AnimateOnScroll
                  key={member.name}
                  delay={index * 100} // Replicamos el 'stagger: 0.1' (100ms)
                >
                  <TeamMemberCard member={member} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* --- Sección del Formulario --- */}
          <div className="container mx-auto px-6">
            <hr className="border-t-2 border-white/10 my-20 md:my-24 " />
          </div>
          
          <CareersContactForm />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;