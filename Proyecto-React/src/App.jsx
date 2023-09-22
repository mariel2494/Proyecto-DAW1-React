import { Inicio } from './componentes/Inicio'
import { Horarios } from './componentes/Horarios'
import { Laboratorio } from './componentes/Laboratorio'
import { Reservas } from './componentes/Reservas'
import { Rol } from './componentes/Rol'
import { Usuario } from './componentes/Usuario'
import { Menu } from './componentes/Menu'
import { Routes, Route } from 'react-router-dom'


function App() {



 
  return (
    <>

<Menu/>
    <Routes>
    <Route path='/' element={ <Inicio />}  ></Route>
    <Route path='/horarios' element={ <Horarios />}  ></Route>
    <Route path='/laboratorio' element={ <Laboratorio />}  ></Route>
    <Route path='/reservas' element={ <Reservas />}  ></Route>
    <Route path='/rol' element={ <Rol />}  ></Route>
    <Route path='/usuario' element={ <Usuario />}  ></Route>
    </Routes> 

  
    </>
  );
}

export default App
