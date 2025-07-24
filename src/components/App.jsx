import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';



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



  return (
    <div className={style.container}>
   

    
   
    
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