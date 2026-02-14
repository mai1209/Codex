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

  return (
    <div className={style.container} id="portafolio">
      <div className={style.containerAll}>
        <div className={style.containerTitle}>
          <p className={style.title}>{t("done.portfolio")}</p>
        </div>

        <p className={style.subtitle}>
          <span className={style.span}> {t("done.subtitle")} </span>{" "}
          {t("done.subtitle2")}
        </p>

        <div className={style.containerAllProyect}>
          <div className={style.containerBoxOne}>
            <a
              className={style.containerProyect}
              href="https://cheap-shop-three.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                fetchpriority="high"
                className={style.img}
                src="/darko.png"
                alt="wifrut"
              />
              <p className={style.nameProyect}>Darko-shop.com</p>
              <p className={style.descriptionProyect}>
                {t("done.descriptionProyect1")}
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
                src="/crea.webp"
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

          <div className={style.containerBoxTwo}>
            <a
              href="https://growthmanager.app "
              target="_blank"
              rel="noopener noreferrer"
              className={style.containerProyect}
            >
              <img
                fetchpriority="high"
                className={style.img}
                src="/growth.png"
                alt="growth"
              />
              <p className={style.nameProyect}>Growth web app</p>
              <p className={style.descriptionProyect}>
                {t("done.descriptionProyect3")}
              </p>
              <a
                href="https://growthmanager.app "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={style.link} src="/Linking.webp" alt="link" />
              </a>
            </a>

            <div
              onClick={() => navigate("/orion")}
              className={style.containerProyect}
            >
              <img
                fetchpriority="high"
                className={style.img}
                src="/orion.webp"
                alt="orion"
              />
              <p className={style.nameProyect}>Orion hairstudio</p>
              <p className={style.descriptionProyect}>Diseño de marca.</p>
              <a onClick={() => navigate("/orion")}>
                <img className={style.link} src="/Linking.webp" alt="link" />
              </a>
            </div>
          </div>

          <div className={style.containerBoxTres}>
            <div className={style.containerProyect}>
              <img
                fetchpriority="high"
                className={style.img}
                src="/app.webp"
                alt="app"
              />
              <p className={style.nameProyect}>Growth mobile app</p>
              <p className={style.descriptionProyect}>
                {t("done.descriptionProyect4")}
              </p>
              <img
                fetchpriority="high"
                onClick={() => {
                  setActivo(true);
                }}
                className={style.link}
                src="/Linking.webp"
                alt="link"
              />
            </div>

            <a
                href="https://wifrut-livid.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={style.containerProyect}
            >
              <img
                fetchpriority="high"
                className={style.img}
                src="wifrut.webp"
                alt="portafolio"
              />
              <p className={style.nameProyect}>Ecommerce model</p>
              <p className={style.descriptionProyect}>
                {t("done.descriptionProyect5")}
              </p>
              <a
                href="https://wifrut-livid.vercel.app"
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
              Let's build it!
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
      </div>
    </div>
  );
}

export default Done;
