import style from '../styles/WeDo.module.css'
import Contador from './Contador'

function WeDo() {
  return (
    <div className={style.container} id='qué-hacemos'>
      <div className={style.containerAll}>
            <h2 className={style.title}>¿QUE <br></br> HACEMOS?</h2>
      <div className={style.containerInfo}>
        <div className={style.containerTextInfo}>
          <p>En Codex Corp. impulsamos marcas a través del diseño, desarrollo y comunicación estratégica. <br /> Somos expertos en branding, marketing digital y diseño web, creando soluciones <br /> visuales y digitales que aumentan la visibilidad de tu  <br />negocio, conectan con tu público objetivo y generan resultados medibles. <br /> <br />    </p>
          <p>Nuestro equipo multidisciplinario combina creatividad, innovación y <br /> experiencia para llevar cada proyecto al siguiente nivel.</p>
        </div>
        <img loading="lazy" className={style.medioCirculo} src="./mediocirculo.webp" alt="mediocirculo" />
      </div>
      <img loading="lazy" className={style.pensando} src="./pensando.webp" alt="pensando" />

      <p className={style.text}> Un sitio web compatible  <span className={style.color}> con  dispositivos móviles </span>  <br />Es crucial:</p>


      <div className={style.containerImportantInfo}>

        <div className={style.boxOne}>
          <p className={style.number}>01.</p>

          <div className={style.counter}>
            <Contador />
          </div>
          <p className={style.textInfo}>De las visitas llegan a traves del  navegador mobil</p>
        </div>

        <div className={style.boxTwo}>
          <p className={style.numberTwo}>02.</p>
          <p className={style.seo}>SEO</p>
          <p className={style.textInfoTwo}>Mejoramos el rendimiento de tu sitio web optimizando su funcionalidad y posicionamiento en buscadores, asegurando que alcance a más usuarios de manera efectiva.</p>
          <div className={style.containerButton}>

            <a href="https://wa.me/5493425543308"><button>Let’s build it! <img loading="lazy" className={style.arrow} src="./arrow.webp" alt="arrow" /> </button></a>
          </div>
        </div>

        <div className={style.boxThree}>
          <p className={style.number}>03.</p>
          <p className={style.hoy}>HOY</p>
          <p className={style.textInfo}>Haz tu sitio web móvil y potencia tu SEO para llegar a más clientes.</p>

        </div>
      </div>
      </div>
    </div>
  )
}

export default WeDo