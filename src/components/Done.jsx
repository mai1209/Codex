import style from "../styles/Done.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Done() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activo, setActivo] = useState(false);

  const handleClosePopup = () => {
    setActivo(false);
  };
    // 1. Lista de logos (Pon aquí los nombres de tus archivos de logos)
  const logos = [
    "./logo1.webp", 
    "./logo2.webp", 
    "./logo3.webp", 
    "./logo4.webp", 
    "./logo5.webp", 
    "./logo6.webp"
  ];

  return (
    <div className={style.container} id="portafolio">
      <div className={style.containerAll}>
        <div
          onClick={() => navigate("/porfolio")}
          className={style.containerTitle}
        >

          <p className={style.title}>{t("done.portfolio")}</p>
        </div>

        <div className={style.containerAllProyect}>
          <div className={style.containerBoxOne}>
            <a
              className={style.containerProyect}
              href="https://www.barberappbycodex.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                fetchpriority="high"  
                className={style.img}
                src="/barberPorfolioImg.png"
                alt="barberiaWeb"
              />
              <p className={style.nameProyect}>Booking App for Barbershops</p>
              <p className={style.descriptionProyect}>
                {t("done.descriptionProyect7")}
              </p>
              <a
                href="https://cheap-shop-three.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  fetchpriority="high"
                  className={style.link}
                  src="/Linking.webp"
                  alt="link"
                />
              </a>
            </a>

            <a
              href="https://creamarketingparavos.com"
              className={style.containerProyect}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                fetchpriority="high"
                className={style.img}
                src="/crea.png"
                alt="crea"
              />
              <p className={style.nameProyect}>creamarketingparavos.com</p>
              <p className={style.descriptionProyect}>
                {t("done.descriptionProyect2")}
              </p>
              <a
                href="https://creamarketingparavos.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  fetchpriority="high"
                  className={style.link}
                  src="/Linking.webp"
                  alt="link"
                />
              </a>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`${style.secondFondo} ${activo ? style.activo : ""}`}
        onClick={handleClosePopup}
      ></div>

      <div className={`${style.containerPopUp} ${activo ? style.activo : ""}`}>
        <div className={`${style.popUp} ${activo ? style.activo : ""}`}>
          <h2> {t("done.popUp")} </h2>
          <p className={style.description}>
            {t("done.description")} #LetsBuildIt
          </p>
          <div className={style.btnContainer}>
            <button
              className={style.btnButton}
              onClick={() => {
                setActivo(false);
              }}
            >
              {t("done.buildButton")}
            </button>
          </div>
          <div className={style.containerImg}>
            <img className={style.popUpImg} src="./popUp.webp" alt="popup" />
            <img
              className={style.logoBlanco}
              src="./logoblanco.webp"
              alt="logo"
            />
          </div>
        </div>

        <p onClick={() => navigate("/porfolio")} className={style.portfolio}>
          {t("done.fullPortfolio")}
        </p>
      </div>
         {/* Carrusel de Logos con Flujo Infinito */}
            <div className={style.carouselContainer}>
              <div className={style.carouselTrack}>
                {/* Duplicamos la lista para que el scroll sea infinito y sin cortes */}
                {[...logos, ...logos].map((logo, index) => (
                  <div key={index} className={style.logoItem}>
                    <img src={logo} alt={`brand-logo-${index}`} />
                  </div>
                ))}
              </div>
            </div>
    </div>
  );
}

export default Done;
