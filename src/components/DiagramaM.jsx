import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "../styles/DiagramaM.module.css";
import styles from "../styles/Team.module.css";

//import { i } from "framer-motion/client";

function DiagramaM() {
  const { t } = useTranslation();
  const services = t("diagrama.services", { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const descriptionRefs = useRef([]);
  const containerRef = useRef(null);
  const titleMove = t("diagrama.titleMove");
  const repeatedText = Array(6).fill(titleMove);

  const YouTubeLazy = ({ videoId }) => {
    return (
      <div className={style.videoBackgroundContainer}>
        <iframe
          className={style.videoBackground}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&iv_load_policy=3&modestbranding=1`}
          title="YouTube video background player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  const logos = [
    "./logo1.webp",
    "./logo2.webp",
    "./logo3.webp",
    "./logo4.webp",
    "./logo5.webp",
    "./logo6.webp",
    "./logo7.webp",
    "./logo8.webp",
  ];

  const allLogos = [...logos, ...logos];

  useEffect(() => {
    const container = containerRef.current;
    const activeElement = descriptionRefs.current[activeIndex];
    if (container && activeElement) {
      container.scrollTo({ top: activeElement.offsetTop, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <div id="consulta-nuestros-servicios" className={style.container}>
      <p className={style.title}>{t("diagrama.title")}</p>

      <div className={style.containerAll}>
        <div className={style.containerTitleGeneral}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${style.containerTitle} ${index === activeIndex ? style.active : ""}`}
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
              className={`${style.containerDescriptionIndividual} ${index === activeIndex ? style.activeDescription : ""}`}
              ref={(el) => (descriptionRefs.current[index] = el)}
            >
              <p className={style.serviceTitleDescription}>{service.title}</p>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={style.marqueeWrapper}>
          <div className={style.marqueeMove}>
            {repeatedText.map((text, i) => (
              <span key={`a-${i}`} className={style.titleMove}>
                {text}
              </span>
            ))}
            {repeatedText.map((text, i) => (
              <span key={`b-${i}`} className={style.titleMove}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <YouTubeLazy videoId="B8VV75AdHco" />

      <div className={styles.carouselContainer}>
        <p className={styles.title}> <span className={style.asterisk}>*</span>{t("diagrama.titleSome")}<span className={style.asterisk}>*</span> </p>
        <div className={styles.carouselTrack}>
          {allLogos.map((src, idx) => (
            <div className={styles.logoItem} key={idx}>
              <img src={src} alt={`logo${(idx % logos.length) + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiagramaM;
