import React from 'react'
import style from '../styles/WeDo.module.css'

function WeDo() {
  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <p className={style.title}>Aplicaciones Moviles</p>

      </div>
      <div className={style.line}></div>
      <div className={style.containerAll}>
     <div className={style.containerP}>   
      <p className={style.name}>
      What <br /> 
      the <br />F*ck <br />
      we do
      </p>
    </div>
        <div className={style.crimsonContainer}>
          <p>En Codex <span>diseñamos, desarrollamos y comunicamos ideas con propósito.</span>Nos especializamos en crear estrategias visuales y digitales que posicionan marcas, conectan con audiencias y potencian resultados.</p>
          <p>Desde Argentina, trabajamos con un <span>equipo multidisciplinario, creativo y profesional</span>, listo para llevar tu proyecto al siguiente nivel.</p>
        </div>
      </div>
    </div>
  )
}

export default WeDo