
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

  return (
    <div className={style.container} id="nuestro-equipo">
      <div className={style.containerImg}>
        <img src="./logo1.webp" alt="logo1" />
        <img src="./logo2.webp" alt="logo2" />
        <img src="./logo3.webp" alt="logo3" />
        <img src="./logo4.webp" alt="logo4" />
        <img src="./logo5.webp" alt="logo5" />
        <img src="./logo6.webp" alt="logo6" />
      </div>
      <div className={style.containerMembers}>
        {members.map((member) => (
          <div key={member.name} className={style.wrapperClass}>
            <div className={style.circle}>
              <img className={style.imgMembers} src={member.img} alt="img" />
            </div>
           
            <p>{member.role1}</p>
            <p>{member.role2}</p>
             <p>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
