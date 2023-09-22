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
const urlUs ='http://localhost:3000/api/usuario';
const urlPost = 'http://localhost:3000/api/reservas';

export const Reservas = () => {
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [laboratorio, setLaboratorio] = useState("");
    const [horainicio, setHorainicio] = useState("");
    const [usuario, setUsuario] = useState("");
    const [fecha, setFecha] = useState("");


  const handleInputLab=(e)=>{
    setLaboratorio(e.target.value);
    
  }
  const handleInputFec=(e)=>{
    setFecha(e.target.value);
    
  }
  const handleInputHora=(e)=>{
    setHorainicio(e.target.value);
   
  }
  const handleInputUsu=(e)=>{
    setUsuario(e.target.value);
  
  }

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


    const [datoUs, setDatoUs] = useState([]);
    useEffect(() => {
        // Realiza la solicitud a la API
        fetch(urlUs)
            .then((response) => response.json())
            .then((result) => {
                setDatoUs(result); // Almacena los datos en el estado
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, []);


    const postReservas = async (event) => {
        event.preventDefault();
    
        try {
         
          const response = await fetch(urlPost, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ laboratorio, horainicio, usuario,fecha }),
          });
    
          if (!response.ok) {
            throw new Error('Error al enviar datos de ciudad al servidor');
          }
    
          // Actualizar la lista de datos después de enviar el nuevo producto
          
    
          // Limpiar los campos después de enviar
          setLaboratorio("");
          setHorainicio("");
          setUsuario("");
      
        } catch (error) {
          console.error(error);
        }
      };
 
    return (
        <Container>


            <Row className='justify-content-center'>


                <Col md='10'>
                    <h1 className='text-center mb-4'>Reservas</h1>
                    <Form onSubmit={postReservas}>
                        <Form.Group controlId='formLab'>
                            <Form.Label>Laboratorio</Form.Label>
                            <Form.Select  onChange={handleInputLab}>
                            <option value="">Selecciona una opción</option>
                                {datos.map((item) => (<option key={item.id_lab} value={item.nombre}>{item.nombre}</option>))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId='formHorario'>
                            <Form.Label>Horario</Form.Label>
                            <Form.Select  onChange={handleInputHora}>
                            <option value="">Selecciona una opción</option>
                                {data.map((item) => (<option key={item.id_horario} value={item.horainicio}>{item.horainicio}</option>))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId='formUsuario'>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Select onChange={handleInputUsu} >
                            <option value="" typeof="mail">Selecciona una opción</option>
                                {datoUs.map((item) => (<option key={item.id_usuario} value={item.correo}>{item.correo}</option>))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId='formFechaIngreso'>
                            <Form.Label>Fecha Ingreso</Form.Label>

                            <Form.Control onChange={handleInputFec} type='date' />
                          
                        </Form.Group>
                        

                        <Button variant='primary' type='submit'>
                            Reservar
                        </Button>
                    </Form>

                   

                    
                </Col>
            </Row>
        </Container>


    );
};




