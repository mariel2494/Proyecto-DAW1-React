import { Inicio } from './componentes/Inicio'
import { Horarios } from './componentes/Horarios'
import { Laboratorio } from './componentes/Laboratorio'
import { Reservas } from './componentes/Reservas'
import { Rol } from './componentes/Rol'
import { Usuario } from './componentes/Usuario'
import { Menu } from './componentes/Menu'
import { Routes, Route } from 'react-router-dom'
import { Login } from './componentes/Login/Login'
function App() {



  const [inicioSesion, setInicioSesion] = useState(false);
  const [id_rol, setId_rol] = useState(0);


  const onInicioSesion = (val) => {
    console.log(val);
    setId_rol(val);
    setInicioSesion(val);
  }
  return (
    <>

      {inicioSesion && <Menu auth={id_rol} />}
      <Routes>
        {inicioSesion == false && <Route path='/' element={<Login dataSesion={onInicioSesion} />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/horarios' element={<Horarios />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/laboratorio' element={<Laboratorio />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/reservas' element={<Reservas />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/rol' element={<Rol />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/usuario' element={<Usuario />}  ></Route>}
        {inicioSesion && <Route path='*' element={<Default />}  ></Route>}
        {inicioSesion == false && <Route path='*' element={<Login />}  ></Route>}


      </Routes>
    </>
  );
}

export default App
