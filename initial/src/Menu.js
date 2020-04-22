import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Menu = _ =>
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="/">Finisher.Tech</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Eventos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#evento-20192611">Corridas de rua premiadas com criptomoedas? Uau! 😃</NavDropdown.Item>
          <NavDropdown.Item href="#evento-20191010">Inteligência Artificial e Blockchain aplicadas a Bem Estar, Saúde e Esportes</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#sobre">Sobre</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

export default Menu
