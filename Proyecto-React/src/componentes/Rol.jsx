import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export const Rol = () => {
  const [nombre, setNombre] = useState('');
  const [roles, setRoles] = useState([]); // Estado para almacenar los datos de roles

  useEffect(() => {
    // Realiza una solicitud GET para obtener los datos de roles cuando se monta el componente
    fetchRoles();
  }, []);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const bodyResponse = {
        nombre,
      };

      // Realiza una solicitud POST para crear un nuevo rol
      const response = await fetch('http://localhost:3000/api/rol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyResponse),
      });

      if (response.status === 200) {
        // Si la solicitud es exitosa, limpia el campo de nombre y actualiza la lista de roles
        setNombre('');
        fetchRoles();
      } else {
        console.error('Error al crear el rol');
      }
    } catch (error) {
      console.error('Error al crear el rol', error);
    }
  };

  const fetchRoles = async () => {
    try {
      // Realiza una solicitud GET para obtener los datos de roles
      const response = await fetch('http://localhost:3000/api/rol');
      const data = await response.json();

      if (response.status === 200) {
        setRoles(data); // Almacena los datos en el estado
      } else {
        console.error('Error al obtener los roles');
      }
    } catch (error) {
      console.error('Error al obtener los roles', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs md="10">
          <h3 className="text-center">Rol</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={handleNombreChange}
              />
            </Form.Group>

            <Button className="mb-5" variant="primary" type="submit" onClick={handleSubmit}>
              Enviar
            </Button>
          </Form>

          <h3 className="text-center mb-5">ReporteRol</h3>

          <Table className="table-success">
            <thead>
              <tr>
                
                <th>Nombre</th>
                <th>Activo</th>
                
              </tr>
            </thead>
            <tbody>
              {roles.map((rol) => (
                <tr key={rol.id}>
                  
                  <td>{rol.nombre}</td>
                  <td>{rol.activo ? 'True' : 'False'}</td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
