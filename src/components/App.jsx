import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';
import InterstellarBackground from './InterstellarBackground';
import { useNavigate } from 'react-router-dom';

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
   const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);


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
    }, 2000); // Cambiado a 2 segundos para mejor visualización
    return () => {
      console.log(`Limpiando intervalo (ID: ${instanceId})`);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={style.container}>
      <InterstellarBackground />
      <div className={style.containerButtonWrapper}>
        <div className={style.containerButton}>
        <a href="https://wa.me/5493425543308"><button className={style.button}>Let’s build it!</button></a>
          <div className={style.containerText}>
         <p  onClick={() => navigate("/ask")}>?</p>
          </div>
        </div>
      </div>
      <div className={style.containerLogo}>
        <div className={style.containerImg}>
          <img
            className={style.imgLogo}
            src="./logo.png"
            alt="Logo Corporación Codex"
          />
        </div>
        <div className={style.containerTextBottom}>
          <div className={style.glitchWrapper}>
            <div className={style.glitchText} data-text={services[activeIndex]}>
              {services[activeIndex]}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;