import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Label from 'react-bootstrap/Label';
import React from 'react';
let url = "http://localhost:3000/api/reservas";

export const Reserva = () => {
  const [datos, setDatos] = useState([]);
  const [id_laboratorio, setLaborario] = useState([]);
  const [id_horario, setHorario] = useState([]);
  const [id_usuario, setUsuario] = useState([]);
  const [SelectedHorario, setSelectedHorario] = useState("");
  const [fecha, setFecha] = useState();

  const getFecha = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };

  
  useEffect(() => {
    getFecha();
  }, []);


  const getLaboratorio = async () => {
    try {
     
      const response = await fetch("http://localhost:3000/api/laboratorio"); 
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await response.json();
      const IdLaboratorio = data.map(() => `${id_laboratorio}`);
      setLaborario(IdLaboratorio);
    } catch (error) {
      console.error(error);
    }
  };


  const getHorario = async () => {
    try {
     
      const response = await fetch("http://localhost:3000/api/horarios"); 
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await response.json();
      const IdHorario = data.map(() => `${id_horario}`);
      setHorario(IdHorario);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsuario = async () => {
    try {
     
      const response = await fetch("http://localhost:3000/api/usuario"); 
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await response.json();
      const IdUsuario = data.map(() => `${id_usuario}`);
      setUsuario(IdUsuario);
    } catch (error) {
      console.error(error);
    }
  };

  const handleHorarioChange = (event) => {
    setSelectedHorario(event.target.value);
  };
  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };
  const postHorario = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/horarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({horarioinicio: SelectedHorario, horariofinal: SelectedHorario }), 
      });

      if (!response.ok) {
        throw new Error("Error al enviar datos al servidor");
      }

      // Actualizar la lista de datos después de enviar la nueva reserva
      getFecha();
      getLaboratorio();
      getHorario();
      getUsuario
      // Limpiar los campos después de enviar
      setFecha();
      setSelectedHorario("");
     setLaborario();
     setHorario();
     setUsuario();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Container>
  <Row className="justify-content-md-center">
    <Col xs md='10'>
      <div className="container" style={{ maxWidth: "600px", margin: "0 auto", padding: "40px" }}>     
         <h1 className="text-center">Crear Reserva</h1>
        <Form onSubmit={postHorario}>
          <div className="mb-3">
          <Label className="form-label">Horario
          </Label>
          <select
            className="form-control"
            value={SelectedHorario}
            onChange={handleHorarioChange}
          >
            <option value="">Seleccionar Horario</option>
            {horarios.map((horarios) => (
              <option key={horarios.id} value={horarios.horarioinicio + horarios.horariofinal} >
                {horarios.horarioinicio}
                {horarios.horariofinal}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
            <Label className="form-label">Fecha</Label>
            <input
              type="date"
              className="form-control"
              value={fecha}
              onChange={handleFechaChange}
            />
          </div>
          <Button type="submit" className="btn btn-primary">
            Crear Reserva
          </Button>
          <br /><br />
        </Form>

        <Table className="table">
          <thead className="table-dark">
            <tr>
            <th>id_reserva</th>
              <th>Id_ lab</th>
              <th>id_horario</th>
              <th>id_usuario</th>
              <th>fecha</th>
              <th>activo</th>
              <th>fecha borra</th>
              <th className="text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((x) => (
              <tr key={x.id_reserva}>
                <td>{x.id_lab}</td>
                <td>{x.id_horario}</td>
                <td>{x.id_usuario}</td>
                <td>{x.fecha}</td>
                <td>{x.activo}</td>
                <td>{x.fecha_borra}</td>
                <td className="text-center">
                  <Button type="button" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                  </Button>
                  &nbsp;&nbsp;
                  <Button type="button" className="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
        </Col>
 
 </Row>


</Container>
     
    </>
  );
};
