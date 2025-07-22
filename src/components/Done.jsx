import style from "../styles/Done.module.css";

function Done() {
  return (
    <div className={style.container} id="portafolio">
                   
   {/* Video de fondo */}
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
      <div className={style.textBottom}>
        <span> Hay ideas que solo necesitan el equipo correcto para despegar.</span>
        ¿Y si justo nos cruzamos en el momento ideal?
        <div className={style.witeBorderBox}></div>
      </div>
      <div>
        <div className={style.containerTitle}>
          <h2 className={style.title}>
            What We've <br /> Done.
          </h2>
        </div>

        {/* 👇 NUEVO CONTENEDOR WRAPPER 👇 */}
        <div className={style.contentWrapper}>
          <img className={style.coete} src="./coeteFuego.png" alt="coete" id="coete" />

          <div className={style.containerAll}>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>Growth expense manager app</p>
            </div>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>
                WIFRUT VEGETABLES AND FRUIT E-COMMERCE
              </p>
            </div>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>
                nATALIA LOFEUDO - MARKETING  MENTORSHIP
              </p>
            </div>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>VIDALAC FABRICANTES LACTEOS Y MAS</p>
            </div>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>vicho’s barber mobile app</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Done;