import style from '../styles/Ask.module.css';
import { useNavigate } from 'react-router-dom';

function Ask() {
  const navigate = useNavigate();
  
  return (
    <div className={style.container}>
          <div className={style.containerButtonWrapper}>
        <div className={style.containerButton}>
        <a href="https://wa.me/5493425543308"><button className={style.button}>Let’s build it!</button></a>
          <div className={style.containerText}>
         <p  onClick={() => navigate("/ask")}>?</p>
          </div>
        </div>
      </div>
      <div className={style.btnHome}>
        <button onClick={() => navigate('/')}>Volver</button>
      </div>
      
      <h2 className={style.title}>PREGUNTAS Y RESPUESTAS</h2>
      
      <div className={style.containerAll}>
        <div className={style.containerAsk}>
          <div className={style.containerQuestion}>
            <p className={style.simbol}>x</p>
            <p>¿Por qué elegir CODEX?</p>
          </div>
          <p>
            En Codex, entendemos que destacar en el mundo digital puede ser abrumador. Por eso estamos aquí para impulsar tu éxito. Más que una agencia, somos tus aliados estratégicos en desarrollo web, comunicación, marketing, identidad visual, estrategia, diseño y aplicaciones móviles. Nuestras soluciones están diseñadas para escalar con negocios en cualquier etapa, ya seas un startup o una marca establecida, ofreciendo estrategias flexibles e impactantes. Proporcionamos resultados medibles, soporte personalizado 1:1 y un compromiso apasionado por materializar tu visión. Moldeemos juntos el futuro de tu marca con Codex.
          </p>
        </div>
        
        <div className={style.containerAsk}>
          <div className={style.containerQuestion}>
            <p className={style.simbol}>+</p>
            <p>¿Qué información necesitamos para impulsar tu proyecto?</p>
          </div>
          <p>
            Solo solicitamos los detalles esenciales que cualquier agencia necesitaría: tu público objetivo, tu audiencia actual, tus metas y cómo podemos ayudarte a alcanzarlas. En Codex, ni nosotros ni ningún miembro del equipo jamás te pediremos tu nombre de usuario o contraseña.
          </p>
        </div>
        
        <div className={style.containerAsk}>
          <div className={style.containerQuestion}>
            <p className={style.simbol}>+</p>
            <p>¿Cómo construir una comunidad digital próspera con Codex?</p>
          </div>
          <p>
            Reconocemos que construir presencia digital va más allá de acumular seguidores: se trata de cultivar una comunidad apasionada que se conecte con tu visión y esencia. Ya sea que tengas un startup, un proyecto creativo o una marca con un mensaje distintivo, el crecimiento es vital para forjar conexiones auténticas con nuevas audiencias. Con nuestra experiencia en desarrollo web, comunicación, marketing, identidad visual, estrategia, diseño y aplicaciones móviles, te empoderamos para destacar y descubrir nuevas posibilidades. Prosperar en el ámbito digital abre puertas a colaboraciones valiosas y oportunidades ilimitadas. ¿Por qué conformarte con poco cuando puedes brillar con Codex como tu aliado estratégico?
          </p>
        </div>
        
        <div className={style.containerAsk}>
          <div className={style.containerQuestion}>
            <p className={style.simbol}>+</p>
            <p>¿Qué garantías ofrecemos?</p>
          </div>
          <p>
            Tenemos plena confianza en nuestro trabajo y los resultados que entregamos. No haremos promesas vacías (nadie puede garantizar fama instantánea), pero estaremos a tu lado en cada paso, ajustando estrategias para asegurar un progreso genuino. Nuestro éxito se define por tu satisfacción, y no nos detendremos hasta que estés encantado con los resultados logrados con Codex.
          </p>
        </div>
      </div>
      <div className={style.containerLogo}>
        <img src="./logoblanco.png" alt="logoblanco " className={style.logoBlanco} />
      </div>


    </div>
  );
}

export default Ask;