import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio } from './componentes/Inicio';
import { Menu } from './componentes/Menu';
import { Laboratorio } from './componentes/Laboratorio';
import { Reservas } from './componentes/Reservas';
import { Usuario } from './componentes/Usuario';
import Login from './componentes/Login/Login';
import { Horarios } from './componentes/Horarios';
import { Rol } from './componentes/Rol';
import { FormularioUserAdmin } from './componentes/FormularioUserAdmin';

function App() {
  const [inicioSesion, setInicioSesion] = useState(false);
  const [id_rol, setId_rol] = useState(0);

  const handleInicioSesion = (val) => {
    console.log('Inicio de sesión exitoso:', val);
    setId_rol(val);
    setInicioSesion(val);
  };

  const handleLogout = () => {
    localStorage.clear();
    setInicioSesion(false);
    setId_rol(0);
    window.location.reload();
  };

  return (
    <>
      {inicioSesion && <Menu auth={id_rol} onLogout={handleLogout} />}
      <Routes>
        {!inicioSesion && <Route path="/" element={<Login dataSesion={handleInicioSesion} />} />}
        {inicioSesion && <Route path="/inicio" element={<Inicio />} />}
        {inicioSesion && id_rol === 1 && <Route path="/horarios" element={<Horarios />} />}
        {inicioSesion && id_rol === 1 && <Route path="/laboratorio" element={<Laboratorio />} />}
        {inicioSesion && id_rol === 1 && <Route path="/reservas" element={<Reservas />} />}
        {inicioSesion && id_rol === 1 && <Route path="/rol" element={<Rol />} />}
        {inicioSesion && id_rol === 1 && <Route path="/formularioUserAdmin" element={<FormularioUserAdmin />} />}
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </>
  );
}

export default App;