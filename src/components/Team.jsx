import style from "../styles/Team.module.css";
import { useTranslation } from 'react-i18next';

function Team() {
  const { t } = useTranslation();



  // 2. Datos de los miembros (Mantenemos tus textos y rutas)
  const members = [
    {
      name: "Maira Coria",
      role1: "CTO",
      role2: "Co-Founder",
      img: "./imgMaiOficial.webp",
    },
    {
      name: "David Menendez",
      role1: "CEO",
      role2: "Co-Founder",
      img: "./imgDavidOficial.webp",
    },
    {
      name: "Juan Manuel Fehleisen",
      role1: "CMO",
      role2: "Chief Sales Officer",
      img: "./imgOficialJuan.webp",
    }
  ];

  return (
    <div className={style.container} id="nuestro-equipo">
      
   

      <h2 className={style.title}>{t('team.title') || "Nuestro Equipo"}</h2>

      {/* Contenedor de Miembros - Cards Profesionales */}
      <div className={style.containerMembers}>
        {members.map((member) => (
          <div key={member.name} className={style.memberCard}>
            
            <div className={style.imageCircle}>
              <img 
                fetchpriority="high" 
                className={style.imgMembers} 
                src={member.img} 
                alt={member.name} 
              />
            </div>

            <div className={style.containerText}>
              <p className={style.role1}>{member.role1}</p>
              <p className={style.role2}>{member.role2}</p>
              <div className={style.divider}></div>
              <p className={style.memberName}>{member.name}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Sección de Contacto */}
      <div className={style.containerContact}>
        <p className={style.textContact}>
          {t('team.textContact')}<br />
          {t('team.textContact2')}
        </p>
        <div className={style.btnContact}>
          <a href="https://wa.me/5493425543308" target="_blank" rel="noopener noreferrer">
            <button>{t('team.button')}</button>
            <img src="./WhatsAppBlanco.webp" alt="WhatsApp" />
          </a>
        </div>
      </div>

    </div>
  );
}

export default Team;