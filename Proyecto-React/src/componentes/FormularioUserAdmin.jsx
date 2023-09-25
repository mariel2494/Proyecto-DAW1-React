
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const url = "http://localhost:3000/api/usuario";

export const FormularioUserAdmin = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [rol, setRol] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [editandoUsuario, setEditandoUsuario] = useState(null);

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

  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (editandoUsuario) {
      // Actualizar usuario existente
      try {
        const response = await fetch(`${url}/${editandoUsuario.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            contrasenia: contrasenia,
            rol: rol
          })
        });

        if (!response.ok) {
          throw new Error("Error al actualizar el usuario");
        }

        setEditandoUsuario(null);
      } catch (error) {
        console.error(error);
      }
    } else {
      // Crear nuevo usuario
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
            contrasenia: contrasenia,
            rol: rol
          })
        });

        if (!response.ok) {
          throw new Error("Error al enviar datos al servidor");
        }
      } catch (error) {
        console.error(error);
      }
    }

    setNombre("");
    setApellido("");
    setCorreo("");
    setContrasenia("");
    setRol("");
    obtenerUsuarios();
  };

  const obtenerUsuarios = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
      }

      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditarUsuario = (usuario) => {
    setNombre(usuario.nombre);
    setApellido(usuario.apellido);
    setCorreo(usuario.correo);
    setContrasenia(usuario.contrasenia);
    setRol(usuario.rol);
    setEditandoUsuario(usuario);
  };

  const handleEliminarUsuario = async (usuarioId) => {
    try {
      const response = await fetch(`${url}/${usuarioId}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }

      obtenerUsuarios();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
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
        <Form.Group className="mb-3" controlId="formRol">
          <Form.Label>Rol</Form.Label>
          <Form.Select value={rol} onChange={handleRolChange}>
            <option value="">Selecciona un tipo de rol</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          {editandoUsuario ? "Actualizar Usuario" : "Crear Usuario"}
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.rol}</td>
              <td>
                <Button variant="primary" onClick={() => handleEditarUsuario(usuario)}>Editar</Button>{' '}
                <Button variant="danger" onClick={() => handleEliminarUsuario(usuario.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};