
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
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.correo}</td>
              
              <td className="text-center">
                    <button type="button" onClick={() => handleEditarUsuario(usuario)} className="btn btn-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>
                    &nbsp;&nbsp;
                    <button type="button" onClick={() => handleEliminarUsuario(usuario.id)} className="btn btn-danger">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </button>
                  </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};