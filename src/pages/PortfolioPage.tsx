import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PORTFOLIO_PROJECTS } from '@/utils/constants';
import type { Project } from '@/types/index';
import ContactSection from '@/components/ContactSection';
import SEO from '@/components/SEO';
// No se necesita RotatingText

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Video', 'Marketing'];

const PortfolioPage: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const containerRef = useRef<HTMLDivElement>(null);
    const projectsGridRef = useRef<HTMLDivElement>(null);

    const filteredProjects = filter === 'All' 
        ? PORTFOLIO_PROJECTS 
        : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

    useGSAP(() => {
        // Esta animación seguirá funcionando
        gsap.from('.header-block', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.header-block',
                start: 'top 85%',
                once: true,
            }
        });

        gsap.from('.project-card', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1, 
            scrollTrigger: {
                trigger: projectsGridRef.current,
                start: 'top 85%',
                once: true,
            }
        });

    }, { scope: containerRef });

    return (
        <div className="app-grainy-background text-white min-h-screen">
            <SEO
                title="Nuestro Portafolio"
                description="Explora una selección de proyectos de video y marketing que hemos realizado para nuestros clientes."
                canonicalUrl="/porfolio"
            />
            {/* 1. SE QUITA EL PADDING TOP DEL CONTENEDOR PRINCIPAL */}
            <div ref={containerRef}>

                {/* 2. SE AÑADE EL WRAPPER <header> */}
                <header className="relative w-full h-[500px] md:h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 ">
                    {/* 3. SE MANTIENE EL CONTENIDO ORIGINAL (quitando mb-12) */}
                    <div className="header-block text-center relative z-10 px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                            Nuestro <span className="text-[#ff6600]">Trabajo</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                            Explora una selección de proyectos que hemos realizado para nuestros clientes.
                        </p>
                    </div>
                </header>

                {/* 4. SE AÑADE UN DIV WRAPPER PARA EL CONTENIDO */}
                <div className="pb-20">
                    <div className="container mx-auto px-6">
                        
                        {/* 5. SE AÑADE PADDING TOP AL PRIMER ELEMENTO DE CONTENIDO */}
                        <div className="flex justify-center space-x-4 mb-12 pt-20 md:pt-24">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                                        filter === category 
                                        ? 'bg-[#ff6600] text-white' 
                                        : 'bg-transparent border border-white/30 text-white/80 hover:bg-white/10'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div 
                            ref={projectsGridRef}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map((project: Project) => (
                                <div 
                                    key={project.title} 
                                    className="group relative overflow-hidden rounded-lg project-card"
                                >
                                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        <p className="text-[#ff6600] text-sm">{project.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* --- Sección de Contacto --- */}
                    <div className="container mx-auto px-6 mt-20 md:mt-32">
                      <ContactSection 
                        title="¿Te gusta lo que ves?"
                        subtitle="Imagina lo que podemos hacer por tu marca. Contáctanos y hagamos realidad tu próximo gran proyecto."
                      />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;