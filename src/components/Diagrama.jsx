import style from '../styles/Diagrama.module.css';

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
    return (
        <div className={style.container} id='consulta-nuestros-servicios'>
          
            <h2 className={style.title}>Servicios</h2>
            <section className={style.servicesSection}>
                <div className={style.servicesGrid}>
                    {services.map((service, index) => (
                        <div className={style.serviceItem} key={index}>
                            <p className={style.serviceTitle}>
                                {service.title}
                            </p>
                            <p className={style.serviceDescription}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Diagrama;