import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import NavContaxt from './context/NavContaxt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Stairs>
  <NavContaxt> <App /> </NavContaxt>
   </Stairs>
   </BrowserRouter>
  </StrictMode>,
)
