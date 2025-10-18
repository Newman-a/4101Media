// src/components/shared/ContactSection.tsx

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

// --- Iconos (sin cambios) ---
const IconUser = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>);
const IconOffice = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h1M9 14h1m-4 4h1m-4 4h1" /></svg>);
const IconPhone = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>);
const IconMail = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const IconMessage = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4v-4z" /></svg>);

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ 
  title = "Hablemos",
  subtitle = "¿Tienes un proyecto en mente? Nos encantaría escucharlo."
}) => {
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null); // NUEVO: 3. Crear una Ref para reCAPTCHA

  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // ... (Sin cambios)
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleanedValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: cleanedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // NUEVO: 4. Lógica de envío actualizada
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setStatus('');
    setError('');

    // Obtener el token de reCAPTCHA
    const token = recaptchaRef.current?.getValue();

    if (!token) {
      // Si no hay token, mostrar error
      setError('Por favor, verifica que no eres un robot.');
      setIsSubmitting(false);
      return;
    }

    // EmailJS espera el token bajo el nombre 'g-recaptcha-response'
    const templateParams = {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        'g-recaptcha-response': token, // Añadir el token aquí
    };

    emailjs.send(
        'service_cw4525e',
        'template_jtgj8s3',
        templateParams,
        'ia1fevkTobse8izwT'
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setIsSuccess(true);
       setStatus('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
       setFormData({ name: '', company: '', phone: '', email: '', message: '' });
       setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch((err) => {
       console.log('FAILED...', err);
       setError('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    })
    .finally(() => {
       // Resetear el reCAPTCHA sin importar si falló o no
       recaptchaRef.current?.reset();
       setIsSubmitting(false);
    });
  };

  const buttonClass = isSuccess ? 'bg-green-600' : 'bg-[#ff6600] hover:bg-[#e65c00]';
  const inputBaseClasses = "w-full bg-black border-white/20 rounded-md py-3 px-4 text-white focus:ring-[#ff6600] focus:border-[#ff6600] border";

  return (
    <div>
      {/* ... (Sección de título e info de contacto sin cambios) ... */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">{title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">{subtitle}</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-black p-8 md:p-12 rounded-2xl border border-white/10">
        <div>
          <h2 className="text-2xl font-bold text-[#ff6600]">Información de Contacto</h2>
          <p className="mt-4 text-white/70">Ponte en contacto con nosotros a través de los siguientes medios o utiliza el formulario.</p>
          <ul className="mt-8 space-y-4 text-white/80">
            <li className="flex items-center"><IconMail className="w-6 h-6 mr-3 text-[#ff6600]" /><a href="mailto:4101mediavzla@gmail.com" className="hover:text-[#ff6600]">4101mediavzla@gmail.com</a></li>
            <li className="flex items-center"><IconPhone className="w-6 h-6 mr-3 text-[#ff6600]" /><a href="tel:+584120748733" className="hover:text-[#ff6600]">+58 412-0748733</a></li>
            <li className="flex items-center"><svg className="w-6 h-6 mr-3 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>Coro, Falcón, Venezuela</span></li>
          </ul>
        </div>
        
        <form ref={form} onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* ... (Inputs sin cambios) ... */}
            <div className="relative"><IconUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" /><input type="text" name="name" value={formData.name} onChange={handleChange} required className={`${inputBaseClasses} pl-10`} placeholder="Nombre y Apellido"/></div>
            <div className="relative"><IconOffice className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" /><input type="text" name="company" value={formData.company} onChange={handleChange} className={`${inputBaseClasses} pl-10`} placeholder="Empresa (Opcional)"/></div>
            <div className="relative"><IconPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" /><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required maxLength={15} className={`${inputBaseClasses} pl-10`} placeholder="Teléfono"/></div>
            <div className="relative"><IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" /><input type="email" name="email" value={formData.email} onChange={handleChange} required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="Por favor, introduce una dirección de correo válida." className={`${inputBaseClasses} pl-10`} placeholder="Correo Electrónico"/></div>
            <div className="relative"><IconMessage className="absolute left-3 top-4 w-5 h-5 text-white/50 pointer-events-none" /><textarea name="message" rows={5} value={formData.message} onChange={handleChange} required className={`${inputBaseClasses} pl-10 resize-none`} placeholder="Cuéntanos sobre tu proyecto"></textarea></div>
          </div>

          {/* NUEVO: 5. Añadir el componente ReCAPTCHA */}
          <div className="mt-6">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LckBu4rAAAAAHercCf2bMEXOjYKerLOAGz1Kw-B" // <-- REEMPLAZA ESTO
              theme="dark" // Para que coincida con tu web
            />
          </div>

          <button
            type="submit"
            className={`mt-6 w-full text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed ${buttonClass}`}
            disabled={isSubmitting}
          >
            {/* ... (Lógica del botón sin cambios) ... */}
            {isSubmitting ? (
              <span key="submitting" className="flex items-center animate-fadeIn"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Enviando...</span>
            ) : isSuccess ? (
              <span key="success" className="flex items-center animate-fadeIn"><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Enviado exitosamente</span>
            ) : (
              <span key="default" className="block animate-fadeIn">Enviar Mensaje</span>
            )}
          </button>
          
          {status && !isSubmitting && <p className="mt-4 text-sm text-center text-green-400 animate-fadeIn">{status}</p>}
          {/* El error de reCAPTCHA también se mostrará aquí */}
          {error && <p className="mt-4 text-sm text-center text-red-500 animate-fadeIn">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;