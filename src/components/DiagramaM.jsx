import style from '../styles/DiagramaM.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Array con la información de los servicios para no repetir código
const services = [
    {
        title: 'Desarrollo Web',
        description: 'Creamos sitios web innovadores, optimizados y adaptados a tus necesidades.'
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
        title: 'Estrategia & Diseño',
        description: 'Estrategias visuales y conceptuales que dan vida a tus ideas.'
    },
    {
        title: 'Aplicación Móvil',
        description: 'Apps funcionales e intuitivas que destacan por su diseño y rendimiento.'
    }
];

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

function Diagrama() {
    // Configuración para detectar cuando el elemento está en vista
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div className={style.container} id='consulta-nuestros-servicios' ref={ref}>
            <h2 className={style.title}>Servicios</h2>
            <motion.section 
                className={style.servicesSection}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <div className={style.servicesGrid}>
                    {/* Mapeamos el array de servicios para crear cada item */}
                    {services.map((service, index) => (
                        <motion.div 
                            className={style.serviceItem} 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* El texto descriptivo que se mostrará al hacer hover */}
                            <p className={style.serviceDescription}>
                                {service.description}
                            </p>
                            {/* El título del servicio que siempre es visible */}
                            <p className={style.serviceTitle}>
                                {service.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}

export default Diagrama;