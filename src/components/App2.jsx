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
      <section className={style.container}>
        {/* NAV superior / marquee: se mantiene */}
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

        {/* Rediseño hero */}
        <div className={style.heroWrap}>
          <div className={style.heroCard}>
            <div className={style.heroGrid}>
              <div className={style.leftColumn}>
                <div className={style.badgeRow}>
                  <span className={style.badge}>{t("app.heroBadge1")}</span>
                  <span className={style.badgeDot}>•</span>
                  <span className={style.badge}>{t("app.heroBadge2")}</span>
                  <span className={style.badgeDot}>•</span>
                  <span className={style.badge}>{t("app.heroBadge3")}</span>
                </div>

                <div className={style.containerTextHome}>
                  <p className={style.line1}>{t("app.title1")}</p>
                  <p className={style.line2}>{t("app.title2")}</p>
                  <p className={style.line3}>{t("app.title3")}</p>
                  <p className={style.line4}>{t("app.title4")}</p>
                </div>

                <p className={style.heroDescription}>
                  {t("app.secondaryText3")}
                </p>

                <div className={style.ctaRow}>
                  <a
                    href="https://wa.me/5493425543308"
                    className={style.containerBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={style.btnWp}
                      src="/WhatsAppBlanco.webp"
                      alt="whatsapp"
                    />
                    <span className={style.btnText}>{t("app.textBtn")}</span>
                  </a>

                  <a
                    href="#servicios"
                    className={style.secondaryBtn}
                  >
                    {t("app.viewServices")}
                  </a>
                </div>

                <div className={style.featureBlock}>
                  <div className={style.featureItem}>
                    <span className={style.featureIcon}>✦</span>
                    <p>{t("app.feature1")}</p>
                  </div>

                  <div className={style.featureItem}>
                    <span className={style.featureIcon}>◉</span>
                    <p>{t("app.feature2")}</p>
                  </div>

                  <div className={style.featureItem}>
                    <span className={style.featureIcon}>➜</span>
                    <p>{t("app.feature3")}</p>
                  </div>
                </div>
              </div>

              <div className={style.rightColumn}>
                <div className={style.robotVisual}>
                  <div className={style.glowOne}></div>
                  <div className={style.glowTwo}></div>

                  <img className={style.robot} src="/bigrobot.png" alt="robot" />

                  <div className={style.robotInfoCard}>
                    <p className={style.textFirst}>{t("app.secondaryText4")}</p>
                    <p className={style.textSecond}>CODEX™</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flechas flotantes */}
        <button
          type="button"
          className={`${style.containerArrowSubir} ${
            showArrow ? style.showArrow : ""
          }`}
          onClick={scrollToTop}
          aria-label="Subir"
          title="Subir"
        >
          <img
            className={style.arrowSubirImg}
            src="/arrowup.webp"
            alt="flecha-subir"
            loading="lazy"
            fetchpriority="high"
          />
        </button>

        <a
          href="https://wa.me/543435136669"
          target="_blank"
          rel="noopener noreferrer"
          className={`${style.containerWpSubir} ${
            showArrow ? style.showArrow : ""
          }`}
          aria-label="Abrir WhatsApp"
          title="Abrir WhatsApp"
        >
          <img
            className={style.arrowSubirImg}
            src="/whatsappArrow.png"
            alt="whatsapp"
            loading="lazy"
            fetchpriority="high"
          />
        </a>
      </section>
    );
  }

  export default App2;
