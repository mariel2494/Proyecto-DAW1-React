import  { React, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const url = "http://localhost:3000/api/usuario";

export const Usuario = () => {

  
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const getUsuario = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getUsuario();
  }, []);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  const postUsuario = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("apellido", apellido);
      formData.append("correo", correo);
      formData.append("contrasenia", password);


      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al enviar datos al servidor");
      }

      // Actualizar la lista de datos después de enviar el nuevo producto
      getUsuario();

      // Limpiar los campos después de enviar
      setNombre("");
      setApellido("");
      setCorreo("");
      setPassword("");
  
    } catch (error) {
      console.error(error);
    
    }
  };



  return (
    <>
     <div className="container" style={{ maxWidth: "550px", margin: "0 auto", padding: "20px" }}>
        <h1 className="text-center">Crear Usuario</h1>

        <form onSubmit={postUsuario}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              value={apellido}
              onChange={handleApellidoChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="text"
              className="form-control"
              value={correo}
              onChange={handleCorreoChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contrasena</label>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Crear Usuario
          </button>
          <br /><br />
        </form>



      </div>
   </>
  )
}
