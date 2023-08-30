//Mariel
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Horarios = () => {
  return (
    <>
      
<container>
  <Row className="justify-content-md-center">
    <Col xs md='10'>
    <h2>Horarios</h2>
<Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Hora de Inicio</Form.Label>
        <Form.Control type="time" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Hora Finalizacion</Form.Label>
        <Form.Control type="time" placeholder="Password" />
      </Form.Group>

      <Button className="mb-5" variant="primary" type="submit">
        Enviar
      </Button>
    </Form>


      <h2>ReporteHorarios</h2>
      <table class='table'>
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
    </Col>
 
  </Row>


</container>
      


    </>
  )
}
