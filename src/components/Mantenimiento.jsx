import style from "../styles/Mantenimiento.module.css";

function Mantenimiento() {
  return (
    <div className={style.container}>
      <img className={style.logo} src="/logo.webp" alt="Codex" />

      <svg
        className={style.rocketScene}
        viewBox="0 0 240 170"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className={style.trail}
          d="M12 160 Q78 152 102 102"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="0.5 14.5"
        />
        <g transform="translate(150 8) rotate(45)">
          <g className={style.rocketBob}>
            <g className={style.flame}>
              <path
                d="M32 68 C39 77 39 86 32 95 C25 86 25 77 32 68 Z"
                fill="#fff"
                stroke="#070a0c"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M32 74 C35.5 79 35.5 84 32 88.5 C28.5 84 28.5 79 32 74 Z"
                fill="#FF1493"
              />
            </g>
            <path d="M18 50 L7 70 L18 65 Z" fill="#070a0c" />
            <path d="M46 50 L57 70 L46 65 Z" fill="#070a0c" />
            <path
              d="M32 3 C42 15 46 29 46 43 L46 63 L18 63 L18 43 C18 29 22 15 32 3 Z"
              fill="#fff"
              stroke="#070a0c"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M26 63 L38 63 L36 70 L28 70 Z" fill="#070a0c" />
            <circle
              cx="32"
              cy="35"
              r="8"
              fill="#FF1493"
              stroke="#070a0c"
              strokeWidth="3"
            />
          </g>
        </g>
      </svg>

      <h1 className={style.title}>Estamos mejorando para vos</h1>
      <p className={style.subtitle}>
        La página está en mantenimiento. Volvemos muy pronto con una
        experiencia renovada. #LetsBuildIt
      </p>

      <a
        className={style.btn}
        href="https://wa.me/5493425543308"
        target="_blank"
        rel="noopener noreferrer"
      >
        Escribinos por WhatsApp
      </a>

      <div className={style.wordmarkWrap} aria-hidden="true">
        <span className={style.wordmark}>CODEX</span>
      </div>
    </div>
  );
}

export default Mantenimiento;
