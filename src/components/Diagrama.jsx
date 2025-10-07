import style from '../styles/Diagrama.module.css';
import { useTranslation } from 'react-i18next';

function Diagrama() {
 
 const { t } = useTranslation();
  const titleText = t('diagramaM.title');

  const repeatedText = Array(6).fill(titleText); 

  return (
    <div className={style.container}>
    
      <div className={style.header}>
     
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
        <p className={style.description}>{t('diagramaM.description')}</p>
        <div className={style.line}></div>
        <div>
          <p>{t('diagramaM.author')}</p>
          <p>{t('diagramaM.role')}</p>
        </div>
      
      </div>
    </div>
  );
}

export default Diagrama;