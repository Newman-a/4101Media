import React from 'react';
import CountUp from './CountUp';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  // Extraemos el prefijo y el número del string
  const prefix = value.startsWith('+') ? '+' : '';
  const numberValue = parseInt(value.replace(/[^0-9]/g, ''), 10);

  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-[#ff6600]">
        {prefix}
        <CountUp
          to={numberValue}
          duration={2.5}
          separator="" // Usamos punto como separador de miles
        />
      </p>
      <p className="mt-2 text-sm text-white/70 uppercase tracking-widest">{label}</p>
    </div>
  );
};

export default StatCard;