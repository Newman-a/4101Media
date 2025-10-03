import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '@/utils/constants';
import type { Project } from '@/types/index';

const categories = ['All', 'Video', 'Marketing'];

const PortfolioPage: React.FC = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All' 
        ? PORTFOLIO_PROJECTS 
        : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-24 md:pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project: Project) => (
                            <div key={project.title} className="group relative overflow-hidden rounded-lg">
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
            </div>
        </div>
    );
};

export default PortfolioPage;