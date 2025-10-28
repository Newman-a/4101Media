import React, { useState, useRef } from 'react'; // Importamos useRef
import { gsap } from 'gsap'; // Importamos GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importamos ScrollTrigger
import { useGSAP } from '@gsap/react'; // Importamos useGSAP
import { PORTFOLIO_PROJECTS } from '@/utils/constants';
import type { Project } from '@/types/index';
import ContactSection from '@/components/ContactSection'; // 1. IMPORTAR EL COMPONENTE DE CONTACTO
import SEO from '@/components/SEO'; // 2. IMPORTAR EL COMPONENTE SEO

// Registrar el plugin de GSAP
gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Video', 'Marketing'];

const PortfolioPage: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const containerRef = useRef<HTMLDivElement>(null); // Ref para el scope de GSAP
    const projectsGridRef = useRef<HTMLDivElement>(null); // Ref para el grid de proyectos

    const filteredProjects = filter === 'All' 
        ? PORTFOLIO_PROJECTS 
        : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

    // Lógica para las animaciones
    useGSAP(() => {
        // 1. Animación del encabezado
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

        // 2. Animación de las tarjetas del portafolio con stagger
        // Se dispara cuando el grid entra en la vista
        gsap.from('.project-card', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1, // Pequeño retardo entre cada tarjeta
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
            <div ref={containerRef} className="pt-24 md:pt-32 pb-20"> {/* Aplicamos la ref principal */}
                <div className="container mx-auto px-6">
                    {/* Header - Añadimos una clase para seleccionarlo */}
                    <div className="header-block text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                            Nuestro <span className="text-[#ff6600]">Trabajo</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                            Explora una selección de proyectos que hemos realizado para nuestros clientes.
                        </p>
                    </div>

                    <div className="flex justify-center space-x-4 mb-12">
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

                    {/* Aplicamos la ref y la clase a cada tarjeta */}
                    <div 
                        ref={projectsGridRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project: Project) => (
                            <div 
                                key={project.title} 
                                className="group relative overflow-hidden rounded-lg project-card" // Agregamos la clase 'project-card'
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
                {/* 2. AÑADE LA SECCIÓN DE CONTACTO AL FINAL */}
                <div className="container mx-auto px-6 mt-20 md:mt-32">
                  <ContactSection 
                    title="¿Te gusta lo que ves?"
                    subtitle="Imagina lo que podemos hacer por tu marca. Contáctanos y hagamos realidad tu próximo gran proyecto."
                  />
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;