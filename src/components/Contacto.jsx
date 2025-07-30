import { useState } from 'react';
import style from '../styles/Contacto.module.css';
import Swal from 'sweetalert2';

function Contacto() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Gracias por contactarte, te responderé pronto.',
          icon: 'success',
          background: '#1C1C1C',
          color: '#fff',
          confirmButtonColor: '#FF1493',
           confirmButtonText: 'Genial',
          iconColor: '#FF1493',
           customClass: {
    popup: 'swal-custom',
    confirmButton: 'swal-confirm-btn'
  }
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo enviar el mensaje. Intenta nuevamente.',
          icon: 'error',
          confirmButtonColor: '#FF1493',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error de conexión',
        text: 'Hubo un problema de red. Revisa tu conexión e intenta otra vez.',
        icon: 'error',
        confirmButtonColor: '#FF1493',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={style.container} id="contacto">
      <div className={style.containerInformation}>
        <h2>CONTACTANOS</h2>
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/7cc625d51224baae948a2cb061816416"
          method="POST"
        >
          <div className={style.inputContainer}>
            <label htmlFor="nombreApellido" className={style.placeholderFijo}>
              nombre y apellido:
            </label>
            <input
              type="text"
              id="nombreApellido"
              name="nombreApellido"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="email" className={style.placeholderFijo}>
              email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@ejemplo.com"
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="asunto" className={style.placeholderFijo}>
              asunto:
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              placeholder="Motivo de contacto"
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="rubro" className={style.placeholderFijo}>
              rubro:
            </label>
            <input
              type="text"
              id="rubro"
              name="rubro"
              placeholder="Tu sector o rubro"
              required
            />
          </div>

          {/* Campos ocultos para formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

          <div className={style.containerBtn}>
            <button className={style.btn} type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Contactarme'}
            </button>
          </div>
        </form>
      </div>

      <div className={style.containerInfo}>
        <img
          className={style.logoFooter}
          src="./logoFooter.png"
          alt="Logo de la empresa Codex"
        />
      </div>
      <div className={style.redes}>
        <a href="#" target='_blank' rel="noopener noreferrer"> <img src="./LinkedIn.png" alt="LinkedIn" /></a>
       <a  href="https://instagram.com/codexcorporation" target='_blank' rel="noopener noreferrer"> <img src="./Instagram.png" alt="Instagram" /></a>
       <a href="https://wa.me/5493425543308" target="_blank" rel="noopener noreferrer"> <img src="./WhatsApp.png" alt="WhatsApp" /></a>
      </div>
      <footer>
        <p>Política de privacidad</p>
        <p>Aviso legal</p>
        <p>Política de cookies</p>
      </footer>
    </div>
  );
}

export default Contacto;
