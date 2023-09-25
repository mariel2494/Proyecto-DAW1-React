
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Inicio } from './componentes/Inicio';
import { Menu } from './componentes/Menu';

import { Horarios } from './componentes/Horarios';
import { Laboratorio } from './componentes/Laboratorio';
import { Reservas } from './componentes/Reservas';
import { Rol } from './componentes/Rol';
import { Usuario } from './componentes/Usuario';
import Login from './componentes/Login/Login';

function App() {
  const [inicioSesion, setInicioSesion] = useState(false);
  const [id_rol, setId_rol] = useState(0);

  const handleInicioSesion = (val) => {
    console.log('Inicio de sesión exitoso:', val);
    setId_rol(val);
    setInicioSesion(val);
  };

  return (
    <>
      {inicioSesion && <Menu auth={id_rol}/>}
      <Routes>
        {inicioSesion == false && <Route path='/' element={<Login dataSesion={handleInicioSesion} />}  ></Route>}
        {inicioSesion && <Route path='/inicio' element={<Inicio />} />}
        {inicioSesion && id_rol == 1 &&<Route path="/horarios" element={<Horarios />} />}
        {inicioSesion && id_rol == 1 &&<Route path="/laboratorio" element={<Laboratorio />} />}
        {inicioSesion && id_rol == 2 &&<Route path="/reservas" element={<Reservas />} />}
        {inicioSesion && id_rol == 1 &&<Route path="/rol" element={<Rol />} />}
        {inicioSesion && id_rol == 1 &&<Route path="/usuario" element={<Usuario />} />}
      </Routes>

    </>
  );
}

export default App;