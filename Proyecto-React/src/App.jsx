import { Inicio } from './componentes/Inicio'
import { Horarios } from './componentes/Horarios'
import { Laboratorio } from './componentes/Laboratorio'
import { Reservas } from './componentes/Reservas'
import { Rol } from './componentes/Rol'
import { Usuario } from './componentes/Usuario'
import { Menu } from './componentes/Menu'
import { Routes, Route } from 'react-router-dom'
import { useState, useCallback } from 'react';
import { Login } from './componentes/Login/Login'

function App() {
  const [inicioSesion, setInicioSesion] = useState(false);



  const onInicioSesion = (val) => {
    console.log(val);
    
    setInicioSesion(val);
  }

  return (
    <>
      {inicioSesion && <Menu auth />}
      <Routes>
        {inicioSesion == false && <Route path='/' element={<Login dataSesion={onInicioSesion} />}  ></Route>}
        {inicioSesion && <Route path='/' element={<Inicio />} ></Route>}
        {inicioSesion && <Route path='/horarios' element={<Horarios />}  ></Route>}
        {inicioSesion && <Route path='/laboratorio' element={<Laboratorio />}  ></Route>}
        {inicioSesion && <Route path='/reservas' element={<Reservas />}  ></Route>}
        {inicioSesion && <Route path='/rol' element={<Rol />}  ></Route>}
        {inicioSesion && <Route path='/usuario' element={<Usuario />}  ></Route>}
        
        
        


      </Routes>
    </>
  );
}

export default App;





