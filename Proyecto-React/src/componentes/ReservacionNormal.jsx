
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const url = 'http://localhost:3000/api/horarios';
const urlLab = 'http://localhost:3000/api/laboratorio';
const urlUs = 'http://localhost:3000/api/usuario';
const urlPost = 'http://localhost:3000/api/reservas';
const urlGet = 'http://localhost:3000/api/reservas';

export const ReservacionNormal = () => {
  const [data, setData] = useState([]);

  const [laboratorio, setLaboratorio] = useState("");
  const [horainicio, setHorainicio] = useState("");
  const [usuario, setUsuario] = useState("");
  const [fecha, setFecha] = useState("");
  const [show, setShow] = useState(true);
  const [reservas, setReservas] = useState([]);
  const [datos, setDatos] = useState([]);
  const [datoUs, setDatoUs] = useState([]);
  const [validated, setValidated] = useState(false);
  const [correoLocalStorage, setCorreoLocalStorage] = useState("");
  

  useEffect(() => {
    const correo = localStorage.getItem("correo");
    setCorreoLocalStorage(correo);
  }, []);


  const handleInputLab = (e) => {
    setLaboratorio(e.target.value);
  }

  const handleInputFec = (e) => {
    setFecha(e.target.value);
  }

  const handleInputHora = (e) => {
    setHorainicio(e.target.value);
  }

  

  const fetchData = async () => {
    try {
      const [horariosResponse, laboratoriosResponse, usuariosResponse] = await Promise.all([
        fetch(url),
        fetch(urlLab),
        fetch(urlUs)
      ]);
      if (!horariosResponse.ok || !laboratoriosResponse.ok || !usuariosResponse.ok) {
        throw new Error('Error al obtener datos de la API');
      }
      const [horariosData, laboratoriosData, usuariosData] = await Promise.all([
        horariosResponse.json(),
        laboratoriosResponse.json(),
        usuariosResponse.json()
      ]);
      setData(horariosData);
      setDatos(laboratoriosData);
      setDatoUs(usuariosData);
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const response = await fetch(urlPost, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ laboratorio, horainicio, usuario: correoLocalStorage, fecha }), // Usa el valor de correoLocalStorage en lugar de usuario
        });
        console.log("🚀 ~ file: Reservas.jsx:90 ~ handleSubmit ~ correoLocalStorage:", correoLocalStorage)
        if (!response.ok) {
          throw new Error('Error al enviar datos de ciudad al servidor');
        }
        await getReservas();
        setLaboratorio("");
        setHorainicio("");
        setUsuario("");
      } catch (error) {
        console.error(error);
      }
    }
    setValidated(true);
  };

  const getReservas = async () => {
    try {
      const response = await fetch(urlGet);
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const captura = await response.json();
      setReservas(captura);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    getReservas();
  }, []);

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md='10'>
          <h1 className='text-center mb-4'>Reservaciones</h1>
          <Form onSubmit={handleSubmit} validated={validated} className="needs-validation" noValidate>
            <Form.Group controlId='formLab'>
              <Form.Label>Laboratorio</Form.Label>
              <Form.Select onChange={handleInputLab} required defaultValue="">
                <option disabled value="">Selecciona una opción</option>
                {datos.map((item) => (<option key={item.id_lab} value={item.nombre}>{item.nombre}</option>))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='formHorario'>
              <Form.Label>Horario</Form.Label>
              <Form.Select onChange={handleInputHora} required defaultValue="">
                <option disabled value="">Selecciona una opción</option>
                {data.map((item) => (<option key={item.id_horario} value={item.horainicio}>{item.horainicio}</option>))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='formUsuario'>
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              value={correoLocalStorage} // Establece el valor del campo de entrada como el estado del correo
              disabled // Bloquea el campo de entrada
            />
          </Form.Group>
            <Form.Group controlId='formFechaIngreso'>
              <Form.Label>Fecha Ingreso</Form.Label>
              <Form.Control onChange={handleInputFec} required type='date' />
            </Form.Group>
            <br />
            <Button type="submit">Reservar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};