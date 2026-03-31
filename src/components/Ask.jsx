import style from '../styles/Ask.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react'; // Versión correcta para Web

function Ask({ embedded = false }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const questions = [
    { title: t('ask.q1.title'), desc: t('ask.q1.desc') },
    { title: t('ask.q2.title'), desc: t('ask.q2.desc') },
    { title: t('ask.q3.title'), desc: t('ask.q3.desc') },
    { title: t('ask.q4.title'), desc: t('ask.q4.desc') }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className={`${style.pageWrapper} ${embedded ? style.pageWrapperEmbedded : ''}`}
    >
      <div className={style.backgroundGlow}  id='ask'/>
      
      {!embedded && (
        <div className={style.btnHome}>
          <button onClick={() => navigate('/')}>{t('ask.back')}</button>
        </div>
      )}

      <main className={`${style.content} ${embedded ? style.contentEmbedded : ''}`}>
        <header className={style.headerSection}>
          <h2 className={style.mainTitle}>{t('ask.title')}</h2>
        </header>

        <div className={style.cardsGrid}>
          {questions.map((q, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article 
                key={idx} 
                className={`${style.card} ${isOpen ? style.cardOpen : ''}`}
                onClick={() => toggle(idx)}
              >
                <div className={style.cardHeader}>
                  <div className={`${style.iconWrapper} ${isOpen ? style.rotate : ''}`}>
                    <Plus size={20} color={isOpen ? "#fff" : "#FF1493"} />
                  </div>
                  <h3 className={style.questionText}>{q.title}</h3>
                </div>

                <div className={`${style.cardBody} ${isOpen ? style.bodyVisible : ''}`}>
                  <div className={style.innerContent}>
                    <p className={style.descriptionText}>{q.desc}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {!embedded && (
        <footer className={style.footer}>
          <img src="/logoblanco.webp" alt="Logo" className={style.floatingLogo} />
        </footer>
      )}
    </section>
  );
}

export default Ask;
