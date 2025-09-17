import { useState } from 'react';
import style from '../styles/App.module.css';
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'; // <-- 1. IMPORTA LINK AQUÍ

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
        'Preguntas frecuentes'
    ];

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
                    src="./arrowup.webp"
                    alt="flecha-subir"
                    onClick={scrollToTop}
                    loading="lazy"
                />
            </div>
            <nav>
                <div className={style.welcome}>
                   <img loading="lazy" id='img' onClick={scrollToTop} src="./logo.webp" alt="Logo Codex" className={style.logo} />
                </div>

                {/* --- 2. MODIFICA EL MENÚ DE ESCRITORIO --- */}
                <div className={style.containerTexts}>
                    {menuItems.map((item, index) => {
                        // Si el item es "Preguntas frecuentes", usa <Link>
                        if (item === 'Preguntas frecuentes') {
                            return (
                                <div key={index} className={style.containerMenu}>
                                    <Link to="/ask" onClick={() => setActiveMenuIndex(index)}>
                                        {item}
                                    </Link>
                                </div>
                            );
                        }
                        // Para todos los demás, usa <a> con ancla
                        return (
                            <div key={index} className={style.containerMenu}>
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setActiveMenuIndex(index)}
                                >
                                    {item}
                                </a>
                            </div>
                        );
                    })}
                </div>
                
                <div className={style.menuHamburguesa}>
                    {isMenuOpen ? (
                        <IoCloseOutline className={style.menuIconn} onClick={toggleMenu} />
                    ) : (
                        <CiMenuFries className={style.menuIcon} onClick={toggleMenu} />
                    )}
                </div>
                
                <div className={`${style.overlay} ${isMenuOpen ? style.open : ''}`} onClick={closeMenu}></div>
                
                {/* --- 3. MODIFICA TAMBIÉN EL MENÚ MÓVIL --- */}
                <div className={`${style.mobileMenu} ${isMenuOpen ? style.open : ''}`}>
                    <IoCloseOutline className={style.closeIcon} onClick={closeMenu} />
                    {menuItems.map((item, index) => {
                        if (item === 'Preguntas frecuentes') {
                            return (
                                <Link
                                    key={index}
                                    to="/ask"
                                    onClick={() => handleMenuItemClick(index)}
                                >
                                    {item}
                                </Link>
                            );
                        }
                        return (
                            <a
                                key={index}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={() => handleMenuItemClick(index)}
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}

export default Nav;