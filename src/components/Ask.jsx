import style from '../styles/Ask.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Ask() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const questions = [
    {
      title: t('ask.q1.title'),
      desc: t('ask.q1.desc')
    },
    {
      title: t('ask.q2.title'),
      desc: t('ask.q2.desc')
    },
    {
      title: t('ask.q3.title'),
      desc: t('ask.q3.desc')
    },
    {
      title: t('ask.q4.title'),
      desc: t('ask.q4.desc')
    }
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  return (
    <div className={style.container}>
      <div className={style.btnHome}>
        <button onClick={() => navigate('/')}>{t('ask.back')}</button>
      </div>
      <h2 className={style.title}>{t('ask.title')}</h2>

      <div className={style.containerAll}>
        {questions.map((q, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div className={style.containerAsk} key={q.title}>
              <div
                className={style.containerQuestion}
                onClick={() => {
                  setOpenIndexes(prev =>
                    prev.includes(idx)
                      ? prev.filter(i => i !== idx)
                      : [...prev, idx]
                  );
                }}
                style={{ cursor: 'pointer' }}
              >
                <p className={style.simbol}>{isOpen ? 'x' : '+'}</p>
                <p>{q.title}</p>
              </div>
              {isOpen && <p className={style.description}>{q.desc}</p>}
            </div>
          );
        })}
      </div>

      <div className={style.containerLogo}>
        <img
          fetchpriority="high"
          src="./logoblanco.webp"
          alt="logoblanco"
          className={style.logoBlanco}
        />
      </div>
    </div>
  );
}

export default Ask;
