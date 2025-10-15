import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TEAM_MEMBERS } from '@/utils/constants';
import type { TeamMember } from '@/types/index';
import CareersContactForm from './CareersContactForm'; // --- 1. IMPORTAR EL NUEVO COMPONENTE ---

gsap.registerPlugin(ScrollTrigger);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="group text-center team-member-card">
        <div className="overflow-hidden rounded-lg">
            <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-auto object-cover aspect-square 
                           transform transition-transform duration-300 ease-in-out 
                           group-hover:scale-105"
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

    const membersToKeep = new Set([
        'Cesar', 'Angelvis', 'Newman', 'Roberto', 'Arianna', 'Jeremi', 'Rebeca', 'Mariana',
    ]);

    const filteredMembers = TEAM_MEMBERS.filter(member => membersToKeep.has(member.name));

    useGSAP(() => {
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
            <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Sección del Equipo */}
                    <div className="header-block text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                            Conoce a Nuestro <span className="text-[#ff6600]">Equipo</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                            Profesionales apasionados y dedicados a transformar ideas en resultados extraordinarios.
                        </p>
                    </div>

                    <div 
                        ref={teamGridRef}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8"
                    >
                        {filteredMembers.map((member: TeamMember) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>

                {/* --- 2. SECCIÓN DEL FORMULARIO DE POSTULACIONES --- */}
                {/* Separador visual */}
                <div className="container mx-auto px-6">
                    <hr className="border-t-2 border-white/10 my-20 md:my-24" />
                </div>
                
                <CareersContactForm />

            </div>
        </div>
    );
};

export default TeamPage;