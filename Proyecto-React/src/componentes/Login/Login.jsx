import { useState, useCallback } from 'react'; 
import { Link } from 'react-router-dom'; 

 
export const Login = ({ dataSesion }) => { 
  const [correo, setCorreo] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const url = "http://localhost:3000/api/login";
 
  const handleCorreoChange = useCallback((event) => { 
    setCorreo(event.target.value); 
  }, []); 
 
  const handlePasswordChange = useCallback((event) => { 
    setPassword(event.target.value); 
  }, []); 
 
  const handleSubmit = useCallback(async (event) => { 
    event.preventDefault(); 
    setError(''); // Limpiar el estado de error al enviar el formulario 
 
    // Validar que los campos estén completos 
    if (correo.trim() === '' || password.trim() === '') { 
      setError('Por favor, complete todos los campos'); 
      return; 
    } 
 
    try { 
      const bodyResponse = { 
        correo: correo,  
        password: password 
      }; 
      const response = await fetch(url, { 
        
        method: "POST", 
        headers: { 
          "Content-Type": "application/json", 
        }, 
        body: JSON.stringify(bodyResponse) 
      }); 

      const jsonResponse = await response.json();
       
      if (response.status === 200) { 
        console.log(jsonResponse); 
        dataSesion(true); 
      } 
    } catch (error) { 
      console.log(error); 
      if (error.response) { 
        setError(error.response.data.error); 
      } else { 
        setError('Error de conexión'); 
      } 
    } 
  }, [correo, password, dataSesion]); 
 
  return ( 
    <> 
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}> 
        <h1 className="text-center">Iniciar Sesión</h1> 
        {error && <div className="alert alert-danger">{error}</div>} 
        <form onSubmit={handleSubmit}> 
          <div> 
            <label>Correo Electrónico:</label> 
            <input 
              type="email" 
              className='form-control' 
              value={correo} 
              onChange={handleCorreoChange} 
            /> 
          </div> 
          <div> 
            <label>Contraseña:</label> 
            <input 
              type="password" 
              className='form-control' 
              value={password} 
              onChange={handlePasswordChange} 
            /> 
          </div> 
          <br /> 
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button> 
          <Link className='link-style' to="/usuarios">Registrarse</Link> 
        </form> 
      </div> 
    </> 
  ); 
};