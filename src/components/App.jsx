import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';

const menuItems = [
  'What we do',
  'Check our services',
  'Portfolio',
  'Our Team',
  'Contact',
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className={style.container}>
      <nav>
        <div className={style.welcome}>
          <p className={style.name}>Codex</p>
          <p className={style.subName}>Corporation & Business</p>
        </div>
        <div className={style.containerTexts}>
          {menuItems.map((item, index) => (
            <div key={index} className={style.containerMenu}>
              <div className={style.rectangle}></div>
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                {item}
              </a>
            </div>
          ))}
        </div>
      </nav>
      <div className={style.containerLogo}>
        <div className={style.typingGroup}>
          <p className={style.textLine}>Codicem Ad</p>
          <p className={style.textLine}>astra</p>
          <p className={style.textLine}>sequimur</p>
        </div>
        <img
          className={style.imgLogo}
          src="./logo.png"
          alt="Codex Corporation Logo"
        />
        <p className={style.textLogoM}>Codex Corp.</p>
      </div>
      <div className={style.containerTextBottom}>
        {services.map((service, index) => (
          <p
            key={index}
            className={`${style.textBottom} ${
              index === activeIndex ? style.active : ''
            }`}
          >
            {service}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;