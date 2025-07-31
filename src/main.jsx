import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './components/App'
import WeDo from './components/WeDo'
import Diagrama from './components/Diagrama'     
import DiagramaM from './components/DiagramaM'   
import Done from './components/Done'  
import Nav from './components/Nav'
import Team from './components/Team'
import Contacto from './components/Contacto'

function RootApp() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000 )
    }

    handleResize() 
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // En tu componente o archivo principal
useEffect(() => {
  // Solución definitiva para el viewport móvil
  const setAppHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Asegurar que cubra todo el espacio posible
    const container = document.querySelector('.interstellarContainer');
    if (container) {
      container.style.height = `${window.innerHeight + 10}px`;
      container.style.width = `${window.innerWidth + 10}px`;
    }
  };

  // Ejecutar al cargar y al cambiar orientación
  setAppHeight();
  window.addEventListener('resize', setAppHeight);
  window.addEventListener('orientationchange', setAppHeight);

  // Bloquear completamente el scroll en móvil
  const preventDefault = (e) => {
    e.preventDefault();
  };
  
  document.addEventListener('touchmove', preventDefault, { passive: false });

  return () => {
    window.removeEventListener('resize', setAppHeight);
    window.removeEventListener('orientationchange', setAppHeight);
    document.removeEventListener('touchmove', preventDefault);
  };
}, []);

  return (
    <StrictMode>
      <Nav></Nav>
      <App />
      <WeDo />
      {isMobile ? <Diagrama /> : <DiagramaM />}
      <Done />
      <Team></Team>
    <Contacto/>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<RootApp />)
