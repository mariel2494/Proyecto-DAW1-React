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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);
  };
 
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/horarios' element={<Horarios />} />
        <Route path='/laboratorio' element={<Laboratorio />} />
        <Route path='/reservas' element={<Reservas />} />
        <Route path='/rol' element={<Rol />} />
        <Route path='/usuario' element={<Usuario />} />
        {/* Add a new route for the Login component */}
        <Route
          path='/login'
          element={
            isAuthenticated ? (
              // Redirect to another page if the user is already authenticated
              <Navigate to='/' />
            ) : (
              // Render the Login component if the user is not authenticated
              <Login dataSesion={handleLogin} />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;





