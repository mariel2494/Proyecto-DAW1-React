//Steven
import { useState, useEffect } from "react";
import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';




const url ='http://localhost:3000/api/horarios';
const urlLab ='http://localhost:3000/api/laboratorio';


export const Reservas = () => {
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        // Realiza la solicitud a la API
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setData(result); // Almacena los datos en el estado
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, []);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
        // Realiza la solicitud a la API
        fetch(urlLab)
            .then((response) => response.json())
            .then((result) => {
                setDatos(result); // Almacena los datos en el estado
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, []);




    return (
        <Container>


            <Row className='justify-content-center'>


                <Col md='10'>
                    <h1 className='text-center mb-4'>Reservas</h1>
                    <Form>
                        <Form.Group controlId='formLab'>
                            <Form.Label>Laboratorio</Form.Label>
                            <Form.Select >
                            <option value="">Selecciona una opción</option>
                                {datos.map((item) => (<option key={item.id_lab} value={item.id_lab}>{item.nombre}</option>))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId='formHorario'>
                            <Form.Label>Horario</Form.Label>
                            <Form.Select >
                            <option value="">Selecciona una opción</option>
                                {data.map((item) => (<option key={item.id_horario} value={item.id_horario}>{item.horainicio}</option>))}
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
                            Reservar
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

                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>


    );
};




