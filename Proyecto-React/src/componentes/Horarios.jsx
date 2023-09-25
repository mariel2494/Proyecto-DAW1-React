import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Horarios = () => {
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFinalizacion, setHoraFinalizacion] = useState('');
  const [horarios, setHorarios] = useState([]);
  const [error, setError] = useState('');

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

      const response = await fetch('http://localhost:3000/api/horarios', {
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
      const response = await fetch('http://localhost:3000/api/horarios');
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
    <>

     
            <div className="container" style={{ maxWidth: "550px", margin: "0 auto", padding: "20px" }}>
              <h3 className='text-center'>Horarios</h3>
              <Form >
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>Hora de Inicio</Form.Label>
                  <Form.Control type="time" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Hora Finalizacion</Form.Label>
                  <Form.Control type="time" placeholder="Password" />
                </Form.Group>
                <div className='text-center'>
                  <Button className="mb-5 " variant="primary" type="submit">
                    Enviar
                  </Button>
                </div>
                <h3 className='text-center mb-5'>ReporteHorarios</h3>
              </Form>
              <div className='text-center'>
                <table className='table'>
                  <th>IdHorario</th>
                  <th>Hora Inicio</th>
                  <th>Hora Finalizacion</th>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dato1</td>
                      <td>Dato2</td>
                    </tr>
                  </tbody>
                </table>

              </div>

          

    </div >

    </>
  )
}
