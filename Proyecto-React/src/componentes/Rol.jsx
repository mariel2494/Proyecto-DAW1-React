//Elvis
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import React from 'react'


export const Rol = () => {
  return (
    <>
      <div className="container" style={{ maxWidth: "550px", margin: "0 auto", padding: "20px" }}>

        <h3 className='text-center'>Rol</h3>
        <Form >
          <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form">
            <Form.Label>Fecha Desactivado</Form.Label>
            <Form.Control type="time" placeholder="Fechas desactivado" />
          </Form.Group>

          <Button className="mb-5" variant="primary" type="submit">
            Enviar
          </Button>
        </Form>


        <h3 className='text-center mb-5'>ReporteRol</h3>

        <Table class='table-success'>
          <th>IdRol</th>
          <th>Nombre</th>
          <th>Activo</th>
          <th>Fecha Desactivado</th>
          <tbody>
            <tr class="table-success">
              <td>1</td>
              <td>Elvis Flores</td>
              <td>True</td>
              <td>30/08/2023  16:00:00</td>
            </tr>
          </tbody>
        </Table>



      </div>



    </>
  )
}
