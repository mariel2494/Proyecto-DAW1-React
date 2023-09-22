import { Inicio } from './componentes/Inicio'
import { Horarios } from './componentes/Horarios'
import { Laboratorio } from './componentes/Laboratorio'
// import { Reservas } from './componentes/Reservas'
import { Rol } from './componentes/Rol'
import { Usuario } from './componentes/Usuario'
import { Menu } from './componentes/Menu'
import { Routes, Route } from 'react-router-dom'
import { useState} from 'react';
// import { Link } from 'react-router-dom';
import { Login } from './componentes/Login/Login'

function App() {
  const [inicioSesion, setIsAuthenticated, setInicioSesion] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);

  };
  const onInicioSesion = (val) => {
    console.log(val);
    setInicioSesion(val);
  }

  return (
    <>
      { <Menu auth />}
      <Routes>
        {<Route path='/' element={<Login dataSesion={onInicioSesion} />}  ></Route>}
        {<Route path='/' element={<Inicio />} />}
        {<Route path='/horarios' element={<Horarios />} />}
        {<Route path='/laboratorio' element={<Laboratorio />} />}
        {/* {inicioSesion && <Route path='/reservas' element={<Reservas />} />} */}
        {<Route path='/rol' element={<Rol />} />}
        {<Route path='/usuario' element={<Usuario />} />}

        <Route />
      </Routes>
    </>
  );
}

export default App;





