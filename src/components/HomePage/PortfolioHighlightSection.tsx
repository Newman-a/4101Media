// src/components/HomePage/PortfolioHighlightSection.tsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Masonry from '@/components/HomePage/common/Masonry';
import { MASONRY_ITEMS } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

const PortfolioHighlightSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animación para el título
    gsap.from(containerRef.current?.querySelector('h2'), {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section className="py-24 h-full">
      <div ref={containerRef} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Nuestro Trabajo Destacado
          </h2>
        </div>

        <div> {/* Contenedor con altura para que la galería se muestre */}
          <Masonry
            items={MASONRY_ITEMS}
            ease="power4.out"
            duration={1}
            stagger={0.06}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={1.05}
            blurToFocus={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlightSection;