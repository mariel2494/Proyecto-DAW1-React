import { Inicio } from './componentes/Inicio'
import { Horarios } from './componentes/Horarios'
import { Laboratorio } from './componentes/Laboratorio'
import { Reservas } from './componentes/Reservas'
import { Rol } from './componentes/Rol'
import { Usuario } from './componentes/Usuario'
import { Menu } from './componentes/Menu'
import { Routes, Route } from 'react-router-dom'
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Login } from './componentes/Login/Login'

function App() {
  const [inicioSesion, isAuthenticated, setIsAuthenticated, setInicioSesion] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);

  };
  const onInicioSesion = (val) => {
    console.log(val);
    setInicioSesion(val);
  }

  return (
    <>
      {inicioSesion && <Menu auth />}
      <Routes>
        {inicioSesion == false && <Route path='/' element={<Login dataSesion={onInicioSesion} />}  ></Route>}
        {inicioSesion && <Route path='/' element={<Inicio />} />}
        {inicioSesion && <Route path='/horarios' element={<Horarios />} />}
        {inicioSesion && <Route path='/laboratorio' element={<Laboratorio />} />}
        {inicioSesion && <Route path='/reservas' element={<Reservas />} />}
        {inicioSesion && <Route path='/rol' element={<Rol />} />}
        {inicioSesion && <Route path='/usuario' element={<Usuario />} />}

        <Route />
      </Routes>
    </>
  );
}

export default App;





