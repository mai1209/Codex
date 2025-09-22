import { useState, useRef, useEffect } from 'react';
import style from '../styles/DiagramaM.module.css';

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
  },

];

const servicesdos = [
  {
    title: 'Desarrollo Web',
    description: 'Creamos sitios web innovadores, optimizados y adaptados a tus necesidades.'
  },
  {
    title: 'Comunicación',
    description: 'Mensajes estratégicos que fortalecen la conexión con tu público. "No es lo que vendes, sino como lo vendes."'
  },
 

];

function DiagramaM() {
  const [activeIndex, setActiveIndex] = useState(0);
  const descriptionRefs = useRef([]);
  const containerRef = useRef(null); 

  useEffect(() => {
    const container = containerRef.current;
    const activeElement = descriptionRefs.current[activeIndex];

    if (container && activeElement) {
      container.scrollTo({
        top: activeElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <div  id='consulta-nuestros-servicios'  className={style.container}>
      <p className={style.title}>
        Servicios
      </p>

      <div className={style.containerAll}>
        <div className={style.containerTitleGeneral}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${style.containerTitle} ${index === activeIndex ? style.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <p className={style.serviceTitle}>{service.title}</p>
              <img fetchpriority="high" className={style.arrowLeft} src="./left.webp" alt="arrow" />
            </div>
          ))}
        </div>

        <div ref={containerRef} className={style.containerDescription}>
          {services.map((service, index) => (
            <div
              key={index}
             className={`${style.containerDescriptionIndividual} ${index === activeIndex ? style.activeDescription : ''}`}
              ref={el => descriptionRefs.current[index] = el}
            >
              <p className={style.serviceTitleDescription}>{service.title}</p>
              <p>{service.description}</p>
            </div>
          ))}

            {servicesdos.map((service, index) => (
            <div
            
             className={`${style.containerDescriptionIndividual} ${index === activeIndex ? style.activeDescription : ''}`}
              
            >
              <p className={style.serviceTitleDescription}>{service.title}</p>
              <p>{service.description}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default DiagramaM;