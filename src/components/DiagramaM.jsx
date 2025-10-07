import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import style from '../styles/DiagramaM.module.css';

function DiagramaM() {
  const { t } = useTranslation();
  const services = t('diagrama.services', { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const descriptionRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const activeElement = descriptionRefs.current[activeIndex];
    if (container && activeElement) {
      container.scrollTo({ top: activeElement.offsetTop, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div id='consulta-nuestros-servicios' className={style.container}>
      <p className={style.title}>{t('diagrama.title')}</p>

      <div className={style.containerAll}>
        <div className={style.containerTitleGeneral}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${style.containerTitle} ${index === activeIndex ? style.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <p className={style.serviceTitle}>{service.title}</p>
              <img
                fetchpriority="high"
                className={style.arrowLeft}
                src="./left.webp"
                alt="arrow"
              />
            </div>
          ))}
        </div>

        <div ref={containerRef} className={style.containerDescription}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${style.containerDescriptionIndividual} ${index === activeIndex ? style.activeDescription : ''}`}
              ref={el => (descriptionRefs.current[index] = el)}
            >
              <p className={style.serviceTitleDescription}>{service.title}</p>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiagramaM;
