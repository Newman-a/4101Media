import React, { useState } from 'react';

// --- Iconos para una interfaz limpia y visual ---
const IconUser = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>);
const IconMail = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const IconPhone = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>);
const IconLink = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>);
const IconSparkles = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6.5 17.5l-1.5 1.5M18.5 5.5l1.5-1.5M12 2v2M12 20v2M4.5 11H3m18 0h-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const IconPencil = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>);

// --- Áreas de interés actualizadas ---
const AREAS_OF_INTEREST = [
    { value: 'filmmaker', label: 'Filmmaker' },
    { value: 'edicion-postproduccion', label: 'Edición & Postproducción' },
    { value: 'animacion-3d', label: 'Animación & Modelado 3D' },
    { value: 'diseno-grafico', label: 'Diseñador Gráfico' },
    { value: 'desarrollador-web', label: 'Desarrollador Web' },
    { value: 'trafficker-digital', label: 'Trafficker Digital' },
    { value: 'community-manager', label: 'Community Manager' },
    { value: 'otro', label: 'Otro' },
];

const CareersContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        portfolioLink: '',
        areaOfInterest: '',
        proudProject: '',
        talentAcceleration: '',
        passionTrend: '',
    });

    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            setFormData({ ...formData, [name]: value.replace(/\D/g, '') });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);
        setStatus('');
        setError('');

        setTimeout(() => {
            setIsSubmitting(false);
            if (Math.random() > 0.1) {
                setIsSuccess(true);
                setStatus('¡Gracias por tu postulación! Hemos recibido tus datos y los revisaremos pronto.');
                setFormData({
                    fullName: '', email: '', phone: '', portfolioLink: '', areaOfInterest: '',
                    proudProject: '', talentAcceleration: '', passionTrend: '',
                });
                setTimeout(() => setIsSuccess(false), 4000);
            } else {
                setError('Error al enviar. Por favor, revisa los campos e inténtalo de nuevo.');
            }
        }, 1500);
    };

    const buttonClass = isSuccess ? 'bg-green-600' : 'bg-[#ff6600] hover:bg-[#e65c00]';
    // Se asegura 'outline-none' y los focus en naranja
    const inputBaseClasses = "w-full bg-black border-white/20 rounded-md py-3 px-4 text-white focus:ring-[#ff6600] focus:border-[#ff6600] border pl-10 outline-none";
    const iconClasses = "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none";

    return (
        <div className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Únete a Nuestro Equipo</h2>
                        <p className="mt-4 text-lg text-white/70">Buscamos talento apasionado por la creatividad y los resultados.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* --- Sección de Contacto Esencial --- */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative"><label htmlFor="fullName" className="sr-only">Nombre Completo</label><IconUser className={iconClasses} /><input type="text" name="fullName" placeholder="Nombre Completo" required value={formData.fullName} onChange={handleChange} className={inputBaseClasses} /></div>
                            <div className="relative"><label htmlFor="email" className="sr-only">Correo electronico</label><IconMail className={iconClasses} /><input type="email" name="email" placeholder="Correo electronico" required value={formData.email} onChange={handleChange} className={inputBaseClasses} /></div>
                            <div className="relative"><label htmlFor="phone" className="sr-only">Teléfono</label><IconPhone className={iconClasses} /><input type="tel" name="phone" placeholder="Teléfono" required value={formData.phone} onChange={handleChange} className={inputBaseClasses} /></div>
                            <div className="relative"><label htmlFor="portfolioLink" className="sr-only">Enlace a tu Portafolio o CV</label><IconLink className={iconClasses} /><input type="url" name="portfolioLink" placeholder="Enlace a tu Portafolio o CV" required value={formData.portfolioLink} onChange={handleChange} className={inputBaseClasses} /></div>
                        </div>

                        {/* --- Área de Interés --- */}
                        <div className="relative">
                            <label htmlFor="areaOfInterest" className="sr-only">Área de Interés</label>
                            <IconSparkles className={iconClasses} />
                            {/* Se aplica la clase de forma completa al select */}
                            <select 
                                name="areaOfInterest" 
                                required 
                                value={formData.areaOfInterest} 
                                onChange={handleChange} 
                                className={`${inputBaseClasses} appearance-none`}
                            >
                                <option value="" disabled>Selecciona tu área de interés</option>
                                {AREAS_OF_INTEREST.map(a => (
                                    // Para los option tags, el color azul puede venir de aquí. 
                                    // Aunque no se puede controlar con Tailwind dentro de select, 
                                    // el `inputBaseClasses` en el select suele bastar para el foco.
                                    // Si el azul persiste en la lista desplegable, es un estilo nativo del SO/navegador y no se puede cambiar con CSS en React sin librerías externas.
                                    <option key={a.value} value={a.value}>
                                        {a.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* --- Preguntas Estratégicas --- */}
                        <div className="relative pt-2"><label htmlFor="proudProject" className="sr-only">Proyecto que más te enorgullece</label><IconPencil className={`${iconClasses} top-6`} /><textarea name="proudProject" placeholder="Describe el proyecto que más te enorgullece. ¿Qué lo hizo especial y qué rol jugaste en él?" required rows={4} value={formData.proudProject} onChange={handleChange} className={`${inputBaseClasses} resize-none`}></textarea></div>
                        <div className="relative"><label htmlFor="talentAcceleration" className="sr-only">Cómo tu talento puede acelerar nuestro crecimiento</label><IconPencil className={`${iconClasses} top-6`} /><textarea name="talentAcceleration" placeholder="Cuéntanos cómo tu talento puede acelerar nuestro crecimiento y el de nuestros clientes." required rows={4} value={formData.talentAcceleration} onChange={handleChange} className={`${inputBaseClasses} resize-none`}></textarea></div>
                        <div className="relative"><label htmlFor="passionTrend" className="sr-only">Tendencia que te apasiona</label><IconPencil className={`${iconClasses} top-6`} /><textarea name="passionTrend" placeholder="¿Qué tendencia del marketing digital o la producción audiovisual te apasiona más y por qué?" required rows={4} value={formData.passionTrend} onChange={handleChange} className={`${inputBaseClasses} resize-none`}></textarea></div>
                        
                        {/* --- Botón de Envío y Feedback --- */}
                        <div className="pt-4">
                            <button type="submit" className={`w-full text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed ${buttonClass}`} disabled={isSubmitting || isSuccess}>
                                {isSubmitting ? 'Enviando...' : isSuccess ? '¡Postulación Recibida!' : 'Enviar Postulación'}
                            </button>
                            {status && <p className="mt-4 text-sm text-center text-green-400">{status}</p>}
                            {error && <p className="mt-4 text-sm text-center text-red-500">{error}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CareersContactForm;