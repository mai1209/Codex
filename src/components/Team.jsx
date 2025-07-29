import { motion } from 'framer-motion';
import style from "../styles/Team.module.css";

// Variantes
const titleVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.2 }
  })
};

function Team() {
  const members = [
    {
      wrapperClass: style.wrapperImgTeamMai,
      name: "Maira Coria",
      role1: "CTO",
      role2: "Co-Founder",
    },
    {
      wrapperClass: style.wrapperImgTeam,
      name: "David Menendez",
      role1: "CEO",
      role2: "Co-Founder",
    },
    {
      wrapperClass: style.wrapperImgTeamJuan,
      name: "Juan Manuel Fehleisen",
      role1: "CMO",
      role2: "Chief Sales Officer",
    }
  ];

  return (
    <div className={style.container} id="nuestro-equipo">
      <div className={style.line}>
        <motion.h2
          className={style.title}
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          OUR TEAM
        </motion.h2>

        {members.map((member, i) => (
          <div key={i} className={style.containerTeam}>
            <div className={style.containerImgTeam}>
              <img className={style.imgFondo} src="/fondoImgTeam.png" alt="fondo" />
              <div className={member.wrapperClass} />
            </div>

            <motion.div
              className={style.containerInfo}
              custom={i}
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>{member.name}</h3>
              <p>{member.role1}</p>
              <p>{member.role2}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
