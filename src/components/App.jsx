import { useState, useEffect } from 'react';
import style from '../styles/App.module.css';
import { useTranslation } from 'react-i18next';


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
 
 const { t } = useTranslation();
  const [showArrow, setShowArrow] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

  
    const nearBottom = scrollTop + windowHeight > documentHeight - 150;
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
              <p>{t('app.title1')}</p>
              <p>{t('app.title2')}</p>
              <p>{t('app.title3')}</p>
              <p>{t('app.title4')}</p>
            </div>
            <div className={style.secondaryText}>
              <p>{t('app.secondaryText1')}</p>
              <p>{t('app.secondaryText2')}</p>
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
            src="/whatsappArrow.png"
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