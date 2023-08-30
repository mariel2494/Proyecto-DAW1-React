//Mariel
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Horarios = () => {
  return (
    <>
      
<Container fluid>
  <Row className="justify-content-md-center">
    <Col className='col-sm-12 col-lg-6 '>
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
     
    </Col>
 
  </Row>


</Container>
      


    </>
  )
}
