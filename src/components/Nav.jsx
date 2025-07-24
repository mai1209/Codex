import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';

function Nav() {
      const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);
  const [showLogo, setShowLogo] = useState(false);
    const [showArrow, setShowArrow] = useState(false);
    const menuItems = [
  'Qué hacemos',
  'Consulta nuestros servicios',
  'Portafolio',
  'Nuestro equipo',
  'Contacto',
];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  return (
    <div>
          <div className={`${style.containerArrowSubir} ${showArrow ? style.showArrow : ''}`}>
        <img className={style.arrowSubirImg} src="./arrowup.png" alt="flecha-subir" onClick={scrollToTop} />
      </div>
           <nav>
        <div className={style.welcome}>
          {showLogo ? (
            <img src="./logo.png" alt="Logo Codex" className={style.logo} />
          ) : (
            <div>
              <p className={style.name}>Codex</p>
              <p className={style.subName}>Corporación & Negocios</p>
            </div>
          )}
        </div>
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
      </nav>
    </div>
  )
}

export default Nav