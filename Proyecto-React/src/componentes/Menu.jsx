import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Menu = () => {
  return (
    <>
<Navbar bg="info" data-bs-theme="dark" expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand href="inicio" as={Link} >Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="horarios">Horarios</Nav.Link>
            <Nav.Link as={Link} to="laboratorio">Laboratorio</Nav.Link>
            <Nav.Link as={Link} to="reservas">Reservas</Nav.Link>
            <Nav.Link as={Link} to="rol">Rol</Nav.Link>
            <Nav.Link as={Link} to="usuario">Usuario</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
{/*
    <Link to='/'>Inicio</Link>
    <Link to='/horarios'>Horario</Link>
    <Link to='/laboratorio'>Laboratorios</Link>
    <Link to='/reservas'>Reservas</Link>
    <Link to='/rol'>Rol</Link>
    <Link to='/usuario'>Usuario</Link> 
  */}
    </>
  )
}
