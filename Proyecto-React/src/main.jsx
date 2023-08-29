import React from 'react'
import ReactDOM from 'react-dom/client'
import { Horarios } from './componentes/Horarios'
import { Rol } from './componentes/Rol'
import { Reservas } from './componentes/Reservas'
import { Laboratorio } from './componentes/Laboratorio'
import { Usuario } from './componentes/Usuario';




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
ReactDOM.createRoot(document.getElementById('Laboratorio')).render(
  <React.StrictMode>
    <Laboratorio />
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('Usuario')).render(
  <React.StrictMode>
    <Usuario />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('ReporteUsuario')).render(
  <React.StrictMode>
    <ReporteUsuario />
  </React.StrictMode>
)