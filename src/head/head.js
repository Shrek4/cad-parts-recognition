
import React, { Component } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import logo from './../logo.svg';


class Header extends Component {
  render(){
    return(

      <Navbar collapseOnSelect expand="md" bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} height="30" className='d-inline-block align-top' alt="kek"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/recognize">Распознавание деталей</Nav.Link>
              <Nav.Link href="/info">О проекте</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            
    )
  }
}

export default Header