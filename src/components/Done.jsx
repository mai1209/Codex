import { motion } from "framer-motion";
import style from "../styles/Done.module.css";

function Done() {
 
  const titleVariants = {
    hidden: {
      clipPath: "inset(100% 0% 0% 0%)", 
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)", 
      opacity: 1,
      transition: {
        duration: 2,
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
        <p className={style.subtitle}><span className={style.span}>CODEX</span> featured projects</p>
        <div className={style.containerAllProyect}>
        <div className={style.containerBoxOne}>
            <div className={style.containerProyect}>
            <img className={style.img} src="/wifrut.png" alt="wifrut" />
            <p className={style.nameProyect}> wifrut.com</p>
            <p className={style.descriptionProyect}>Brand design, front- and back-end development, systems design.</p>
           <a href="https://wifrut.com"> <img className={style.link} src="/Linking.png" alt="link" /></a>
          </div>
          <div className={style.containerProyect}>
            <img  className={style.img}  src="crea.png" alt="crea" />
            <p className={style.nameProyect}>creamarketingparavos.com</p>
            <p className={style.descriptionProyect}>Brand design, front- and back-end development, systems design.</p>
            <a href="https://creamarketingparavos.com"><img className={style.link} src="/Linking.png" alt="link" /></a>
          </div>
        </div>
       <div className={style.containerBoxTwo}>
           <div className={style.containerProyect}>
            <img  className={style.img}  src="/growth.png" alt="growth" />
            <p className={style.nameProyect}>Growth web app</p>
            <p className={style.descriptionProyect}>Brand design, front- and back-end development, systems design.</p>
               <img className={style.link} src="/Linking.png" alt="link" />
          </div>
          <div className={style.containerProyect}>
            <img   className={style.img}  src="/orion.png" alt="orion" />
            <p className={style.nameProyect}>Orion hairstudio</p>
            <p className={style.descriptionProyect}>Brand identity</p>
               <img  className={style.link} src="/Linking.png" alt="link" />
          </div>
       </div>
        <div className={style.containerBoxTres}>
            <div className={style.containerProyect}>
            <img className={style.app} src="/app.pn" alt="app" />
            <p className={style.nameProyect}>Growth mobile app</p>
            <p className={style.descriptionProyect}>Development and systems design.</p>
               <img className={style.link} src="/Linking.png" alt="link" />
          </div>
          <div className={style.containerProyect}>
            <img  className={style.img}  src="portafolio.png" alt="portafolio" />
            <p className={style.nameProyect}>Dev portfolio</p>
            <p className={style.descriptionProyect}>Front design and development</p>
             <a href="https://maidev.wtf"><img className={style.link} src="/Linking.png" alt="link" /></a>
          </div>
        </div>
        </div>

      </div>
      <p className={style.textBottom}>Contact us to see more</p>
    </div>
  );
}

export default Done;