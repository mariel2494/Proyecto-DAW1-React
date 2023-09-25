
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';

export const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpia localStorage y redirigir al usuario a la página de inicio de sesión
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  return (
    <>
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
 
</nav>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/horarios">Horarios</Nav.Link>
            <Nav.Link as={Link} to="/laboratorio">Laboratorio</Nav.Link>
            <Nav.Link as={Link} to="/reservas">Reservas</Nav.Link>
            <Nav.Link as={Link} to="/rol">Rol</Nav.Link>
            <Nav.Link as={Link} to="/formularioUserAdmin">Usuario</Nav.Link>
            <nav className="d-flex">
              <Button className='btn btn-danger' onClick={handleLogout}>Cerrar Sesión</Button>
            </nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}