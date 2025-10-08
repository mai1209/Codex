import { useState } from 'react';
import style from '../styles/App.module.css';
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Nav() {
    const { t, i18n } = useTranslation();
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const menuItems = [
        { key: 'whatWeDo', path: '#qué-hacemos' },
        { key: 'services', path: '#consulta-nuestros-servicios' },
        { key: 'portfolio', path: '#portafolio' },
        { key: 'team', path: '#nuestro-equipo' },
        { key: 'faq', route: '/ask' },
        { key: 'pricing', route: '/pricing' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleMenuItemClick = (index) => {
        setActiveMenuIndex(index);
        closeMenu();
    };


    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };


    return (
        <div>
            <div className={style.containerArrowSubir}>
                <img
                    className={style.arrowSubirImg}
                    src="./arrowup.webp"
                    alt="flecha-subir"
                    onClick={scrollToTop}
                    loading="lazy"
                    fetchpriority="high"
                />
            </div>

            <nav>
                <div className={style.welcome}>
                    <img
                        fetchpriority="high"
                        loading="lazy"
                        onClick={scrollToTop}
                        src="./logo.webp"
                        alt="Logo Codex"
                        className={style.logo}
                    />
                </div>

                <div className={style.containerMenuLang}>
                    <div className={style.containerTexts}>
                        {menuItems.map((item, index) => {
                            if (item.route) {
                                return (
                                    <div key={index} className={style.containerMenu}>
                                        <Link to={item.route} onClick={() => handleMenuItemClick(index)}>
                                            {t(`nav.${item.key}`)}
                                        </Link>
                                    </div>
                                );
                            }
                            return (
                                <div key={index} className={style.containerMenu}>
                                    <a href={item.path} onClick={() => handleMenuItemClick(index)}>
                                        {t(`nav.${item.key}`)}
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                </div>


                {/* Menú hamburguesa */}
                <div className={style.menuHamburguesa}>
                    {isMenuOpen ? (
                        <IoCloseOutline className={style.menuIconn} onClick={toggleMenu} />
                    ) : (
                        <CiMenuFries className={style.menuIcon} onClick={toggleMenu} />
                    )}

                </div>

                <div className={`${style.overlay} ${isMenuOpen ? style.open : ''}`} onClick={closeMenu}></div>

                {/* Menú móvil */}
                <div className={`${style.mobileMenu} ${isMenuOpen ? style.open : ''}`}>
                    <div>
                        {/* Botón toggle de idioma */}
                        <div className={style.langToggleM}>
                            <div
                                className={`${style.langIndicator}`}
                                style={{
                                    transform: i18n.language === 'es' ? 'translateX(0%)' : 'translateX(100%)',
                                }}
                            />
                            <div
                                className={`${style.langOption} ${i18n.language === 'es' ? style.active : ''}`}
                                onClick={() => i18n.changeLanguage('es')}
                            >
                                ES
                            </div>
                            <div
                                className={`${style.langOption} ${i18n.language === 'en' ? style.active : ''}`}
                                onClick={() => i18n.changeLanguage('en')}
                            >
                                EN
                            </div>
                        </div>
                        <IoCloseOutline className={style.closeIcon} onClick={closeMenu} />
                    </div>
                    {menuItems.map((item, index) => {
                        if (item.route) {
                            return (
                                <Link key={index} to={item.route} onClick={() => handleMenuItemClick(index)}>
                                    {t(`nav.${item.key}`)}
                                </Link>
                            );
                        }
                        return (
                            <a key={index} href={item.path} onClick={() => handleMenuItemClick(index)}>
                                {t(`nav.${item.key}`)}
                            </a>
                        );
                    })}

                </div>
            </nav>
        </div>
    );
}

export default Nav;
