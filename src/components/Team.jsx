import style from "../styles/Team.module.css"

function Team() {
    return (
        <div className={style.container} id="nuestro-equipo">
         
            <div className={style.line}>
                <h2 className={style.title}>OUR TEAM</h2>
                <div className={style.containerTeam}>
                    <div className={style.containerImgTeam}>
                        <img className={style.imgFondo} src="/fondoImgTeam.png" alt="fondo" />
                        <div className={style.wrapperImgTeamMai}>
                      
                        </div>
                    </div>
                    <div className={style.containerInfo}>
                        <h3 >Maira Coria</h3>
                        <p>CTO</p>
                        <p>Co-Founder</p>
                    </div>
                </div>
                <div className={style.containerTeam}>
                    <div className={style.containerImgTeam}>
                        <img className={style.imgFondo} src="/fondoImgTeam.png" alt="fondo" />
                         <div className={style.wrapperImgTeam}>
                      
                        </div>
                    </div>
                    <div className={style.containerInfo}>
                        <h3>David Menendez</h3>
                        <p>CEO</p>
                        <p>Co-Founder</p>
                    </div>
                </div>
                <div className={style.containerTeam}>
                    <div className={style.containerImgTeam}>
                        <img className={style.imgFondo} src="/fondoImgTeam.png" alt="fondo" />
                        <div className={style.wrapperImgTeamJuan}>
                      
                        </div>
                    </div>
                    <div className={style.containerInfo}>
                        <h3>Juan Manuek Fehleisen</h3>
                        <p>CMO</p>
                        <p>Chief Sales Officer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team