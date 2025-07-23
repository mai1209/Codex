import { useState } from 'react'; 
import style from '../styles/Contacto.module.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    email: '',
    asunto: '',
    rubro: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Datos del formulario enviados:', formData);
    setFormData({
      nombreApellido: '',
      email: '',
      asunto: '',
      rubro: '',
    });
    alert('¡Formulario enviado con éxito!');
  };

  return (
    <div className={style.container} id="contacto">
  
    

      <div className={style.containerInformation}>
        <h2>CONTACTO</h2>
        {/* Agregamos el manejador onSubmit al formulario */}
        <form onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            {/* Es mejor usar <label> con htmlFor para accesibilidad */}
            <label htmlFor="nombreApellido" className={style.placeholderFijo}>nombre y apellido:</label>
            <input
              type="text"
              id="nombreApellido" // ID único para el input
              name="nombreApellido" // Nombre para el input (crucial para el estado y el envío)
              value={formData.nombreApellido} // El valor del input está controlado por el estado
              onChange={handleChange} // Llama a handleChange cada vez que el valor cambia
              required // Hace que el campo sea obligatorio
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="email" className={style.placeholderFijo}>email:</label>
            <input
              type="email" // Tipo "email" para validación básica y teclado móvil adecuado
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="asunto" className={style.placeholderFijo}>asunto:</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="rubro" className={style.placeholderFijo}>rubro:</label>
            <input
              type="text"
              id="rubro"
              name="rubro"
              value={formData.rubro}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.containerBtn}>
            <button className={style.btn} type="submit">Contactarme</button>
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
        <img src="./LinkedIn.png" alt="LinkedIn" />
        <img src="./Instagram.png" alt="Instagram" />
        <img src="./WhatsApp.png" alt="WhatsApp" />
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