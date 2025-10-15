import React, { useState, useEffect, useMemo } from 'react';
import { RefreshCw, Clock, Wrench } from 'lucide-react'; // Íconos de React (asumiendo que usas lucide-react o similar)

// ----------------------------------------------------
// 1. Lógica del Temporizador
// ----------------------------------------------------

// Calcula la fecha de reapertura: 7 días (1 semana) a partir de ahora
const calculateTargetDate = () => {
  const target = new Date();
  target.setDate(target.getDate() + 7); // Suma 7 días
  // Opcional: Establecer una hora específica (ej: Medianoche del día 7)
  // target.setHours(0, 0, 0, 0); 
  return target.getTime();
};

// Define la fecha objetivo usando useMemo para que no se recalcule
const TARGET_TIME = calculateTargetDate();

const getTimeRemaining = (targetTime: number) => {
  const now = new Date().getTime();
  const distance = targetTime - now;

  // Cálculos de tiempo
  //Explicacion 
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days: days > 0 ? days : 0,
    hours: hours > 0 ? hours : 0,
    minutes: minutes > 0 ? minutes : 0,
    seconds: seconds > 0 ? seconds : 0,
    isComplete: distance < 0,
  };
};

// Componente para mostrar una unidad del temporizador (Días, Horas, etc.)
const TimerUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center bg-[#ff6600]/10 p-4 rounded-xl">
    <span className="text-5xl font-extrabold text-[#ff6600]">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-sm font-semibold text-white/80 mt-1">{label}</span>
  </div>
);

// ----------------------------------------------------
// 2. Componente Principal
// ----------------------------------------------------

const MaintenancePage: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(() => getTimeRemaining(TARGET_TIME));
  
  // Efecto para actualizar el temporizador cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(TARGET_TIME));
    }, 1000);

    // Limpieza del intervalo
    return () => clearInterval(timer);
  }, []);

  // Mensaje a mostrar si el tiempo ha terminado
  const finalMessage = timeRemaining.isComplete 
    ? "¡Estamos de vuelta! Bienvenido/a."
    : "Actualizando para un mejor servicio";

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center p-8 md:p-12 border-2 border-[#ff6600]/30 rounded-2xl shadow-2xl shadow-[#ff6600]/20">
        
        {/* Ícono de Mantenimiento */}
        <div className="flex justify-center mb-6">
          <Wrench className="w-16 h-16 text-[#ff6600] animate-pulse" />
        </div>

        {/* Encabezado */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
          Mantenimiento <span className="text-[#ff6600]">Programado</span>
        </h1>
        <p className="text-xl text-white/70 mb-10">
          {finalMessage}
        </p>

        {/* Contador Regresivo */}
        {!timeRemaining.isComplete && (
          <>
            <div className="flex justify-center space-x-4 md:space-x-6 mb-10">
              <TimerUnit value={timeRemaining.days} label="Días" />
              <TimerUnit value={timeRemaining.hours} label="Horas" />
              <TimerUnit value={timeRemaining.minutes} label="Minutos" />
              <TimerUnit value={timeRemaining.seconds} label="Segundos" />
            </div>

            <p className="text-sm text-white/50 flex items-center justify-center">
              <Clock className="w-4 h-4 mr-2" />
              Estaremos en línea nuevamente en: {new Date(TARGET_TIME).toLocaleDateString()}
            </p>
          </>
        )}

        {/* Contacto / Refresco */}
        {timeRemaining.isComplete && (
            <button
                onClick={() => window.location.reload()}
                className="mt-8 px-8 py-3 bg-[#ff6600] text-black font-bold rounded-lg hover:bg-[#e05500] transition-colors duration-300 flex items-center mx-auto"
            >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refrescar la página
            </button>
        )}

      </div>
    </div>
  );
};

export default MaintenancePage;