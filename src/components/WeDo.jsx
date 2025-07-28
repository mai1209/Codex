import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import style from '../styles/WeDo.module.css';
import ContadorAnimado from './Contador';

function WeDo() {
  const containerPRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const cardRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 20;
      if (window.scrollY > scrollThreshold) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCard(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={style.container} id="qué-hacemos">
      <div className={style.line}></div>
      <div className={style.containerAll}>
        <div className={style.containerTitleDescription}>
          <motion.div
            className={style.containerP}
            ref={containerPRef}
            initial="hidden"
            animate={hasScrolled ? 'visible' : 'hidden'}
            variants={variants}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
          >
            <img className={style.logo} src="./logogota.png" alt="Logo" />
            <p className={style.name}>
              What <br />
              the <br />
              F*ck <br />
              we do
            </p>
          </motion.div>
          <motion.div
            className={style.containerP}
            ref={containerPRef}
            initial="hidden"
            animate={hasScrolled ? 'visible' : 'hidden'}
            variants={variants}
            transition={{
              duration: 1.2,
              ease: 'easeOut',

            }}
            >
            <div className={style.crimsonContainer}>
              <p className={style.puno}>
                En Codex <span>diseñamos, desarrollamos y comunicamos ideas con propósito.</span> Nos especializamos en crear estrategias visuales y digitales que posicionan marcas, conectan con audiencias y potencian resultados.
              </p>
              <br />
              <p className={style.pdos}>
                Desde Argentina, trabajamos con un <span>equipo multidisciplinario, creativo y profesional</span>, listo para llevar tu proyecto al siguiente nivel.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          ref={containerPRef}
          initial="hidden"
          animate={hasScrolled ? 'visible' : 'hidden'}
          variants={variants}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: 'easeOut',

          }}
        >
          <div className={style.card}>
            <p className={style.cardTitle}>A mobile-friendly website is crucial:</p>
            <div className={style.containerTextAll}>
              <div className={style.cardInfo1}>
                <p className={style.cardNumber}>
                  <ContadorAnimado />
                </p>

                <p className={style.p}>De las visitas llegan a través del navegador móvil</p>
              </div>
              <div className={style.cardInfo2}>
                <p className={style.cardNumber}>SEO</p>
                <p className={style.p}>
                  Boosts by improving functionality and search engine rankings, ensuring your site performs better and reaches more users effectively.
                </p>
                <img className={style.medidor} src="" alt="medidor" />
              </div>
              <div className={style.cardInfo3}>
                <p className={style.cardNumber}>DO IT</p>
                <p className={style.p}>Make your website mobile-friendly now for better SEO!</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WeDo;