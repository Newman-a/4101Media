import React from 'react';

// Importa todos tus nuevos componentes de sección
import HeroSection from '@/components/HomePage/HeroSection';
import StatsSection from '@/components/HomePage/StatsSection';
import ClientsSection from '@/components/HomePage/ClientsSection';
import AboutSection from '@/components/HomePage/AboutSection';
import ServicesHighlightSection from '@/components/HomePage/ServicesHighlightSection';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <StatsSection />
      <ClientsSection />
      <AboutSection />
      <ServicesHighlightSection />
    </div>
  );
};

export default HomePage;