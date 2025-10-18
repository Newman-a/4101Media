import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import ShinyText from '@/components/HomePage/common/ShinyText';
// 👈 IMPORTACIÓN DEL VIDEO: Asumiendo que el archivo está en src/assets/
import heroVideo from '/4101mediafondo.mp4'; 

// Register the SplitText plugin
gsap.registerPlugin(SplitText);

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
  if (titleRef.current) {
    // 1. Cambiamos el tipo a 'words'
    const split = new SplitText(titleRef.current, { type: 'words' });
    const chars = split.words; // Esto ahora funcionará correctamente

    gsap.set(chars, { y: 30, opacity: 0 });

    gsap.to(chars, {
      y: 0,
      opacity: 1,
      // Para caracteres, un stagger más rápido se ve mejor
      stagger: 0.05, 
      duration: 1,
      ease: 'power3.out', // Tu ease seleccionado
    });
  }
}, []);

  return (
    // 'relative' y 'overflow-hidden' ya están correctos para el contenedor del video
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 brand-dark ">
      
      {/* AÑADIDO: Video de Fondo */}
      <video
        autoPlay
        loop
        muted 
        playsInline 
        preload="metadata" 
  
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
      >

        <source src={heroVideo} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      {/* Dark background layer */}
      {/* Subimos la opacidad si el video es muy claro, para mejorar la legibilidad del texto blanco */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Main content */}
      <div className="container mx-auto text-center z-20">
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
          Aceleramos el Crecimiento de tu Marca en el <span className="text-[#ff6600]">Mundo Digital</span>
        </h1>
        <div className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
          
          <ShinyText 
            text="Somos 4101 Media, una productora audiovisual que impulsa empresas y emprendedores a través de estrategias de marketing digital y contenido de alto impacto." 
            disabled={false} 
            speed={3} 
            className='custom-class' 
          />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/porfolio" className="bg-[#ff6600] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#e65c00] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Ver Proyectos <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link to="/servicios" className="border border-white/50 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/5 transition-all duration-300">
            Nuestros Servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;