 
  import style from "../styles/Done.module.css";
  import { useNavigate } from 'react-router-dom';
  import { useState } from "react";

  function Done() {
    const navigate = useNavigate();
    const [activo, setActivo] = useState(false);

    const titleVariants = {
      hidden: {
        clipPath: "inset(100% 0% 0% 0%)",
        opacity: 0,
      },
      visible: {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      },
    };

    const handleClosePopup = () => {
      setActivo(false);
    };

    const handleWhatsAppRedirect = () => {
      window.location.href = "https://wa.me/5493425543308";
    };

    return (
      <div className={style.container} id="portafolio">
        <div>
          <div className={style.containerTitle}>
            <p  className={style.title}> What We've <br /> Done. </p>
     
          </div>
          
          <p className={style.subtitle}>
            <span className={style.span}>CODEX</span> featured projects
          </p>
          
          <div className={style.containerAllProyect}>
            {/* Sección de proyectos */}
            <div className={style.containerBoxOne}>
              <div className={style.containerProyect}>
                <img className={style.img} src="/wifrut.webp" alt="wifrut" />
                <p className={style.nameProyect}>wifrut.com</p>
                <p className={style.descriptionProyect}>
                  Brand design, front- and back-end development, systems design.
                </p>
                <a href="https://wifrut.com">
                  <img className={style.link} src="/Linking.webp" alt="link" />
                </a>
              </div>
              
              <div className={style.containerProyect}>
                <img className={style.img} src="/crea.webp" alt="crea" />
                <p className={style.nameProyect}>creamarketingparavos.com</p>
                <p className={style.descriptionProyect}>
                  Brand design, front- and back-end development, systems design.
                </p>
                <a href="https://creamarketingparavos.com">
                  <img className={style.link} src="/Linking.webp" alt="link" />
                </a>
              </div>
            </div>
            
            <div className={style.containerBoxTwo}>
              <div className={style.containerProyect}>
                <img className={style.img} src="/growth.webp" alt="growth" />
                <p className={style.nameProyect}>Growth web app</p>
                <p className={style.descriptionProyect}>
                  Brand design, front- and back-end development, systems design.
                </p>
                <img 
                  onClick={() => setActivo(true)} 
                  className={style.link} 
                  src="/Linking.webp" 
                  alt="link" 
                />
              </div>
              
              <div className={style.containerProyect}>
                <img className={style.img} src="/orion.webp" alt="orion" />
                <p className={style.nameProyect}>Orion hairstudio</p>
                <p className={style.descriptionProyect}>Brand identity</p>
                <button onClick={() => navigate("/orion")}>
                  <img className={style.link} src="/Linking.webp" alt="link" />
                </button>
              </div>
            </div>
            
            <div className={style.containerBoxTres}>    
              <div className={style.containerProyect}>
                <img className={style.img} src="/app.webp" alt="app" />
                <p className={style.nameProyect}>Growth mobile app</p>
                <p className={style.descriptionProyect}>
                  Development and systems design.
                </p>
                <img onClick={()=>{setActivo(true)}} className={style.link} src="/Linking.webp" alt="link" />
              </div>
              
              <div className={style.containerProyect}>
                <img className={style.img} src="portafolio.webp" alt="portafolio" />
                <p className={style.nameProyect}>Dev portfolio</p>
                <p className={style.descriptionProyect}>
                  Front design and development
                </p>
                <a href="https://maidev.wtf">
                  <img className={style.link} src="/Linking.webp" alt="link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón de acción */}
        <div className={style.containerButtonWrapper}>
          <div className={style.containerButton}>
            <a href="https://wa.me/5493425543308">
              <button className={style.button}>Let's build it!</button>
            </a>
            <div className={style.containerText}>
              <p>take</p>
              <p>action and</p>
              <p>boost</p>
              <p>your</p>
              <p>business</p>
            </div>
          </div>
        </div>
        
        {/* Overlay de fondo */}
        <div 
          className={`${style.secondFondo} ${activo ? style.activo : ''}`}
          onClick={handleClosePopup}
        ></div>
        
        
        {/* Popup - Versión corregida */}
        <div className={`${style.containerPopUp} ${activo ? style.activo : ''}`}>
          <div className={`${style.popUp} ${activo ? style.activo : ''}`}>
            <h2>Ready to build your digital future?</h2>
            <p className={style.description}>
              We're crafting this project with passion and vision, and it's coming soon. 
              Stay tuned and let's build it together with Codex! #LetsBuildIt
            </p>
            <div className={style.btnContainer}>
              <button 
                className={style.btnButton}
                onClick={()=> {setActivo(false)}}
              >
                Let's build it!
              </button>
            </div>
            <div className={style.containerImg}>
              <img className={style.popUpImg} src="./popUp.webp" alt="popup" />
              <img className={style.logoBlanco} src="./logoblanco.webp" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Done;