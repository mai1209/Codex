import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';


const YouTubeLazy = ({ videoId }) => {
  return (
    <div className={style.videoBackgroundContainer}>
      <iframe
        className={style.videoBackground}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&iv_load_policy=3&modestbranding=1`}
        title="YouTube video background player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};



function App() {
 

  const [showArrow, setShowArrow] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Mostrar flecha si pasaste 200px, pero ocultar si estás cerca del final
    const nearBottom = scrollTop + windowHeight > documentHeight - 150; // 150px antes del footer
    setShowArrow(scrollTop > 200 && !nearBottom);
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

  return (
    <div className={style.container}>
    
      <div className={style.contenedorGeneral}>
        <YouTubeLazy videoId="B8VV75AdHco" />

       
        <div className={style.containerGeneral}>
          <div className={style.containerInfo}>
            <div className={style.containerTextHome}>
              <p>Tu mejor</p>
              <p>opcion a la</p>
              <p>hora de</p>
              <p>digitalizarte</p>
            </div>
            <div className={style.secondaryText}>
              <p>¿Sabias qué? El 70% de las visitas llegan a traves del navegador mobile</p>
              <p>Potencia tu marca en la era digital</p>
            </div>
          </div>
          <div className={style.containerResorte}>
            <img  fetchpriority="high"  className={style.resorte} src="./resorte.webp" alt="resorte" />
            <div className={style.containerButtonWrapper}>
              <div className={style.containerButton}>
                <a href="https://wa.me/5493425543308"><button className={style.button}>Let’s build it!</button></a>
                <div className={style.containerText}>
                  <div > <img  fetchpriority="high" className={style.wp} src="./WhatsApp.webp" alt="wp" /> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <-- FLECHA --> */}
      <div className={`${style.containerArrowSubir} ${showArrow ? style.showArrow : ''}`}>
        <img
            className={style.arrowSubirImg}
            src="./arrowup.webp"
            alt="flecha-subir"
            onClick={scrollToTop}
            loading="lazy"
            fetchpriority="high"
        />
      </div>

    </div>
  );
}

export default App;