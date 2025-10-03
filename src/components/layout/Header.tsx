import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '@/utils/constants';
import type { NavLink } from '../../types';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        
        // Lock body scroll when mobile menu is open
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <RouterNavLink to="/" className="text-2xl font-bold text-white flex items-center">
                        <span className="text-[#ff6600]">4101</span>
                        <span className="ml-2">media</span>
                    </RouterNavLink>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link: NavLink) => (
                            <RouterNavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-white hover:text-[#ff6600] transition-colors duration-300 ${isActive ? 'text-[#ff6600]' : ''}`
                                }
                            >
                                {link.name}
                            </RouterNavLink>
                        ))}
                    </nav>
                    <RouterNavLink to="/contacto" className="hidden md:inline-block bg-[#ff6600] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#e65c00] transition-all duration-300 transform hover:scale-105">
                        Contáctanos
                    </RouterNavLink>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(true)} aria-label="Abrir menú" className="text-white p-2">
                            <MenuIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden fixed inset-0 bg-black z-[100] transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                role="dialog"
                aria-modal="true"
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center h-20">
                     <RouterNavLink to="/" onClick={closeMenu} className="text-2xl font-bold text-white flex items-center">
                        <span className="text-[#ff6600]">4101</span>
                        <span className="ml-2">media</span>
                    </RouterNavLink>
                    <button onClick={closeMenu} aria-label="Cerrar menú" className="text-white p-2">
                        <CloseIcon className="w-8 h-8" />
                    </button>
                </div>
                
                <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
                    <ul className="text-center space-y-8">
                        {NAV_LINKS.map((link: NavLink) => (
                            <li key={link.name}>
                                <RouterNavLink
                                    to={link.path}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `text-3xl font-medium text-white hover:text-[#ff6600] transition-colors duration-300 ${isActive ? 'text-[#ff6600]' : ''}`
                                    }
                                >
                                    {link.name}
                                </RouterNavLink>
                            </li>
                        ))}
                        <li className="pt-4">
                            <RouterNavLink 
                                to="/contacto" 
                                onClick={closeMenu}
                                className="inline-block bg-[#ff6600] text-white font-semibold py-3 px-10 rounded-full hover:bg-[#e65c00] transition-all duration-300 text-xl"
                            >
                                Contáctanos
                            </RouterNavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
