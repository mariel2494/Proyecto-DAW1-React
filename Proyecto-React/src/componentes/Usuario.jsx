import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const url = "http://localhost:3000/api/usuario";

export const Usuario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleContraseniaChange = (event) => {
    setContrasenia(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          correo: correo,
          contrasenia: contrasenia
        })
      });

      if (!response.ok) {
        throw new Error("Error al enviar datos al servidor");
      }

      // Limpiar los campos después de enviar
      setNombre("");
      setApellido("");
      setCorreo("");
      setContrasenia("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1 className="text-center">Crear Usuario</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={nombre} onChange={handleNombreChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" value={apellido} onChange={handleApellidoChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" value={correo} onChange={handleCorreoChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContrasenia">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" value={contrasenia} onChange={handleContraseniaChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear Usuario
        </Button>
      </Form>
    </div>
  );
};
