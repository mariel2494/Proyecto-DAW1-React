import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';

export const Usuario = () => {
  return (
    <>
<Container fluid="md">
<Col className='justify-content-md-center'>
    <h1 className='text-center p-3'>Usuario</h1>
</Col>

      <Row className='justify-content-md-center'>
        <Col className='col-sm-12 col-lg-6'>
        <FloatingLabel
        controlId="floatingInput"
        label="Nombre"
        className="mb-3"
      >
        <Form.Control type="name" placeholder="Erick" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Apellido"
        className="mb-3"
      >
        <Form.Control type="name" placeholder="Osorto" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Correo Electronico"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <div className="d-grid gap-2 mt-3">
      <Button variant="primary" size="lg">
        Enviar
      </Button>
      
    </div>
      
        </Col>
        
      </Row>
    </Container>

    <Container fluid="md mt-5">
        <Row className='justify-content-md-center '>
            <Col className='col-lg-6 col-sm-12'>      
              <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>id_rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Erick</td>
          <td>Osorto</td>
          <td>erick.osorto@unitec.edu</td>
          <td>12345</td>
          <td>Usuario</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Cristiano</td>
          <td>Ronaldo</td>
          <td>cr7@gmail.com</td>
          <td>12345</td>
          <td>Asministrador</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Leo</td>
          <td>Messi</td>
          <td>messi@gmail.com</td>
          <td>12345</td>
          <td>Usuario</td>
        </tr>
     
      </tbody>
    </Table></Col>

        </Row>
    </Container>
    
   </>
  )
}
