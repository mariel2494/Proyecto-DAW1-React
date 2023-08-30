//Steven

import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export const Reservas = () => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md='10'>
                    <h1 className='text-center mb-4'>Reservas</h1>
                    <Form>
                        <Form.Group controlId='formLab'>
                            <Form.Label>Laboratorio</Form.Label>
                            <Form.Select>
                                <option value='1'>Lab 1</option>
                                <option value='2'>Lab 2</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId='formHorario'>
                            <Form.Label>Horario</Form.Label>
                            <Form.Select>
                                <option value='1'>9:00 AM - 11:00 AM</option>
                                <option value='2'>11:00 AM - 1:00 PM</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId='formUsuario'>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Select>
                                <option value='1'>User 1</option>
                                <option value='2'>User 2</option>
                            </Form.Select>
                        </Form.Group>


                        <Form.Group controlId='formFechaIngreso'>
                            <Form.Label>Fecha Ingreso</Form.Label>
                            
                            <Form.Control type='date' />
                            <th />
                        </Form.Group>
                        <th />

                        <Button variant='primary' type='submit'>
                            Enviar
                        </Button>
                    </Form>

                    <h2 className='mt-5 text-center'>ReporteReservas</h2>
                    <Table striped bordered responsive>
                        <thead>
                            <tr>
                                <th>IdReserva</th>
                                <th>IdLab</th>
                                <th>IdHorario</th>
                                <th>IdUsuario</th>
                                <th>Fecha Ingreso</th>
                                <th>Activo</th>
                                <th>Fecha Desactivado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>Dato1</td>
                                <td>True</td>
                                <td>Dato2</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};




