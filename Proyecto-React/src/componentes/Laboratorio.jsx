import  { React, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const url = "http://localhost:3000/api/laboratorio";


export const Laboratorio = () => {

  
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState(null);

  const getLaboratorio = async () => {
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
    getLaboratorio();
  }, []);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };






  const postLaboratorio = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nombre", nombre);



      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al enviar datos al servidor");
      }

      // Actualizar la lista de datos después de enviar el nuevo producto
      getLaboratorio();

      // Limpiar los campos después de enviar
      setNombre("");

  
    } catch (error) {
      console.error(error);
    
    }
  };

  return (
    <>
      <div className="container" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <h1 className="text-center">Crear Laboratorios</h1>

        <form onSubmit={postLaboratorio}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>




          <button type="submit" className="btn btn-primary">
            Crear Laboratorio
          </button>
          <br /><br />
        </form>



      </div>
    </>
  )
}