
import style from '../styles/Footer.module.css';





function Footer() {


  return (
    <div className={style.container} id="contacto">
      
      <div>
        <h2  className={style.title} >CODEX Corporation & Business</h2>
        <p className={style.subtitle} >Diseñamos nuevas estrategias de negocios <br /> para web , redes sociales y marcas.</p>
      </div>
      <div>
        <div>
          <p>navegacion</p>
          <ul>
            <li>Home</li>
             <li>Que hacemos</li>
              <li>Portafolio</li>
               <li>Equipo</li>
                <li>Contacto</li>
                 <li>Preguntas frecuentes</li>
          </ul>
        </div>
        <div>
          <p>soporte</p>
          <p>numero</p>
          <p>numero</p>
        </div>
        <div>
          <p>ventas</p>
          <p>numero</p>
        </div>
      </div>
      <img src="./Brutalism.png" alt="Brutalism" />
     
    </div>
  );
}

export default Footer;
