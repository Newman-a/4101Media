import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '@/utils/constants';
import type { NavLink } from '@/types/index';
import MenuIcon from '@/components/icons/MenuIcon';
import CloseIcon from '@/components/icons/CloseIcon';
// Importamos el SVG como una URL (LogoUrl)
import LogoUrl from '@/assets/logo.webp'; 

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
                    {/* Logo principal: CAMBIO AQUÍ a h-12 */}
                    <RouterNavLink to="/" className="text-2xl font-bold text-white flex items-center">
                        <img src={LogoUrl} alt="4101 media logo" className="h-10 w-auto" />
                    </RouterNavLink>
                    
                    {/* --- MEJORA: Breakpoint cambiado de md a lg para evitar que se aprieten los elementos --- */}
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

                    {/* --- MEJORA: El botón del menú ahora aparece en el breakpoint 'lg' --- */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} aria-label="Abrir menú" className="text-white p-2">
                            <MenuIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* --- MEJORA: Menú móvil rediseñado con fondo translúcido, panel lateral y animaciones --- */}
            <div
                className={`lg:hidden fixed inset-0 z-[100] transition-opacity duration-300 ease-in-out ${
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
                    onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del panel cierre el menú
                >
                    <div className="container px-6 py-4 flex justify-between items-center h-20 border-b border-gray-700">
                         {/* Logo en menú móvil: CAMBIO AQUÍ a h-12 */}
                         <RouterNavLink to="/" onClick={closeMenu} className="text-2xl font-bold text-white flex items-center">
                            <img src={LogoUrl} alt="4101 media logo" className="h-10 w-auto" />
                        </RouterNavLink>
                        <button onClick={closeMenu} aria-label="Cerrar menú" className="text-white p-2">
                            <CloseIcon className="w-8 h-8" />
                        </button>
                    </div>
                    
                    <nav className="flex flex-col p-6 mt-4">
                        <ul className="text-left space-y-6">
                            {/* --- MEJORA: Animación escalonada (stagger) para los enlaces --- */}
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
                                    className="inline-block w-full text-center bg-[#ff6600] text-white font-semibold py-3 px-10 rounded-full hover:bg-[#e65c00] transition-all duration-300 text-xl"
                                >
                                    Contáctanos
                                </RouterNavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;