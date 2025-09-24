import style from '../styles/Ask.module.css';
import { useNavigate } from 'react-router-dom';


import { useState } from 'react';

function Ask() {
  const navigate = useNavigate();
  const questions = [
    {
      simbol: 'x',
      title: '¿Por qué elegir CODEX?',
      desc: 'En Codex, entendemos que destacar en el mundo digital puede ser abrumador. Por eso estamos aquí para impulsar tu éxito. Más que una agencia, somos tus aliados estratégicos en desarrollo web, comunicación, marketing, identidad visual, estrategia, diseño y aplicaciones móviles. Nuestras soluciones están diseñadas para escalar con negocios en cualquier etapa, ya seas un startup o una marca establecida, ofreciendo estrategias flexibles e impactantes. Proporcionamos resultados medibles, soporte personalizado 1:1 y un compromiso apasionado por materializar tu visión. Moldeemos juntos el futuro de tu marca con Codex.'
    },
    {
      simbol: '+',
      title: '¿Qué información necesitamos para impulsar tu proyecto?',
      desc: 'Solo solicitamos los detalles esenciales que cualquier agencia necesitaría: tu público objetivo, tu audiencia actual, tus metas y cómo podemos ayudarte a alcanzarlas. En Codex, ni nosotros ni ningún miembro del equipo jamás te pediremos tu nombre de usuario o contraseña.'
    },
    {
      simbol: '+',
      title: '¿Cómo construir una comunidad digital próspera con Codex?',
      desc: 'Reconocemos que construir presencia digital va más allá de acumular seguidores: se trata de cultivar una comunidad apasionada que se conecte con tu visión y esencia. Ya sea que tengas un startup, un proyecto creativo o una marca con un mensaje distintivo, el crecimiento es vital para forjar conexiones auténticas con nuevas audiencias. Con nuestra experiencia en desarrollo web, comunicación, marketing, identidad visual, estrategia, diseño y aplicaciones móviles, te empoderamos para destacar y descubrir nuevas posibilidades. Prosperar en el ámbito digital abre puertas a colaboraciones valiosas y oportunidades ilimitadas. ¿Por qué conformarte con poco cuando puedes brillar con Codex como tu aliado estratégico?'
    },
    {
      simbol: '+',
      title: '¿Qué garantías ofrecemos?',
      desc: 'Tenemos plena confianza en nuestro trabajo y los resultados que entregamos. No haremos promesas vacías (nadie puede garantizar fama instantánea), pero estaremos a tu lado en cada paso, ajustando estrategias para asegurar un progreso genuino. Nuestro éxito se define por tu satisfacción, y no nos detendremos hasta que estés encantado con los resultados logrados con Codex.'
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  return (
    <div className={style.container}>
      <div className={style.btnHome}>
        <button onClick={() => navigate('/')}>Volver</button>
      </div>
      <h2 className={style.title}>PREGUNTAS Y RESPUESTAS</h2>
      <div className={style.containerAll}>
      {questions.map((q, idx) => {
  const isOpen = openIndexes.includes(idx);
  return (
    <div className={style.containerAsk} key={q.title}>
      <div
        className={style.containerQuestion}
        onClick={() => {
          setOpenIndexes(prev =>
            prev.includes(idx)
              ? prev.filter(i => i !== idx)
              : [...prev, idx]
          );
        }}
        style={{ cursor: 'pointer' }}
      >
        <p className={style.simbol}>{q.simbol}</p>
        <p>{q.title}</p>
      </div>
      {isOpen && <p>{q.desc}</p>}
    </div>
  );
})}
      </div>
      <div className={style.containerLogo}>
        <img fetchpriority="high" src="./logoblanco.webp" alt="logoblanco " className={style.logoBlanco} />
      </div>
    </div>
  );
}

export default Ask;