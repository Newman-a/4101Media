import React from "react";
import { useInView } from "react-intersection-observer";

// Definimos los props
type Props = {
  children: React.ReactNode;
  delay?: number; // Prop opcional para el "stagger"
  className?: string; // Prop opcional para clases extra
};

const AnimateOnScroll: React.FC<Props> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const { ref, inView } = useInView({
    // 'triggerOnce: true' replica tu 'once: true' de GSAP
    triggerOnce: true,
    // (Opcional) El elemento debe estar un 10% visible para activarse
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      // 1. Clases base de la animación
      // 2. Clase 'is-visible' que se añade si 'inView' es true
      // 3. Clases extra que pasemos como prop
      className={`fade-in-up ${
        inView ? "is-visible" : ""
      } ${className}`}
      // Usamos el 'delay' para el efecto 'stagger'
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;