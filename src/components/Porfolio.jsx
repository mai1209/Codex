import style from "../styles/Done.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Porfolio() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activo, setActivo] = useState(false);
  const [entregado, setEntregado] = useState(false);
  const [disponible, setDisponible] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.btnHome}>
        <button onClick={() => navigate('/')}>Volver</button>
      </div>

      <div className={style.containerTitle}>
        <p className={style.title}>{t("done.portfolio")}</p>
      </div>

      <div className={style.containerAllProyect}>

   {/* Buzos de Regatas */}
        <a className={style.containerProyect} href="https://buzos-de-regatas.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img className={style.img} src="/buzosregatas.webp" alt="Buzos de Regatas" />
          <p className={style.nameProyect}>{t("done.nameProyect10")}</p>
          <p className={style.descriptionProyect}>{t("done.descriptionProyect10")}</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </a>

   {/* TecniTower */}
        <div onClick={() => setEntregado(true)} className={style.containerProyect} style={{cursor: 'pointer'}}>
          <img className={style.img} src="/tecnitower.webp" alt="TecniTower" />
          <p className={style.nameProyect}>{t("done.nameProyect9")}</p>
          <p className={style.descriptionProyect}>{t("done.descriptionProyect9")}</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </div>

   {/* ShiftHub */}
        <a className={style.containerProyect} href="https://www.shifthubycodex.com/" target="_blank" rel="noopener noreferrer">
          <img className={style.img} src="/shifthub.webp" alt="ShiftHub" />
          <p className={style.nameProyect}>{t("done.nameProyect8")}</p>
          <p className={style.descriptionProyect}>{t("done.descriptionProyect8")}</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </a>

   {/* Barber App */}
        <a className={style.containerProyect} href="https://www.barberappbycodex.com" target="_blank" rel="noopener noreferrer">
          <img className={style.img} src="/barberLanding.webp" alt="Barber App" />
          <p className={style.nameProyect}>Booking App for Barbershops</p>
          <p className={style.descriptionProyect}>{t("done.descriptionProyect7")}</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </a>

        {/* Darko */}
        <a className={style.containerProyect} href="https://cheap-shop-three.vercel.app" target="_blank" rel="noopener noreferrer">
          <img className={style.img} src="/darko.webp" alt="Darko" />
          <p className={style.nameProyect}>Darko-shop.com</p>
          <p className={style.descriptionProyect}>{t("done.descriptionProyect1")}</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </a>

        {/* Crea Marketing */}
        <a className={style.containerProyect} href="https://creamarketingparavos.com" target="_blank" rel="noopener noreferrer">
          <img className={style.img} src="/crea-landing.webp" alt="Crea" />
          <p className={style.nameProyect}>creamarketingparavos.com</p>
          <p className={style.descriptionProyect}>{t("done.descriptionProyect2")}</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </a>

        {/* Growth Web */}
        <a className={style.containerProyect} href="https://growthmanager.app" target="_blank" rel="noopener noreferrer">
          <img className={style.img} src="/growth-landing.webp" alt="Growth" />
          <p className={style.nameProyect}>Growth web app</p>
          <p className={style.descriptionProyect}>{t("done.descriptionProyect3")}</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </a>

        {/* Orion */}
        <div onClick={() => navigate("/orion")} className={style.containerProyect} style={{cursor: 'pointer'}}>
          <img className={style.img} src="/orion.webp" alt="Orion" />
          <p className={style.nameProyect}>Orion hairstudio</p>
          <p className={style.descriptionProyect}>Diseño de marca.</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </div>

        {/* Growth Mobile */}
        <div onClick={() => setDisponible(true)} className={style.containerProyect} style={{cursor: 'pointer'}}>
          <img className={style.img} src="/growthapp.webp" alt="Growth App Mobile" />
          <p className={style.nameProyect}>Growth mobile app</p>
          <p className={style.descriptionProyect}>{t("done.descriptionProyect4")}</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </div>

        {/* Ecommerce Model */}
        <a className={style.containerProyect} href="https://wifrut-livid.vercel.app" target="_blank" rel="noopener noreferrer">
          <img className={style.img} src="/wifrut.webp" alt="Wifrut" />
          <p className={style.nameProyect}>Ecommerce model</p>
          <p className={style.descriptionProyect}>{t("done.descriptionProyect5")}</p>
          <img className={style.link} src="/Linking.webp" alt="link" />
        </a>
      </div>

      {/* PopUp */}
      <div
        className={`${style.secondFondo} ${activo || entregado || disponible ? style.activo : ""}`}
        onClick={() => { setActivo(false); setEntregado(false); setDisponible(false); }}
      />
      <div className={`${style.popUp} ${activo ? style.activo : ""}`}>
        <h2> {t("done.popUp")} </h2>
        <p className={style.description}>{t("done.description")} #LetsBuildIt</p>
        <button className={style.btnButton} onClick={() => setActivo(false)}>Let's build it!</button>
      </div>

      {/* PopUp app disponible (Growth) */}
      <div className={`${style.popUp} ${disponible ? style.activo : ""}`}>
        <h2> {t("done.popUpAvailable")} </h2>
        <p className={style.description}>{t("done.descriptionAvailable")}</p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            className={style.btnButton}
            href="https://apps.apple.com/ar/app/growthmanager/id6781464707"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            {t("done.appStoreButton")}
          </a>
          <a
            className={style.btnButton}
            href="https://www.growthmanager.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            {t("done.webButton")}
          </a>
        </div>
      </div>

      {/* PopUp proyecto entregado (TecniTower) */}
      <div className={`${style.popUp} ${entregado ? style.activo : ""}`}>
        <h2> {t("done.popUpDelivered")} </h2>
        <p className={style.description}>{t("done.descriptionDelivered")}</p>
        <button className={style.btnButton} onClick={() => setEntregado(false)}>Let's build it!</button>
      </div>
    </div>
  );
}

export default Porfolio;