import style from "../styles/Team.module.css"

function Team() {
    return (
        <div className={style.container} id="nuestro-equipo">
              {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={style.videoBackground}
      >
        <source src="video.mp4" type="video/mp4" />
        <p>El video no se carga. Revisa la consola para errores.</p>
      </video>
            <div className={style.line}>
                <h2 className={style.title}>OUR TEAM</h2>
            <div className={style.containerTeam}>
                <img src="" alt="img-mai" />
                <div className={style.containerInfo}>
                    <h3 >Maira Coria</h3>
                    <p>Co-Founder</p>
                    <p>Social media</p>
                    <p>Full stack developer</p>
                </div>
            </div>
            <div className={style.containerTeam}>
                <img src="" alt="img-david" />
                <div className={style.containerInfo}>
                    <h3>David Menendez</h3>
                    <p>Co-Founder</p>
                    <p>Marketing strategies</p>
                    <p>UX | UI Design</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Team