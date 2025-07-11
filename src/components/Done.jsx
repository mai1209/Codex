import style from "../styles/Done.module.css";

function Done() {
  return (
    <div className={style.container}>
      <div>
        <h2 className={style.title}>
          What We've <br /> Done.
        </h2>

        {/* 👇 NUEVO CONTENEDOR WRAPPER 👇 */}
        <div className={style.contentWrapper}>
          <img className={style.coete} src="./coeteFuego.png" alt="coete" />

          <div className={style.containerAll}>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>Growth expense manager app</p>
            </div>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>
                WIFRUT VEGETABLES AND FRUIT 
                E-COMMERCE
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