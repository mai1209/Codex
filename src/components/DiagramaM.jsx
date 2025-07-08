
import style from '../styles/DiagramaM.module.css'
function Diagrama() {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Services</h2>
          <div className={style.containerWrapper}>
              <div className={style.containerAll}>
                <div className={style.caja}>
                    <div className={style.containerItemRectangulo}>
                        <p>Web Development</p>
                    </div>
                    <div className={style.containerItemCuadrado}>
                        <p>
                            *Creamos sitios web innovadores, optimizados y adaptados a tus necesidades.
                        </p>
                    </div>
                </div>
                <div className={style.caja2}></div>
                <div className={style.caja1}>
                    <div className={style.containerItemCirculo}>
                        <p>
                            Visual <br /> Identity
                        </p>
                    </div>
                    <div className={style.containerItemCuadradoDos}>
                        <p>Diseños que transmiten tu esencia y conectan con tu audiencia.</p>
                    </div>

                </div>
                <div className={style.caja4}></div>
                <div className={style.caja3}>
                    <div className={style.containerItemCuadradoDos}>
                        <p>
                            Mensajes estratégicos que fortalecen la conexión con tu público.
                        </p>
                    </div>
                    <div className={style.containerItemRectangulo}>
                        <p>Communication</p>
                    </div>
                </div>
                <div className={style.caja6}></div>
                <div className={style.caja5}>
                    <div className={style.containerItemCirculoDos}>
                        <p>
                            Strategy & Design
                        </p>
                    </div>
                    <div className={style.containerItemCuadradoDos}>
                        <p>Estrategias visuales y conceptuales que dan vida a tus ideas.</p>
                    </div>
                </div>
                <div className={style.caja8}></div>
                <div className={style.caja7}>
                    <div className={style.containerItemCuadradoDos}>
                        <p>
                            Apps funcionales e intuitivas que destacan por su diseño y rendimiento.
                        </p>
                    </div>
                    <div className={style.containerItemRectangulo}>
                        <p>Mobile Applications</p>
                    </div>

                </div>
                <div className={style.caja10}></div>
                <div className={style.caja9}>
                    <div className={style.containerItemCirculoCuatro}>
                        <p>
                            Marketing
                        </p>
                    </div>
                    <div className={style.containerTitleBottom}>
                        <p>Impulsamos tu marca con campañas estratégicas para maximizar su alcance y relevancia.</p>
                    </div>
                </div>
            </div>
          </div>
            <div className={style.textBottom}>
                <p>
                    <span> Hay ideas que solo necesitan el equipo correcto para despegar.</span>¿Y si justo nos cruzamos en el momento ideal?
                </p>
                <div className={style.witeBorderBox}></div>
            </div>
        </div>
    )
}

export default Diagrama