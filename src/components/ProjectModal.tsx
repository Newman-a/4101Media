import React, { useEffect } from 'react';
import type { Project } from '@/types/index';
import CloseIcon from '@/components/icons/CloseIcon'; 

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; 

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; 
    };
  }, [onClose]);


  return (
    // Fondo oscuro con backdrop-blur
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Contenedor del Modal (ancho y alto responsivo) */}
      <div 
        className="bg-[#181818] rounded-2xl shadow-2xl w-full max-w-4xl lg:max-w-6xl relative border border-white/10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Botón de Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 transition-colors"
          aria-label="Cerrar modal"
        >
          <CloseIcon className="w-8 h-8" />
        </button>

        {/* Contenido: Grid de 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Columna 1: Media (Video o Imagen) */}
          <div className="bg-black md:rounded-l-lg overflow-hidden">
            {project.videoUrl ? (
              // 1. Si hay video, muestra el iframe
              <iframe
                className="w-full h-full aspect-video md:aspect-auto md:min-h-[500px] lg:min-h-[600px]"
                src={project.videoUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              // 2. Si NO hay video, muestra la imagen (perfecto para "Web" y "Marketing")
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover md:min-h-[500px] lg:min-h-[600px]"
              />
            )}
          </div>

          {/* Columna 2: Información */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-lg font-semibold text-[#ff6600] mb-4">
              {project.client}
            </p>
            <p className="text-base text-white/80">
              {project.description}
            </p>

            {/* --- 👇 AÑADIDO: BOTÓN DE SITIO WEB --- */}
            {/* 3. Si 'siteUrl' existe, muestra el botón */}
            {project.siteUrl && (
              <div className="mt-8">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#ff6600] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#e65c00] transition-all duration-300 transform hover:scale-105"
                >
                  Visitar Sitio Web
                </a>
              </div>
            )}
            
          </div>
        </div>
      </div>
      
      {/* CSS para la animación de fade-in */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;