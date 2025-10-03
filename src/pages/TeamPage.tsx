import React from 'react';
import { TEAM_MEMBERS } from '@/utils/constants';
import type { TeamMember } from '@/types/index';

// --- El componente TeamMemberCard ha sido rediseñado ---
const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    // 'group' se usa para controlar el efecto de zoom en la imagen al pasar el ratón por encima de la tarjeta
    <div className="group text-center">
        {/* Contenedor para la imagen con overflow-hidden para contener el zoom */}
        <div className="overflow-hidden rounded-lg">
            <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-auto object-cover aspect-square 
                           transform transition-transform duration-300 ease-in-out 
                           group-hover:scale-105" // Efecto de zoom en hover
            />
        </div>
        {/* El texto ahora está debajo de la imagen */}
        <div className="mt-4">
            <h3 className="text-white text-lg font-bold">{member.name}</h3>
            <p className="text-[#ff6600] text-sm font-medium">{member.role}</p>
        </div>
    </div>
);


const TeamPage: React.FC = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-24 md:pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                            Conoce a Nuestro <span className="text-[#ff6600]">Equipo</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                            Profesionales apasionados y dedicados a transformar ideas en resultados extraordinarios.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8">
                        {TEAM_MEMBERS.map((member: TeamMember) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;