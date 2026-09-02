import { useEffect, useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import style from "../styles/DiagramaM.module.css";

const DiagramaM = () => {
  const { t } = useTranslation();
  const services = t("diagrama.services", { returnObjects: true }) || [];
  const serviceIcons = [
    "/services/icon-web.webp",
    "/services/icon-comunicacion.webp",
    "/services/icon-marketing.webp",
    "/services/icon-identidad.webp",
    "/services/icon-estrategia.webp",
    "/services/icon-app.webp",
  ];
  const servicePhotos = [
    "/services/ph-web.webp",
    "/services/ph-comunicacion.webp",
    "/services/ph-marketing.webp",
    "/services/ph-identidad.webp",
    "/services/ph-estrategia.webp",
    "/services/ph-app.webp",
  ];

  const hScrollRef = useRef(null);
  const trackRef = useRef(null);
  const maxShiftRef = useRef(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      if (window.innerWidth < 900) {
        maxShiftRef.current = 0;
        return;
      }
      const shift = trackRef.current.scrollWidth - window.innerWidth;
      maxShiftRef.current = shift > 0 ? shift : 0;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: hScrollRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, (v) => -v * maxShiftRef.current);
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
      {/* Carrusel horizontal manejado por el scroll vertical */}
      <section ref={hScrollRef} className={style.hScrollSection}>
        <div className={style.hSticky}>
          <Motion.div ref={trackRef} style={{ x }} className={style.hTrack}>
            {services.map((service, index) => (
              <div key={index} className={style.serviceCard}>
                <img
                  loading="lazy"
                  className={style.cardPhoto}
                  src={servicePhotos[index]}
                  alt=""
                />
                <div className={style.cardShade} />
                <p className={style.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className={style.cardIcon}>
                  <img src="./left.webp" className={style.arrowIcon} alt="icon" />
                </div>
                <div className={style.cardContent}>
                  <div className={style.titleRow}>
                    <img
                      loading="lazy"
                      className={style.serviceIcon}
                      src={serviceIcons[index]}
                      alt=""
                    />
                    <h3 className={style.serviceTitleDescription}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={style.serviceDescription}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* Marquee */}
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
