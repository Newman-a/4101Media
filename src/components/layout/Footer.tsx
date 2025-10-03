import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '@/utils/constants';

// Componente para un ícono social individual
const SocialIcon: React.FC<{ href: string; path: string; label: string }> = ({ href, path, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/70 hover:text-white transition-colors duration-300">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
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
    // Puedes agregar más redes aquí
];

// Lógica para dividir los links de navegación en dos columnas
const midPoint = Math.ceil(NAV_LINKS.length / 2);
const navLinksCol1 = NAV_LINKS.slice(0, midPoint);
const navLinksCol2 = NAV_LINKS.slice(midPoint);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white border-t border-white/10 px-6 py-12">
            <div className="container mx-auto">
                {/* --- SECCIÓN PRINCIPAL DE 4 COLUMNAS --- */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly space-y-10 md:space-y-0 text-center md:text-left">
                    
                    {/* Columna 1: Marca y Redes */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <Link to="/" className="text-3xl font-bold text-white flex items-center">
                            <span className="text-[#ff6600]">4101</span><span className="ml-2">media</span>
                        </Link>
                        <p className="text-sm text-white/70">
                            Av. Manaure, <br/> Coro, Venezuela.
                        </p>
                        <div className="flex space-x-4">
                            {SOCIAL_LINKS.map(social => (
                                <SocialIcon key={social.label} href={social.href} label={social.label} path={social.path} />
                            ))}
                        </div>
                    </div>

                    {/* Columna 2: Enlaces de Navegación (Parte 1) */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        {navLinksCol1.map(link => (
                           <Link key={link.name} to={link.path} className="text-sm text-white/70 hover:text-white transition-colors">{link.name}</Link>
                        ))}
                    </div>

                    {/* Columna 3: Enlaces de Navegación (Parte 2) */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        {navLinksCol2.map(link => (
                           <Link key={link.name} to={link.path} className="text-sm text-white/70 hover:text-white transition-colors">{link.name}</Link>
                        ))}
                    </div>

                    {/* Columna 4: Contacto */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <p className="font-semibold text-white">Atención al cliente</p>
                        <a href="tel:+123456789" className="text-sm text-white/70 hover:text-white transition-colors">+1 (234) 567-890</a>
                        <a href="mailto:contacto@4101media.com" className="text-sm text-white/70 hover:text-white transition-colors">contacto@4101media.com</a>
                    </div>
                </div>

                {/* --- SECCIÓN DE ENLACES LEGALES --- */}
                <div className="mt-12 pt-8 border-t border-white/10 flex justify-center space-x-6 text-xs text-white/50">
                    <Link to="/legal" className="hover:text-white transition-colors">Términos de Uso</Link>
                    <Link to="/legal" className="hover:text-white transition-colors">Política de Privacidad</Link>
                </div>
                
                {/* --- SECCIÓN DE COPYRIGHT --- */}
                <div className="mt-4 text-center text-xs text-white/50">
                    <p>&copy; {new Date().getFullYear()} 4101 Media. Todos los derechos reservados.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;