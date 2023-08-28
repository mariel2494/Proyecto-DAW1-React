import React from 'react'
import ReactDOM from 'react-dom/client'
import { Horarios } from './assets/Horarios'
import { ReporteHorarios } from './assets/ReporteHorarios'
import { Rol } from './assets/Rol'
import { ReporteRol } from './assets/ReportesRoles'
import { Reservas } from './assets/Reservas'
import { ReporteReservas } from './assets/ReporteReservas'

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

ReactDOM.createRoot(document.getElementById('Rol')).render(
  <React.StrictMode>
    <Rol />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('ReporteRol')).render(
  <React.StrictMode>
    <ReporteRol />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('Reservas')).render(
  <React.StrictMode>
    <Reservas />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('ReporteReservas')).render(
  <React.StrictMode>
    <ReporteReservas />
  </React.StrictMode>
)
