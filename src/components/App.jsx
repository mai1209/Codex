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
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);


  useEffect(() => {
    const instanceId = Math.random().toString(36).substring(2, 9); // Unique ID for this instance
    console.log(`useEffect mounted (ID: ${instanceId})`);
    const interval = setInterval(() => {
      console.log(`Interval triggered (ID: ${instanceId}) at:`, new Date().toLocaleTimeString());
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 1000);
    return () => {
      console.log(`Cleaning up interval (ID: ${instanceId})`);
      clearInterval(interval);
    };
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
              <div
                className={`${style.rectangle} ${activeMenuIndex === index ? style.activeRectangle : ''}`}
              ></div>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveMenuIndex(index)}
              >
                {item}
              </a>
            </div>
          ))}

        </div>
      </nav>
      <div className={style.containerLogo}>
        <div className={style.containerImg}>
          <img
            className={style.imgLogo}
            src="./logo.png"
            alt="Codex Corporation Logo"
          />
        </div>
        <div className={style.containerTextBottom}>
          <p
            key={activeIndex} // Ensures re-render for animation
            className={style.textBottom}
            data-text={services[activeIndex]} // Required for glitch effect
          >
            {services[activeIndex]}
          </p>
        </div>
        <div className={style.typingGroup}>
          <p className={style.textLine}>Codicem Ad astra sequimur</p>
        </div>
      </div>
    </div>
  );
}

export default App;