import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, LEGAL_LINKS } from '@/utils/constants';
// 👈 Importamos la URL del logo aquí también
import LogoUrl from '/logo.webp';  

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



const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white border-t border-white/10 px-6 py-12">
            <div className="container mx-auto">
                {/* ---------------------------------------------------- */}
                {/* --- SECCIÓN PRINCIPAL DE 4 COLUMNAS --- */}
                {/* Usamos grid para móviles y flex en md para 4 columnas */}
                {/* md:gap-x-12 crea el espaciado entre las 4 columnas */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:gap-x-12 text-center md:text-left">
                    
                    {/* Columna 1: Marca, Dirección y Redes (Full width en móvil, 1/4 en desktop) */}
                    <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/4">
                        <Link to="/" className="text-3xl font-bold text-white flex items-center">
                            <img 
                                src={LogoUrl} 
                                alt="4101 media logo" 
                                className="h-10 w-auto"
                            />
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

                    {/* ---------------------------------------------------- */}
                    {/* Contenedor de las 3 Columnas de Enlaces (Se ajusta en móvil para ser más compacto) */}
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-3 md:w-3/4">

                        {/* Columna 2: Navegación */}
                        <div className="flex flex-col items-center md:items-start space-y-3">
                            <p className="font-semibold text-white mb-2 uppercase tracking-wider">Navegación</p>
                            {/* Unimos los links de navegación */}
                            {[...NAV_LINKS].map(link => (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    className="text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Columna 3: Legal */}
                        <div className="flex flex-col items-center md:items-start space-y-3">
                            <p className="font-semibold text-white mb-2 uppercase tracking-wider">Legal</p>
                            {LEGAL_LINKS.map(link => (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    className="text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Columna 4: Atención al Cliente (Modificada) */}
                        <div className="flex flex-col items-center md:items-start space-y-3">
                            <p className="font-semibold text-white mb-2 uppercase tracking-wider">Atención al Cliente</p>

                            {/* Teléfono: Agrupado y en blanco */}
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <a href="https://wa.me/+584120748733" target='_blank' className="text-sm text-white/70 hover:text-white transition-colors">
                                    +58 412-0748733
                                </a>
                            </div>

                            {/* Correo: Agrupado y en blanco */}
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a href="mailto:4101mediavzla@gmail.com" className="text-sm text-white/70 hover:text-white transition-colors">
                                    4101mediavzla@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------------------------------------------------- */}

                {/* --- SECCIÓN INFERIOR (Separador y Copyright) --- */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="text-center text-xs text-white/50">
                    <p>&copy; {new Date().getFullYear()} 4101 Media. Todos los derechos reservados.</p>
                  </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;