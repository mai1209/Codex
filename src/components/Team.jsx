
import style from "../styles/Team.module.css";


function Team() {
  const members = [
    {
      wrapperClass: style.wrapperImgTeamMai,
      name: "Maira Coria",
      role1: "CTO",
      role2: "Co-Founder",
      img: "./imgMaiOficial.webp",
    },
    {
      wrapperClass: style.wrapperImgTeam,
      name: "David Menendez",
      role1: "CEO",
      role2: "Co-Founder",
      img: "./imgDavidOficial.webp",
    },
    {
      wrapperClass: style.wrapperImgTeamJuan,
      name: "Juan Manuel Fehleisen",
      role1: "CMO",
      role2: "Chief Sales Officer",
      img: "./imgOficialJuan.webp",
    }
  ];

  // Carrusel de logos
  const logos = [
    './logo1.webp',
    './logo2.webp',
    './logo3.webp',
    './logo4.webp',
    './logo5.webp',
    './logo6.webp',
    './logo7.webp',
    './logo8.webp',
  ];
  // Duplicamos para efecto infinito
  const allLogos = [...logos, ...logos];

  return (
    <div className={style.container} id="nuestro-equipo">
      <div className={style.carouselContainer}>
        <div className={style.carouselTrack}>
          {allLogos.map((src, idx) => (
            <div className={style.logoItem} key={idx}>
              <img src={src} alt={`logo${idx % logos.length + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className={style.containerMembers}>
        {members.map((member, index) => {

          let specialClass = '';
          if (index === 0) {
            specialClass = style.firstImage;
          } else if (index === members.length - 1) {
            specialClass = style.middleImage;
          }

          return (

            <div key={member.name} className={style.wrapperClass}>

              <div className={`${style.circle} ${specialClass}`}>
                <img fetchpriority="high" className={style.imgMembers} src={member.img} alt={member.name} />
              </div>

              <div className={style.containerText}>
                <p className={style.p}>{member.role1}</p>
                <p className={style.role2}>{member.role2}</p>
                <p className={style.p}>{member.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.containerContact}>
        <p className={style.textContact}>CONSTRUÍ TU SITIO WEB CON <br />
          CODEX CORPORTION & BUSINESS</p>
        <div className={style.btnContact}>
        <a href="https://wa.me/5493425543308">  <button>¡Contactanos!</button></a>
         <img src="./WhatsAppBlanco.webp" alt="wp" />
        </div>
      </div>
    </div>
  );
}

export default Team;
