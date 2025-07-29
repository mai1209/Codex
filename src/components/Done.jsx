import { motion } from "framer-motion";
import style from "../styles/Done.module.css";

function Done() {
  // Variantes para la animación del título
  const titleVariants = {
    hidden: {
      clipPath: "inset(100% 0% 0% 0%)", // Comienza cubierto desde abajo
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)", // Revela completamente
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={style.container} id="portafolio">
      <div>
        <div className={style.containerTitle}>
          <motion.div
            className={style.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.p variants={titleVariants}>
              What We've
            </motion.p>
         
            <motion.p variants={titleVariants}>
              Done.
            </motion.p>
          </motion.div>
        </div>
        <div className={style.contentWrapper}>
          <img
            className={style.coete}
            src="./coeteFuego.png"
            alt="coete"
            id="coete"
          />
          <div className={style.containerAll}>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>Growth expense manager app</p>
            </div>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>WIFRUT VEGETABLES AND FRUIT E-COMMERCE</p>
            </div>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>NATALIA LOFEUDO - MARKETING MENTORSHIP</p>
            </div>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>VIDALAC FABRICANTES LACTEOS Y MAS</p>
            </div>
            <div className={style.box}>
              <img src="./select.png" alt="select" />
              <p>VICHO’S BARBER MOBILE APP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Done;