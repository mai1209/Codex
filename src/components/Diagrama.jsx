
import style from '../styles/Diagrama.module.css'
function Diagrama() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Services</h2>
      <div className={style.containerAll}>
        <div className={style.containerItemRectangulo}>
          <p>Web <br /> Development</p>
        </div>
        <div className={style.containerItemCuadrado}>
          <p>
            *Creamos sitios web innovadores, optimizados y adaptados a tus necesidades.
          </p>
        </div>
        <div className={style.containerItemCirculo}>
          <p>
            Visual <br /> Identity
          </p>
        </div>
        <div className={style.containerItemCuadradoDos}>
          <p>Diseños que transmiten tu esencia y conectan con tu audiencia.</p>
        </div>
        <div className={style.containerItemRectanguloDos}>
          <p>Communication</p>
        </div>
        <div className={style.containerItemCuadradoTres}>
          <p>
            Mensajes estratégicos que fortalecen la conexión con tu público.
          </p>
        </div>
        <div className={style.containerItemCirculoTres}>
          <p>
            Strategy & <br />   Design
          </p>
        </div>
        <div className={style.containerItemCuadradoCuatro}>
          <p>Estrategias visuales y conceptuales que dan vida a tus ideas.</p>
        </div>
        <div className={style.containerItemRectanguloTres}>
          <p>Mobile Applications</p>
        </div>
        <div className={style.containerItemCuadradoCinco}>
          <p>
            Apps funcionales e intuitivas que destacan por su diseño y rendimiento.
          </p>
        </div>
        <div className={style.containerItemCirculoCuatro}>
          <p>
            Marketing
          </p>
        </div>
        <div className={style.containerTitleBottom}>
          <p>Impulsamos tu marca con campañas estratégicas para maximizar su alcance y relevancia.</p>
        </div>
      
      </div>
        <div className={style.textBottom}>
          <span> Hay ideas que solo necesitan el equipo correcto para despegar.</span>
          ¿Y si justo nos cruzamos en el momento ideal?
          <div className={style.witeBorderBox}></div>
        </div>
    </div>
  )
}

export default Diagrama