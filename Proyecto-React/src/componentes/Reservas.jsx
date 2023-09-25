//Steven
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const url = 'http://localhost:3000/api/horarios';
const urlLab = 'http://localhost:3000/api/laboratorio';
const urlUs = 'http://localhost:3000/api/usuario';
const urlPost = 'http://localhost:3000/api/reservas';
const urlGet = 'http://localhost:3000/api/reservas';

export const Reservas = () => {
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
    console.log("🚀 ~ file: Reservas.jsx:34 ~ useEffect ~ correo:", correo)
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
          <h1 className='text-center mb-4'>Reservas</h1>
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
            <Button type="submit">Reservar</Button>
          </Form>
        </Col>
        <Row className="col-lg-8 col-sm-12 mt-5">
          <Table className="table" striped>
            <thead className="table-dark">
              <tr>
                <th>Laboratorio</th>
                <th>Hora</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th className="text-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((x) => (
                <tr key={x.id_reserva}>
                  <td>{x.laboratorio}</td>
                  <td>{x.horainicio}</td>
                  <td>{x.usuario}</td>
                  <td>{x.fecha}</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Row>
    </Container>
  );
};