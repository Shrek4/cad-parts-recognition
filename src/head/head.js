
import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from './../logo.png';
import gitlink from './../github.png';


class Header extends Component {
  render() {
    return (

      <Navbar collapseOnSelect expand="md" bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} height="30" className='d-inline-block align-top' alt="kek" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/recognize">Распознавание деталей</Nav.Link>
              <Nav.Link href="/info">О проекте</Nav.Link>
              <Nav.Link href="/chat_assist">Чат-бот</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="https://github.com/Shrek4/cad-parts-recognition">
              <img
                src={gitlink}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
  }
}

export default Header