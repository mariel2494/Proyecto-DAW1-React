
import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ dataSesion }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const url = "http://localhost:3000/api/login";

  const handleCorreoChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    
    if (email.trim() === '' || password.trim() === '') {
      setError('Por favor, complete todos los campos');
      return;
    }

    try { 
      const bodyResponse = { 
        correo: email,
        contrasenia: password
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
        dataSesion(jsonResponse.user.id_rol, jsonResponse.user.id_usuario, jsonResponse.user.correo, jsonResponse.user.nombre); 
        
        console.log("🚀 ~ file: Login.jsx:50 ~ handleSubmit ~ dataSesion:", dataSesion)
        navigate('/inicio'); // Cambia '/dashboard' a la ruta que desees
      } 


    } catch (error) {
      console.error(error);
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Error de conexión');
      }
    } 
  };

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
              value={email}
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
          <Link className='link-style' to="/registrarse">Registrarse</Link>
        </form>
      </div>
    </>
  );
};

Login.propTypes = {
  dataSesion: PropTypes.func.isRequired,
};

export default Login;