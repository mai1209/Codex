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
