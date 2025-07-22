import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';

const menuItems = [
  'Qué hacemos',
  'Consulta nuestros servicios',
  'Portafolio',
  'Nuestro equipo',
  'Contacto',
];

const services = [
  'Identidad Visual',
  'Estrategias y diseño',
  'Aplicaciones Móvil',
  'Desarrollo Web',
  'Comunicación',
  'Creatividad',
  'Marketing',
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);
  const [showLogo, setShowLogo] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);
      setShowArrow(window.scrollY > window.innerHeight); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const instanceId = Math.random().toString(36).substring(2, 9);
    console.log(`useEffect montado (ID: ${instanceId})`);
    const interval = setInterval(() => {
      console.log(`Intervalo activado (ID: ${instanceId}) a las:`, new Date().toLocaleTimeString());
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 1000);
    return () => {
      console.log(`Limpiando intervalo (ID: ${instanceId})`);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className={style.container}>
      {/* Video de fondo para toda la página */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={style.videoBackground}
      >
        <source src="video.mp4" type="video/mp4" />
        <p>El video no se carga. Revisa la consola para errores.</p>
      </video>

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
    
      <div className={style.containerLogo}>
        <div className={style.containerImg}>
          <img
            className={style.imgLogo}
            src="./logo.png"
            alt="Logo Corporación Codex"
          />
        </div>
        <div className={style.containerTextBottom}>
          <p
            key={activeIndex}
            className={style.textBottom}
            data-text={services[activeIndex]}
          >
            {services[activeIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;