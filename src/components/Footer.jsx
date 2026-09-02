import { useTranslation } from "react-i18next";
import style from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className={style.container} id="contacto">
      <div className={style.containerTitle}>
        <h2 className={style.title}>{t("footer.title")}</h2>
        <p className={style.subtitle}>{t("footer.subtitle")}</p>

        <svg
          className={style.rocketScene}
          viewBox="0 0 240 170"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className={style.trail}
            d="M12 160 Q78 152 102 102"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="0.5 14.5"
          />
          <g transform="translate(150 8) rotate(45)">
            <g className={style.rocketBob}>
              <g className={style.flame}>
                <path
                  d="M32 68 C39 77 39 86 32 95 C25 86 25 77 32 68 Z"
                  fill="#fff"
                  stroke="#070a0c"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 74 C35.5 79 35.5 84 32 88.5 C28.5 84 28.5 79 32 74 Z"
                  fill="var(--color-crimson)"
                />
              </g>
              <path d="M18 50 L7 70 L18 65 Z" fill="#070a0c" />
              <path d="M46 50 L57 70 L46 65 Z" fill="#070a0c" />
              <path
                d="M32 3 C42 15 46 29 46 43 L46 63 L18 63 L18 43 C18 29 22 15 32 3 Z"
                fill="#fff"
                stroke="#070a0c"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path d="M26 63 L38 63 L36 70 L28 70 Z" fill="#070a0c" />
              <circle
                cx="32"
                cy="35"
                r="8"
                fill="var(--color-crimson)"
                stroke="#070a0c"
                strokeWidth="3"
              />
            </g>
          </g>
        </svg>
      </div>

      <div className={style.containerAllLinks}>
        <div className={style.containerLinks}>
          <p className={style.titleNavigation}>{t("footer.navigation")}</p>
          <div className={style.links}>
            <a href="#">{t("footer.home")}</a>
            <a href="#qué-hacemos">{t("footer.whatWeDo")}</a>
            <a href="#portafolio">{t("footer.portfolio")}</a>
            <a href="#nuestro-equipo">{t("footer.team")}</a>
            <a href="#contacto">{t("footer.contact")}</a>
            <Link to="/ask">{t("footer.faq")}</Link>
          </div>
        </div>

        <div className={style.containerLinksBottom}>
          <div className={style.links}>
            <p className={style.titleNavigation}>{t("footer.support")}</p>
            <a
              href="https://wa.me/5493425543308"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 342 554 3308
            </a>
            <a
              href="https://wa.me/5493425400804"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 342 540 0804
            </a>
          </div>

          <div className={style.links}>
            <p className={style.titleNavigation}>{t("footer.sales")}</p>
            <a
              href="https://wa.me/543435136669"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 343 513 6669
            </a>
          </div>
        </div>
      </div>

      <div className={style.containerDerechos}>
        <p>{t("footer.rights")}</p>
        <div className={style.redes}>
          <a
            href="https://wa.me/5493425543308"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./WhatsAppBlanco.webp" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/codexcorporation">
            <img src="./Instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/109157270/admin/dashboard/">
            <img src="./LinkedIn.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className={style.wordmarkWrap} aria-hidden="true">
        <span className={style.wordmark}>CODEX</span>
      </div>
    </div>
  );
}

export default Footer;
