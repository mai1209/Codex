import style from "../styles/App2.module.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function App2() {
  const { t } = useTranslation();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const nearBottom = scrollTop + windowHeight > documentHeight - 150;
      setShowArrow(scrollTop > 200 && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const titleNavTop = t("diagrama.titleNavTop");
  const repeatedText = Array(6).fill(titleNavTop);
  return (
    <div className={style.container}>
      <div className={style.marqueeWrapper}>
        <div className={style.marqueeMove}>
          {repeatedText.map((text, i) => (
            <span key={`a-${i}`} className={style.titleMoveTOP}>
              {text}
            </span>
          ))}
          {repeatedText.map((text, i) => (
            <span key={`b-${i}`} className={style.titleMoveTOP}>
              {text}
            </span>
          ))}
        </div>
      </div>
      <div className={style.containerInfo}>
        <div className={style.containerInfoText}>
          <div className={style.containerTextHome}>
            <p>{t("app.title1")}</p>
            <p>{t("app.title2")}</p>
            <p>{t("app.title3")}</p>
            <p>{t("app.title4")}</p>
          </div>
          <div className={style.row}></div>

          <a href="https://wa.me/5493425543308" className={style.containerBtn}>
            <img
              className={style.btnWp}
              src="/WhatsAppBlanco.webp"
              alt="whatsapp"
            />
            <button className={style.btnText}>{t("app.textBtn")} </button>
          </a>
          <div className={style.containerSecondaryText}>
            <p className={style.secondaryText}>{t("app.secondaryText3")}</p>
          </div>
        </div>

        <div className={style.containerRobotInfo}>
          <div className={style.containerRobot}>
            <img className={style.robot} src="/bigrobot.png" alt="robot" />
          </div>
          <div className={style.containerTextRobot}>
            <p className={style.textFirst}>
              Potencia tu negocio en la era digital
            </p>
            <p className={style.textSecond}>CODEX™</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;
