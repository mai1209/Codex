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
      setIsMobile(window.innerWidth <= 1000)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

useEffect(() => {
  const setAppHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const container = document.querySelector('.interstellarContainer');
    if (container) {
      const contentHeight = Math.max(
        window.innerHeight,
        document.documentElement.scrollHeight
      );
      container.style.height = `${contentHeight}px`;
      container.style.width = `${window.innerWidth}px`;
    }
  };

  setAppHeight();
  window.addEventListener('resize', setAppHeight);
  window.addEventListener('orientationchange', setAppHeight);

  return () => {
    window.removeEventListener('resize', setAppHeight);
    window.removeEventListener('orientationchange', setAppHeight);
  };
}, []);


  return (
    <StrictMode>
     {/* 👇 AÑADE ESTE DIV CONTENEDOR 👇 */}
      <div className="app-wrapper">
        <Nav />
        <App /> {/* App ya contiene InterstellarBackground */}
        <WeDo />
        {isMobile ? <Diagrama /> : <DiagramaM />}
        <Done />
        <Team />
        <Contacto />
      </div>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<RootApp />)
