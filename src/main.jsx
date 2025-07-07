import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './components/App'
import WeDo from './components/WeDo'
//import Diagrama from './components/Diagrama'
import MyFlow from './components/Diagrama'
import Diagrama from './components/Diagrama'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WeDo />
    <Diagrama />

  </StrictMode>,
)
