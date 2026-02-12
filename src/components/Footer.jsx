import { useTranslation } from 'react-i18next';
import style from '../styles/Footer.module.css';
import { Link } from "react-router-dom";

function Footer() {
  const { t,  } = useTranslation();

  return (
    <div className={style.container} id="contacto">
      <div className={style.containerTitle}>
        <h2 className={style.title}>{t('footer.title')}</h2>
        <p className={style.subtitle}>
          {t('footer.subtitle')}
        </p>
      </div>

      <div className={style.containerAllLinks}>
        <div className={style.containerLinks}>
          <p className={style.titleNavigation}>{t('footer.navigation')}</p>
          <div className={style.links}>
            <a href="#">{t('footer.home')}</a>
            <a href="#qué-hacemos">{t('footer.whatWeDo')}</a>
            <a href="#portafolio">{t('footer.portfolio')}</a>
            <a href="#nuestro-equipo">{t('footer.team')}</a>
            <a href="#contacto">{t('footer.contact')}</a>
            <Link to="/ask">{t('footer.faq')}</Link>
          </div>
        </div>

        <div className={style.containerLinksBottom}>
          <div className={style.links}>
            <p className={style.titleNavigation}>{t('footer.support')}</p>
            <a href="https://wa.me/5493425543308">+54 9 342 554 3308</a>
            <a href="https://wa.me/5493425400804">+54 9 342 540 0804</a>
          </div>

          <div className={style.links}>
            <p className={style.titleNavigation}>{t('footer.sales')}</p>
            <a href="https://wa.me/543435136669">+54 343 513 6669</a>
          </div>
        </div>
      </div>

      <div className={style.containerDerechos}>
        <p>{t('footer.rights')}</p>
        <div className={style.redes}>
          <a href="https://wa.me/5493425543308">
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

      <img className={style.imgFooter} src="./Brutalism.png" alt="Brutalism" />

     
    </div>
  );
}

export default Footer;
