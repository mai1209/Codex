import { useEffect, useRef, useState } from 'react';

const ContadorAnimado = ({ final = 70 }) => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const animationFrameId = useRef(); 

  // Este useEffect para el IntersectionObserver se queda igual
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.9 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  useEffect(() => {
    if (!active) return;

    const duration = 1500; 
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const newCount = Math.floor(percentage * final);
      
      setCount(newCount);

      if (progress < duration) {
        // Si no hemos terminado, pedimos el siguiente frame
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    // Inicia la animación
    animationFrameId.current = requestAnimationFrame(animate);

    // Función de limpieza para cancelar la animación si el componente se desmonta
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [active, final]);


  return (
    <p ref={ref}>
      {count}%
    </p>
  );
};

export default ContadorAnimado;