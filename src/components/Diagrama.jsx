import style from '../styles/Diagrama.module.css';

function Diagrama() {
  // Creamos un array con el texto para repetirlo fácilmente
  const titleText = "*DICEN QUIENES HAN TRABAJADO CON CODEX*";
  // El número 6 es arbitrario, solo para asegurar que sea lo suficientemente largo.
  const repeatedText = Array(6).fill(titleText); 

  return (
    <div className={style.container}>
      {/* El div 'header' ahora es un contenedor flex para las dos marquesinas */}
      <div className={style.header}>
        {/* ✨ Creamos dos bloques de marquesina idénticos para el bucle infinito y sin pausas */}
        <div className={style.marquee}>
          {repeatedText.map((text, i) => (
            <span key={i} className={style.title}>
              {text}
            </span>
          ))}
        </div>
        <div className={style.marquee}>
          {repeatedText.map((text, i) => (
            <span key={`second-${i}`} className={style.title}>
              {text}
            </span>
          ))}
        </div>
      </div>


      <div className={style.content}>
        <p className={style.description}>Con CODEX entendí que tener un sitio web es clave para el crecimiento constante y automatizado de mi negocio</p>
        <div className={style.line}></div>
        <div>
          <p>Natalia Lofeudo</p>
          <p>Creá</p>
        </div>
      
      </div>
    </div>
  );
}

export default Diagrama;