import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';
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
  //const [activeIndex, setActiveIndex] = useState(0);
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



  return (
    <div className={style.container}>
      <div className={style.contenedorGeneral}>
   
          <img loading="lazy" className={style.imgBanner} src="./banner.webp" alt="banner" />
       
      <div className={style.containerGeneral}>
          <div className={style.containerInfo}>
          <div className={style.containerTextHome}>
            <p>Tu mejor</p>
            <p>opcion a la</p>
            <p>hora de</p>
            <p>digitalizarte</p>
          </div>
        <div className={style.secondaryText}>
          <p>¿Sabias qué? El 70% de las visitas llegan a traves del  navegador mobile</p>
          <p>Potencia tu marca en la era digital</p>
        </div>
        </div>
        <div className={style.containerResorte}>
          <img className={style.resorte} src="./resorte.webp" alt="resorte" />
          <div className={style.containerButtonWrapper}>
            <div className={style.containerButton}>
              <a href="https://wa.me/5493425543308"><button className={style.button}>Let’s build it!</button></a>
              <div className={style.containerText}>
                <div > <img className={style.wp} src="./WhatsApp.webp" alt="wp" /> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;