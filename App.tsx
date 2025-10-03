import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import TeamPage from '@/pages/TeamPage';
import PortfolioPage from '@/pages/PortfolioPage';
import ContactPage from '@/pages/ContactPage';
import LegalPage from '@/pages/LegalPage';

// Utility component to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
    return (
        <div className="bg-black">
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/nosotros" element={<AboutPage />} />
                    <Route path="/servicios" element={<ServicesPage />} />
                    <Route path="/equipo" element={<TeamPage />} />
                    <Route path="/porfolio" element={<PortfolioPage />} />
                    <Route path="/contacto" element={<ContactPage />} />
                    {/* Esta ruta ahora funcionará correctamente */}
                    <Route path="/legal" element={<LegalPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;