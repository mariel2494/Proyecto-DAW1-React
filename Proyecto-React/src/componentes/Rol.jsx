import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Rol = () => {
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFinalizacion, setHoraFinalizacion] = useState('');
  const [horarios, setHorarios] = useState([]);
  const [error, setError] = useState('');
  const url ='http://localhost:3000/api/horarios'

  useEffect(() => {
    fetchHorarios();
  }, []);

  const handleHoraInicioChange = (event) => {
    setHoraInicio(event.target.value);
  };

  const handleHoraFinalizacionChange = (event) => {
    setHoraFinalizacion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const bodyResponse = {
        horainicio: horaInicio,
        horafinal: horaFinalizacion,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyResponse),
      });

      if (response.status === 200) {
        setHoraInicio('');
        setHoraFinalizacion('');
        fetchHorarios();
      } else {
        setError('Error al crear el horario');
      }
    } catch (error) {
      console.error('Error al crear el horario', error);
      setError('Error al crear el horario');
    }
  };

  const fetchHorarios = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.status === 200) {
        setHorarios(data);
      } else {
        setError('Error al obtener los horarios');
      }
    } catch (error) {
      console.error('Error al obtener los horarios', error);
      setError('Error al obtener los horarios');
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className='col-sm-12 col-lg-6 '>
          <h3 className='text-center'>Horarios</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <Form>
            <Form.Group className="mb-3 " controlId="formHoraInicio">
              <Form.Label>Hora de Inicio</Form.Label>
              <Form.Control
                type="time"
                placeholder="Hora de Inicio"
                value={horaInicio}
                onChange={handleHoraInicioChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formHoraFinalizacion">
              <Form.Label>Hora Finalización</Form.Label>
              <Form.Control
                type="time"
                placeholder="Hora Finalización"
                value={horaFinalizacion}
                onChange={handleHoraFinalizacionChange}
              />
            </Form.Group>

            <div className='text-center'>
              <Button
                className="mb-5"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Enviar
              </Button>
            </div>

            <h3 className='text-center mb-5'>ReporteHorarios</h3>
          </Form>

          <div className='text-center'>
            <table className='table'>
              <thead>
                <tr>
                  <th>IdHorario</th>
                  <th>Hora Inicio</th>
                  <th>Hora Finalización</th>
                  <th>Activo</th>
                  <th>Fecha Borrado</th>
                </tr>
              </thead>
              <tbody>
                {horarios.map((horario) => (
                  <tr key={horario.id_horario}>
                    <td>{horario.id_horario}</td>
                    <td>{horario.horainicio}</td>
                    <td>{horario.horafinal}</td>
                    <td>{horario.activo ? 'Activo' : 'Inactivo'}</td>
                    <td>{horario.fecha_borrado || 'No Eliminado'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
