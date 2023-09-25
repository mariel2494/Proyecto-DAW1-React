import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export const Menu = () => {

 return (
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
            <Nav.Link as={Link} to="/usuario">Usuario</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
{/*
    <Link to='/'>Inicio</Link>
    <Link to='/horarios'>Horario</Link>
    <Link to='/laboratorio'>Laboratorios</Link>
    <Link to='/reservas'>Reservas</Link>
    <Link to='/rol'>Rol</Link>
    <Link to='/usuario'>Usuario</Link> 
  */}


