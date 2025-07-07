import React from 'react'
import style from '../styles/App.module.css'

function App() {
  return (
    <div className={style.container}>

      <nav>
        <div className={style.welcome}>
   
          <p className={style.name}>Codex</p>
          <p className={style.subName}>Corporation & Business</p>
        </div>
        <div className={style.containerTexts}>
          <div className={style.containerMenu}>
            <div className={style.rectangle}></div>
            <p>What we do</p>
          </div>
          <div className={style.containerMenu}>
            <div className={style.rectangle}></div>
            <p>Check our services</p>
          </div>
          <div className={style.containerMenu}>
            <div className={style.rectangle}></div>
            <p>Portfolio</p>
          </div>
          <div className={style.containerMenu}>
            <div className={style.rectangle}></div>
            <p>Our Team</p>
          </div>
          <div className={style.containerMenu}>
            <div className={style.rectangle}></div>
            <p>Contact</p>
          </div>
        </div>
      </nav>
      <div className={style.containerLogo}>
        <p className={style.textLogo}>Codicem Ad astra sequimur</p>
        <img className={style.imgLogo} src="./logo.png" alt="logo" />
        <p className={style.textLogoM}>Codex Corp.</p>
      </div>
      <div className={style.containerTextBottom}>
        <p>Identidad Visual</p>
        <p>Estrategis y diseño</p>
        <p>Aplicaciones Movil</p>
        <p>Desarrollo Web</p>
        <p>comunicacion</p>
        <p>Creatividad</p>
        <p>Marketing</p>
      </div>
    </div>
  )
}

export default App