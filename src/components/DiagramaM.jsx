import { useTranslation } from "react-i18next";
import style from "../styles/DiagramaM.module.css";

const DiagramaM = () => {
  const { t } = useTranslation();
  const services = t("diagrama.services", { returnObjects: true }) || [];
  const titleMove = t(
    "diagrama.titleMove",
    "INNOVATION • CREATIVITY • FUTURE •",
  );

  return (
    <div id="consulta-nuestros-servicios" className={style.container}>
      <div className={style.problemSection}>
        <h3 className={style.problemTitle}>
          {t("diagrama.problemHeader")}
          <span className={style.simbol}>[!]</span>{" "}
        </h3>
        <p className={style.problemText}>{t("diagrama.problemDescription")}</p>
      </div>
      <h2 className={style.title}>{t("diagrama.title")}</h2>
      <p className={style.subtitle}>
        {t("wedo.textFirst")} <br /> {t("wedo.textSecond")}
      </p>
      {/* Grid estilo Bento */}
      <div className={style.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={style.serviceCard}>
            <div className={style.cardIcon}>
              <img src="./left.webp" className={style.arrowIcon} alt="icon" />
            </div>
            <div className={style.cardContent}>
              <h3 className={style.serviceTitleDescription}>{service.title}</h3>
              <p className={style.serviceDescription}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Marquee con inclinación */}
      <div className={style.marqueeWrapper}>
        <div className={style.marqueeMove}>
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <span key={i} className={style.titleMove}>
                {titleMove}
              </span>
            ))}
        </div>
      </div>

      {/* Video con bordes redondeados profundos */}
      <section className={style.videoSection}>
        <div className={style.videoContainer}>
          <iframe
            className={style.videoIframe}
            src="https://www.youtube.com/embed/B8VV75AdHco?autoplay=1&mute=1&loop=1&playlist=B8VV75AdHco&controls=0"
            title="Video Reel"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default DiagramaM;
