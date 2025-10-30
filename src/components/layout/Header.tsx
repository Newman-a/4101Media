import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '@/utils/constants';
import type { NavLink } from '@/types/index';
import MenuIcon from '@/components/icons/MenuIcon';
import CloseIcon from '@/components/icons/CloseIcon';
// Importamos el SVG como una URL (LogoUrl)
import LogoUrl from '/logo.webp'; 

// =======================================================
// --- INICIO: CÓDIGO COPIADO DE Footer.tsx ---
// =======================================================

// Componente para un ícono social individual
// 💡 CAMBIO: Aumentado el tamaño a w-6 h-6 para mejor visibilidad en el menú
const SocialIcon: React.FC<{ href: string; path: string; label: string }> = ({ href, path, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/70 hover:text-white transition-colors duration-300">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
            <path d={path}></path>
        </svg>
    </a>
);

// Datos de las redes sociales para mapearlos fácilmente
const SOCIAL_LINKS = [
    { 
        href: "https://www.instagram.com/4101media", 
        label: "Instagram", 
        path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    },
    {
        href: "https://www.facebook.com/profile.php?id=61572860425493",
        label: "Facebook",
        path: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
    },
    {
        href: "https://www.tiktok.com/@4101media",
        label: "TikTok",
        path: "M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"
    }
];
// =======================================================
// --- FIN: CÓDIGO COPIADO DE Footer.tsx ---
// =======================================================


const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        
        // Bloquea el scroll del body cuando el menú está abierto
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Función de limpieza
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto'; // Asegurarse de restaurar el scroll
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo principal */}
                    <RouterNavLink to="/" className="text-2xl font-bold text-white flex items-center">
                        <img src={LogoUrl} alt="4101 media logo" className="h-10 w-auto" />
                    </RouterNavLink>
                    
                    <nav className="hidden lg:flex items-center space-x-8">
                        {NAV_LINKS.map((link: NavLink) => (
                            <RouterNavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-white hover:text-[#ff6600] lg:text-lg transition-colors duration-300 ${isActive ? 'text-[#ff6600]' : ''}`
                                }
                            >
                                {link.name}
                            </RouterNavLink>
                        ))}
                    </nav>
                    <RouterNavLink to="/contacto" className="hidden lg:inline-block bg-[#ff6600] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#e65c00] transition-all duration-300 transform hover:scale-105">
                        Contáctanos
                    </RouterNavLink>

                    <div className="lg:hidden">
                        <button onClick={toggleMenu} aria-label="Abrir menú" className="text-white p-2">
                            <MenuIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Menú móvil */}
            <div
                className={`lg:hidden fixed inset-0 z-[100]   transition-opacity duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                } bg-black/50 backdrop-blur-sm`}
                onClick={closeMenu}
                role="dialog"
                aria-modal="true"
            >
                {/* Panel que se desliza */}
                <div 
                    className={`fixed top-0 right-0 h-full w-full max-w-xs bg-[#111] shadow-xl transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    onClick={(e) => e.stopPropagation()} 
                >
                    <div className="container px-6 py-4  flex justify-between items-center h-20 border-b border-gray-700">
                         {/* Logo en menú móvil */}
                         <RouterNavLink to="/" onClick={closeMenu} className="text-2xl font-bold text-white flex items-center">
                            <img src={LogoUrl} alt="4101 media logo" className="h-10 w-auto" />
                        </RouterNavLink>
                        <button onClick={closeMenu} aria-label="Cerrar menú" className="text-white p-2">
                            <CloseIcon className="w-8 h-8" />
                        </button>
                    </div>
                    
                    <nav className="flex flex-col p-6 mt-4">
                        <ul className="text-left space-y-6">
                            {NAV_LINKS.map((link: NavLink, index) => (
                                <li
                                    key={link.name}
                                    className="transition-all duration-300 ease-in-out"
                                    style={{
                                        transitionDelay: `${(index + 1) * 100}ms`,
                                        transform: isMenuOpen ? 'none' : 'translateX(20px)',
                                        opacity: isMenuOpen ? 1 : 0,
                                    }}
                                >
                                    <RouterNavLink
                                        to={link.path}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `text-2xl font-medium text-white hover:text-[#ff6600] transition-colors duration-300 block ${isActive ? 'text-[#ff6600]' : ''}`
                                        }
                                    >
                                        {link.name}
                                    </RouterNavLink>
                                </li>
                            ))}
                            <li
                                className="pt-4 transition-all duration-300 ease-in-out"
                                style={{
                                    transitionDelay: `${(NAV_LINKS.length + 1) * 100}ms`,
                                    transform: isMenuOpen ? 'none' : 'translateX(20px)',
                                    opacity: isMenuOpen ? 1 : 0,
                                }}
                            >
                                <RouterNavLink 
                                    to="/contacto" 
                                    onClick={closeMenu}
                                    className="inline-block w-full text-center bg-[#ff6600] text-white font-semibold py-3 px-10 rounded-full hover:bg-[#e65c00] transition-all duration-30S00 text-xl"
                                >
                                    Contáctanos
                                </RouterNavLink>
                            </li>
                        </ul>

                        {/* =======================================================
                        // --- INICIO: SECCIÓN DE REDES SOCIALES AÑADIDA ---
                        // ======================================================= */}
                        <div className="mt-10 pt-6 border-t border-gray-700 flex justify-center space-x-6">
                            {SOCIAL_LINKS.map(social => (
                                <SocialIcon key={social.label} href={social.href} label={social.label} path={social.path} />
                            ))}
                        </div>
                        {/* =======================================================
                        // --- FIN: SECCIÓN DE REDES SOCIALES AÑADIDA ---
                        // ======================================================= */}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;