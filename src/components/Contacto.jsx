import style from "../styles/Contacto.module.css"

function Contacto() {
  return (
    <div className={style.container}>
     <div className={style.containerInfo}>
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
         
      
           <button className={style.btn}>Contactarme</button>


        </form>
        <div className={style.redes}>
            <img src="" alt="instagram" />
            <img src="" alt="linkedin" />
            <img src="" alt="whatsapp" />
        </div>
    
     </div>
            <footer>
            <p>Politica de privacidad</p>
            <p>aviso legal</p>
            <p>politica de cookies</p>
        </footer>
    </div>
  )
}

export default Contacto