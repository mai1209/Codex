import { useRef } from 'react';
import style from '../styles/Diagrama.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


// Array con la información de los servicios para no repetir código
const services = [
    {
        title: 'Desarrollo Web',
        description: '*Creamos sitios web innovadores, optimizados y adaptados a tus necesidades.'
    },
    {
        title: 'Comunicación',
        description: 'Mensajes estratégicos que fortalecen la conexión con tu público. "No es lo que vendes, sino como lo vendes."'
    },
    {
        title: 'Marketing',
        description: 'Impulsamos tu marca con campañas estratégicas para maximizar su alcance y relevancia.'
    },
    {
        title: 'Identidad Visual',
        description: 'Diseños que transmiten tu esencia y conectan con tu audiencia.'
    },
    {
        title: 'Estrategia y Diseño',
        description: 'Estrategias visuales y conceptuales que dan vida a tus ideas.'
    },
    {
        title: 'Aplicaciones Móviles',
        description: 'Apps funcionales e intuitivas que destacan por su diseño y rendimiento.'
    }
];

function Diagrama() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.3", "end 0.1"]
    });
    
    // Creamos un array de progresos escalonados para cada item
    const itemProgress = services.map((_, i) => {
        const start = i * 0.1;
        const end = start + 0.2;
        return useTransform(scrollYProgress, [start, end], [0, 1]);
    });

    return (
        <div className={style.container} id='consulta-nuestros-servicios' ref={containerRef}>
            <h2 className={style.title}>Servicios</h2>
            <section className={style.servicesSection}>
                <div className={style.servicesGrid}>
                    {services.map((service, index) => (
                        <ServiceItem 
                            key={index}
                            title={service.title}
                            description={service.description}
                            progress={itemProgress[index]}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

const ServiceItem = ({ title, description, progress }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <motion.div 
            className={style.serviceItem}
            ref={ref}
            initial={{ height: 150 }}
            style={{
                height: progress.get() > 0.1 ? "auto" : 60
            }}
        >
            <p className={style.serviceTitle}>{title}</p>
            <motion.p 
                className={style.serviceDescription}
                style={{
                    opacity: progress,
                    y: useTransform(progress, [0, 1], [-10, 0])
                }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default Diagrama;