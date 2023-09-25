import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Rol = () => {
  const [nombreRol, setNombreRol] = useState('');
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleNombreRolChange = (event) => {
    setNombreRol(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const bodyResponse = {
        nombre: nombreRol,

      };
      const response = await fetch('http://localhost:3000/api/rol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyResponse),
      });
      if (response.status === 200) {
        setNombreRol('');
        fetchRoles();
      } else {
        setError('Error al crear el rol');
      }
    } catch (error) {
      console.error('Error al crear el rol', error);
      setError('Error al crear el rol');
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/rol');
      const data = await response.json();
      if (response.status === 200) {
        setRoles(data);
      } else {
        setError('Error al obtener los roles');
      }
    } catch (error) {
      console.error('Error al obtener los roles', error);
      setError('Error al obtener los roles');
    }
  };

  return (
    <>
      <div className="container" style={{ maxWidth: "550px", margin: "0 auto", padding: "20px" }}>
        <h3 className='text-center'>Roles</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNombreRol">
            <Form.Label>Nombre del Rol</Form.Label>
            <Form.Control type="text" value={nombreRol} onChange={handleNombreRolChange} />
          </Form.Group>

          <div className='text-center'>
            <Button className="mb-5" variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
        <h3 className='text-center mb-5'>ReporteRoles</h3>
        <div className='text-center'>
          <table className='table'>
            <thead>
              <tr>

                <th>Nombre del Rol</th>
                <th>Accion</th>

              </tr>
            </thead>
            <tbody>
              {roles.map((rol) => (
                <tr key={rol.id_rol}>

                  <td>{rol.nombre}</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
