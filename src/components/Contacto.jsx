import style from "../styles/Contacto.module.css";

function Contacto() {
  return (
    <div className={style.container} id="contacto">
      {/* Video de fondo */}  
      <video
        autoPlay
        loop
        muted
        playsInline
        className={style.videoBackground}
      >
        <source src="/Codex/video.mp4" type="video/mp4" />
        <p>El video no se carga. Revisa la consola para errores.</p>
      </video>

      <div className={style.containerInformation}>
        <h2>CONTACTO</h2>
        <form action="">
          <div className={style.inputContainer}>
            <span className={style.placeholderFijo}>nombre y apellido:</span>
            <input type="text" />
          </div>
          <div className={style.inputContainer}>
            <span className={style.placeholderFijo}>email:</span>
            <input type="text" />
          </div>
          <div className={style.inputContainer}>
            <span className={style.placeholderFijo}>asunto:</span>
            <input type="text" />
          </div>
          <div className={style.inputContainer}>
            <span className={style.placeholderFijo}>rubro:</span>
            <input type="text" />
          </div>
          <div className={style.containerBtn}>
            <button className={style.btn}>Contactarme</button>
          </div>
        </form>
      </div>
      <div className={style.containerInfo}>
        <img
          className={style.logoFooter}
          src="./logoFooter.png"
          alt="Logo de la empresa Codex"
        />
      </div>
      <div className={style.redes}>
        <img src="./LinkedIn.png" alt="LinkedIn" />
        <img src="./Instagram.png" alt="Instagram" />
        <img src="./WhatsApp.png" alt="WhatsApp" />
      </div>
      <footer>
        <p>Política de privacidad</p>
        <p>Aviso legal</p>
        <p>Política de cookies</p>
      </footer>
    </div>
  );
}

export default Contacto;  