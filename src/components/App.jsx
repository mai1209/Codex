import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';
import { useNavigate } from 'react-router-dom';

// Componente aislado para el video. No afecta a nada más.
const AutoPlayBackgroundVideo = ({ videoId }) => {
 const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&iv_load_policy=3&modestbranding=1`;

  return (
    <div className={style.videoBackgroundContainer}>
      <iframe
        className={style.videoBackground}
        src={videoSrc}
        title="YouTube video background player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};


function App() {
  const navigate = useNavigate();

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
   
      setShowArrow(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // <-- 1. AÑADE LA FUNCIÓN PARA HACER SCROLL -->
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
    <div className={style.container}>
      
      {/* El div principal que ya tenías */}
      <div className={style.contenedorGeneral}>
        <AutoPlayBackgroundVideo videoId="B8VV75AdHco" />

        {/* Todo tu contenido permanece igual */}
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

      {/* <-- 2. AÑADE EL JSX DE LA FLECHA AQUÍ --> */}
      <div className={`${style.containerArrowSubir} ${showArrow ? style.showArrow : ''}`}>
        <img
            className={style.arrowSubirImg}
            src="./arrowup.webp"
            alt="flecha-subir"
            onClick={scrollToTop}
            loading="lazy"
        />
      </div>

    </div>
  );
}

export default App;