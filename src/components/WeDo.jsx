import style from '../styles/WeDo.module.css'
import Contador from './Contador'
import { useTranslation } from 'react-i18next';

function WeDo() {
   const { t } = useTranslation();
  return (
    <div className={style.container} id='qué-hacemos'>
      <div className={style.containerAll}>
            <h2 className={style.title}>{t('wedo.title1')} <br></br> {t('wedo.title2')}</h2>
      <div className={style.containerInfo}>
        <div className={style.containerTextInfo}>
          <p>{t('wedo.containerTextInfo1')} <br />{t('wedo.containerTextInfo2')} <br /> {t('wedo.containerTextInfo3')} <br />{t('wedo.containerTextInfo4')} <br /> <br />    </p>
          <p>{t('wedo.containerTextInfo5')}<br /> {t('wedo.containerTextInfo6')}</p>
        </div>
        <img loading="lazy" className={style.medioCirculo} src="./mediocirculo.webp" alt="mediocirculo" />
      </div>
      <img loading="lazy" className={style.pensando} src="./pensando.webp" alt="pensando" />

      <p className={style.text}> {t('wedo.text')}  <span className={style.color}> {t('wedo.text1')} </span>  <br />{t('wedo.text2')}</p>


      <div className={style.containerImportantInfo}>

        <div className={style.boxOne}>
          <p className={style.number}>{t('wedo.number1')}</p>

          <div className={style.counter}>
            <Contador />
          </div>
          <p className={style.textInfo}>{t('wedo.textInfo')}</p>
        </div>

        <div className={style.boxTwo}>
          <p className={style.numberTwo}>{t('wedo.number2')}</p>
          <p className={style.seo}>{t('wedo.seo')}</p>
          <p className={style.textInfoTwo}>{t('wedo.textInfoTwo')}</p>
          <div className={style.containerButton}>

            <a href="https://wa.me/5493425543308"><button>Let’s build it! <img loading="lazy" className={style.arrow} src="./arrow.webp" alt="arrow" /> </button></a>
          </div>
        </div>

        <div className={style.boxThree}>
          <p className={style.number}>{t('wedo.number3')}</p>
          <p className={style.hoy}>{t('wedo.day')}</p>
          <p className={style.textInfo}>{t('wedo.textInfoThree')}</p>

        </div>
      </div>
      </div>
    </div>
  )
}

export default WeDo