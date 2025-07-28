    import { useState, useRef, useEffect } from "react"

    function Pruebas() {

        const [count, setCount] = useState(0);       // Número que se va mostrando
        const [active, setActive] = useState(false); // Si el número ya entró en pantalla o no
        const ref = useRef(null)
        const final = 70

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(true);
                    }
                },
                { threshold: 0.1 } // Se activa cuando el 50% del <p> está visible
            );

            if (ref.current) observer.observe(ref.current);

            return () => {
                if (ref.current) observer.unobserve(ref.current);
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
            }, 20); // 20 ms = velocidad del conteo

            return () => clearInterval(interval);
        }, [active, count, final]);


        return (





            <div>
                <p ref={ref}>
                    {count}%
                </p>
            </div>
        )
    }

    export default Pruebas