// src/pages/ContactPage.tsx

import React from 'react';
import ContactSection from '@/components/ContactSection'; // Ajusta la ruta si es necesario

const ContactPage: React.FC = () => {
  return (
    <div className="app-grainy-background text-white min-h-screen">
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;