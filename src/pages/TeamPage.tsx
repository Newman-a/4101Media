import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TEAM_MEMBERS } from '@/utils/constants';
import type { TeamMember } from '@/types/index';
import CareersContactForm from '@/pages/CareersContactForm';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

// --- AQUÍ ESTÁ LA CORRECCIÓN ---
const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="group text-center team-member-card">
        <div className="overflow-hidden rounded-lg">
            <img 
                src={member.imageUrl} 
                alt={member.name} 
                // Aplicamos 'object-contain' por defecto (móvil) y 'md:object-cover' para escritorio
                className="w-full object-contain md:object-cover aspect-square 
                           transform transition-transform duration-300 ease-in-out 
                           group-hover:scale-105 bg-[#ffffff86] MaskImg"
            />
        </div>
        <div className="mt-4">
            <h3 className="text-white text-lg font-bold">{member.name}</h3>
            <p className="text-[#ff6600] text-sm font-medium">{member.role}</p>
        </div>
    </div>
);


const TeamPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const teamGridRef = useRef<HTMLDivElement>(null);

    // ... (filteredMembers logic se mantiene igual) ...
    const membersToKeep = new Set([
        'Cesar', 'Angelvis', 'Newman', 'Roberto', 'Arianna', 'Jeremi', 'Rebeca', 'Mariana', 'Emilys',
    ]);
    const filteredMembers = TEAM_MEMBERS.filter(member => membersToKeep.has(member.name));


    useGSAP(() => {
        // ... (Animaciones GSAP se mantienen igual) ...
        gsap.from('.header-block', {
            opacity: 0, y: 50, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: '.header-block', start: 'top 85%', once: true, }
        });

        gsap.from('.team-member-card', {
            opacity: 0, y: 50, duration: 0.8, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: teamGridRef.current, start: 'top 85%', once: true, }
        });
        
    }, { scope: containerRef });

    return (
        <div className="app-grainy-background text-white min-h-screen">
            <SEO
                title="Nuestro Equipo"
                description="Profesionales apasionados y dedicados a transformar ideas en resultados extraordinarios."
                canonicalUrl="/equipo"
            />
            <div ref={containerRef}>
                
                <header className="relative w-full h-[500px] md:h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 ">
                    <div className="header-block text-center relative z-10 px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                            Conoce a Nuestro <span className="text-[#ff6600]">Equipo</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                            Profesionales apasionados y dedicados a transformar ideas en resultados extraordinarios.
                        </p>
                    </div>
                </header>

                <div className="pb-20">
                    <div className="container mx-auto px-6">
                        
                        {/* El grid 'grid-cols-2' para móvil funciona bien con 'object-contain' */}
                        <div ref={teamGridRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 pt-20 md:pt-24">
                            {filteredMembers.map((member: TeamMember) => (
                                <TeamMemberCard key={member.name} member={member} />
                            ))}
                        </div>
                    </div>

                    {/* --- Sección del Formulario --- */}
                    <div className="container mx-auto px-6">
                        <hr className="border-t-2 border-white/10 my-20 md:my-24" />
                    </div>
                    
                    <CareersContactForm />
                </div>
            </div>
        </div>
    );
};

export default TeamPage;