import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export const Menu = () => {
 
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Realiza las acciones necesarias para cerrar la sesión, como limpiar el estado o eliminar el token de autenticación
  
      // Redirige al usuario a la página de inicio de sesión
      navigate('/');
    };
  
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
            <Button onClick={handleLogout} variant="danger" type="submit">
          Cerrar Sesion
        </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
