import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Router
import '../src/index.css';
import App from './components/App';
import WeDo from './components/WeDo';
//import Diagrama from './components/Diagrama';
import DiagramaM from './components/DiagramaM';
import Done from './components/Done';
import Nav from './components/Nav';
import Team from './components/Team';
import Footer from './components/Footer';
import Orion from './components/Orion'; 
import Ask from './components/Ask';
import Diagrama from './components/Diagrama';

function RootApp() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StrictMode>
      <Router> {/* Envuelve todo en Router */}
        <div className="app-wrapper">
         
          <Routes>
            {/* Ruta principal (página de inicio) */}
            <Route 
              path="/" 
              element={
                <>
                 <Nav /> 
                  <App />
                  <WeDo />
                  {isMobile ? <DiagramaM /> : <DiagramaM />}
                  <Done />
                  <Team />
                <Diagrama />
                  <Footer />
                </>
              } 
            />
            {/* Ruta para Orion */}
            <Route path="/orion" element={<Orion />} />
            <Route path='/ask' element={<Ask />} />
          </Routes>
        </div>
      </Router>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<RootApp />);