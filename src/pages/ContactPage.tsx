import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');
    // Simulate form submission
    setTimeout(() => {
      setStatus('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Hablemos
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              ¿Tienes un proyecto en mente? Nos encantaría escucharlo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-black p-8 rounded-2xl border border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-[#ff6600]">Información de Contacto</h2>
              <p className="mt-4 text-white/70">Ponte en contacto con nosotros a través de los siguientes medios o utiliza el formulario.</p>
              <ul className="mt-8 space-y-4 text-white/80">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <a href="mailto:contacto@4101media.com" className="hover:text-[#ff6600]">contacto@4101media.com</a>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <a href="tel:+123456789" className="hover:text-[#ff6600]">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Dirección, Ciudad, País</span>
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Nombre</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-black border-white/20 rounded-md py-2 px-4 text-white focus:ring-[#ff6600] focus:border-[#ff6600] border" placeholder="Tu Nombre"/>
                </div>
                 <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-black border-white/20 rounded-md py-2 px-4 text-white focus:ring-[#ff6600] focus:border-[#ff6600] border" placeholder="Tu Email"/>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-black border-white/20 rounded-md py-2 px-4 text-white focus:ring-[#ff6600] focus:border-[#ff6600] border" placeholder="Tu Mensaje"></textarea>
                </div>
              </div>
              <button type="submit" className="mt-6 w-full bg-[#ff6600] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#e65c00] transition-all duration-300 transform hover:scale-105">
                Enviar Mensaje
              </button>
              {status && <p className="mt-4 text-sm text-center text-white/70">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;