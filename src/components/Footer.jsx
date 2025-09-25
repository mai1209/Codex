
import style from '../styles/Footer.module.css';
import { Link } from "react-router-dom";


function Footer() {


  return (
    <div className={style.container} id="contacto">

      <div className={style.containerTitle}>
        <h2 className={style.title} >CODEX Corporation & Business</h2>
        <p className={style.subtitle} >Diseñamos nuevas estrategias de negocios <br /> para web , redes sociales y marcas.</p>
      </div>
      <div className={style.containerAllLinks}> 

        <div className={style.containerLinks}>
          <p className={style.titleNavigation}>navegacion</p>
          <div className={style.links}>
            <a href="">Home</a>
            <a href="#qué-hacemos">Que hacemos</a>
            <a href="#portafolio">Portafolio</a>
            <a href="#nuestro-equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
            <Link to="/ask">Preguntas frecuentes</Link>
          </div>

        </div>

        <div className={style.containerLinksBottom}>
    
         
            <div className={style.links}>
              <p className={style.titleNavigation}>soporte</p>
              <a href="https://wa.me/5493425543308">+54 9 342 554 3308</a>
              <a href="https://wa.me/5493425040804">+54 9 342 504 0804</a>
            </div>
      
       
            <div className={style.links}>
              <p className={style.titleNavigation}>ventas</p>
              <a href="https://wa.me/543435136669">+54 343 513 6669</a>
            </div>
        
        </div>

      </div>
      <div className={style.containerDerechos}>
        <p>© 2025. Todos los derechos reservados.</p>
        <div >
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>

       <img className={style.imgFooter} src="./Brutalism.png" alt="Brutalism" />


    </div>
  );
}
export default Footer;
