import style from '../styles/Orion.module.css';
import { useNavigate } from 'react-router-dom';

function Orion() {
  const navigate = useNavigate();
  
  return (
    <div className={style.container}>
      <div className={style.btnHome}>
        <button onClick={() => navigate('/')}>Volver</button>
      </div>
      
      <h2 className={style.title}>
        <span className={style.span}>PORTAFOLIO</span> Orion Hairstudio
      </h2>
      
      <div className={style.containerDescriptionAll}>
        <img 
          className={style.imgOrion} 
          src="./orionDescription.png" 
          alt="Identidad visual de Orion Hairstudio" 
        />
        
        <div className={style.containerDescription}>
          <p className={style.subtitle}>
            Desarrollo de Identidad de Marca para Orion Hairstudio
          </p>
          
          <p>
            Para el proyecto de identidad de marca de Orion Hairstudio, nuestro objetivo era capturar la esencia mística y celestial que el cliente imaginaba, inspirándonos en la majestuosa constelación de Orión y su icónico Cinturón de Orión. La visión del cliente era clara: crear una identidad visual que reflejara un espacio sofisticado y etéreo, evocando una experiencia única para su clientela.
          </p>
          
          <br />
          
          <p>
            La paleta de colores seleccionada combinaba tonos dorados lujosos (que transmiten elegancia y un brillo estelar) con profundos tonos oscuros cósmicos que evocan la inmensidad del espacio, creando un contraste impactante e inmersivo. Como acento distintivo, incorporamos un naranja vibrante (#B33A21), añadiendo calidez y energía mientras evocaba la intensidad de estrellas ardientes, reforzando aún más la conexión celestial.
          </p>
          
          <br />
          
          <p>
            El diseño final presentaba un logo y elementos visuales que estilizaban la constelación de Orión, utilizando líneas limpias y modernas para equilibrar el misticismo con un toque contemporáneo. Cada detalle, desde la tipografía hasta los elementos gráficos, fue meticulosamente elaborado para transmitir exclusividad y una conexión cósmica.
          </p>
          
          <br />
          
          <p>
            El cliente quedó completamente satisfecho con el resultado, elogiando cómo la identidad de marca no solo capturó la esencia de Orion Hairstudio, sino que superó sus expectativas, ofreciendo una experiencia de marca cohesiva y cautivadora que resonaba con su visión mística y sofisticada.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Orion;