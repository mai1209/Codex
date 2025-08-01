import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

function Nav() {
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);
    const [showLogo, setShowLogo] = useState(false);
    const [showArrow, setShowArrow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const menuItems = [
        'Qué hacemos',
        'Consulta nuestros servicios',
        'Portafolio',
        'Nuestro equipo',
        'Contacto',
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowLogo(scrollPosition > 100);
            setShowArrow(scrollPosition > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleMenuItemClick = (index) => {
        setActiveMenuIndex(index);
        closeMenu();
    };

    return (
        <div>
            <div className={`${style.containerArrowSubir} ${showArrow ? style.showArrow : ''}`}>
                <img
                    className={style.arrowSubirImg}
                    src="./arrowup.png"
                    alt="flecha-subir"
                    onClick={scrollToTop}
                />
            </div>
            <nav>
                <div className={style.welcome}>
                    {showLogo ? (
                        <img  id='img' onClick={scrollToTop} src="./logo.png" alt="Logo Codex" className={style.logo} />
                    ) : (
                        <div>
                            <p className={style.name}>Codex</p>
                            <p className={style.subName}>Corporación & Negocios</p>
                        </div>
                    )}
                </div>
                
                {/* Menú para desktop */}
                <div className={style.containerTexts}>
                    {menuItems.map((item, index) => {
                        const isActive = index === activeMenuIndex;
                        const isHovered = index === hoveredMenuIndex;
                        const showActive = isHovered ? false : isActive;
                        const showHover = isHovered;

                        return (
                            <div key={index} className={style.containerMenu}>
                                <div
                                    className={`
                                        ${style.rectangle}
                                        ${showActive ? style.activeRectangle : ''}
                                        ${showHover ? style.hoverRectangle : ''}
                                    `}
                                ></div>
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setActiveMenuIndex(index)}
                                    onMouseEnter={() => setHoveredMenuIndex(index)}
                                    onMouseLeave={() => setHoveredMenuIndex(null)}
                                >
                                    {item}
                                </a>
                            </div>
                        );
                    })}
                </div>
                
                {/* Menú hamburguesa para mobile */}
                <div className={style.menuHamburguesa}>
                    {isMenuOpen ? (
                        <IoCloseOutline className={style.menuIconn} onClick={toggleMenu} />
                    ) : (
                        <CiMenuFries className={style.menuIcon} onClick={toggleMenu} />
                    )}
                </div>
                
                {/* Overlay y menú móvil */}
                <div className={`${style.overlay} ${isMenuOpen ? style.open : ''}`} onClick={closeMenu}></div>
                
                <div className={`${style.mobileMenu} ${isMenuOpen ? style.open : ''}`}>
                    <IoCloseOutline className={style.closeIcon} onClick={closeMenu} />
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => handleMenuItemClick(index)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default Nav;