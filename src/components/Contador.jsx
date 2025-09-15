  import { useEffect, useRef, useState } from 'react';

  const ContadorAnimado = ({ final = 70 }) => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(true);
          }
        },
        { threshold: 0.9 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    useEffect(() => {
      if (!active || count >= final) return;

      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < final) return prev + 1;
          clearInterval(interval);
          return final;
        });
      }, 20);

      return () => clearInterval(interval);
    }, [active, count, final]);

    return (
      <p ref={ref}>
        {count}%
      </p>
    );
  };

  export default ContadorAnimado;
