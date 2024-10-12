import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { CarritoApp } from './components/CarritoApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoApp/>
  </StrictMode>,
)
