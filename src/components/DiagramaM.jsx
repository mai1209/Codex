import style from '../styles/DiagramaM.module.css';

// Array con la información de los servicios para no repetir código
const services = [
    {
        title: 'Web Development',
        description: '*Creamos sitios web innovadores, optimizados y adaptados a tus necesidades.'
    },
    {
        title: 'Communication',
        description: 'Mensajes estratégicos que fortalecen la conexión con tu público. "No es lo que vendes, sino como lo vendes."'
    },
    {
        title: 'Marketing',
        description: 'Impulsamos tu marca con campañas estratégicas para maximizar su alcance y relevancia.'
    },
    {
        title: 'Visual Identity',
        description: 'Diseños que transmiten tu esencia y conectan con tu audiencia.'
    },
    {
        title: 'Strategy & Design',
        description: 'Estrategias visuales y conceptuales que dan vida a tus ideas.'
    },
    {
        title: 'Mobile Applications',
        description: 'Apps funcionales e intuitivas que destacan por su diseño y rendimiento.'
    }
];

function Diagrama() {
    return (
        <div className={style.container} id='consulta-nuestros-servicios'>
            {/* Video de fondo para toda la página */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className={style.videoBackground}
            >
                <source src="/Codex/video.mp4" type="video/mp4" />
                <p>El video no se carga. Revisa la consola para errores.</p>
            </video>
            <h2 className={style.title}>Services</h2>
            <section className={style.servicesSection}>
                <div className={style.servicesGrid}>
                    {/* Mapeamos el array de servicios para crear cada item */}
                    {services.map((service, index) => (
                        <div className={style.serviceItem} key={index}>
                            {/* El texto descriptivo que se mostrará al hacer hover */}
                            <p className={style.serviceDescription}>
                                {service.description}
                            </p>
                            {/* El título del servicio que siempre es visible */}
                            <p className={style.serviceTitle}>
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Diagrama;