import style from '../styles/WeDo.module.css'

function WeDo() {
  return (
    <div className={style.container} id='qué-hacemos'>
     
      <div className={style.line}></div>
      <div className={style.containerAll}>
        <div className={style.containerTitleDescription}>
          <div className={style.containerP}>
            <img className={style.logo} src="./logogota.png" alt="" />
            <p className={style.name}>
              What <br />
              the <br />F*ck <br />
              we do
            </p>
          </div>
          <div className={style.crimsonContainer}>
            <p className={style.puno}>En Codex <span>diseñamos, desarrollamos y comunicamos ideas con propósito.</span>Nos especializamos en crear estrategias visuales y digitales que posicionan marcas, conectan con audiencias y potencian resultados.</p> <br />
            <p className={style.pdos}>Desde Argentina, trabajamos con un <span>equipo multidisciplinario, creativo y profesional</span>, listo para llevar tu proyecto al siguiente nivel.</p>
          </div>
        </div>
        <div className={style.card}>
          <p className={style.cardTitle}>A mobile-friendly website is crucial:</p>
          <div className={style.containerTextAll}>
            <div className={style.cardInfo1}>
              <p className={style.cardNumber}>70%</p>
              <p className={style.p}>De las visitas llegan a traves del  navegador mobil</p>
            </div>
            <div className={style.cardInfo2}>
              <p className={style.cardNumber}>SEO</p>
              <p className={style.p}>boosts by improving functionality and search engine rankings, ensuring your site performs better and reaches more users effectively.</p>
              <img className={style.medidor} src="" alt="medidor" />
            </div>
          <div className={style.cardInfo3}>
              <p className={style.cardNumber}>DO IT</p>
              <p className={style.p}>Make your website mobile-friendly now for better SEO!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeDo