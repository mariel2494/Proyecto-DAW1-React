import React from 'react'
import ReactDOM from 'react-dom/client'
import { Horarios } from './assets/Horarios'
import { ReporteHorarios } from './assets/ReporteHorarios'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Horarios />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('ReporteHorarios')).render(
  <React.StrictMode>
<ReporteHorarios />
  </React.StrictMode>,
)