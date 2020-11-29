import React, { Component } from 'react';
import {Navbar,Nav,Form, FormControl} from 'react-bootstrap';
import styled from 'styled-components';


  const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
function Navigation(){
    return(
      //   <Navbar bg="dark" expand="lg">
        
      //   <Navbar.Collapse id="basic-navbar-nav">
      //   <Nav>

      //   <NavLink className="d-inline p-4 bg-dark text-white" to="/">Home</NavLink> ||

      //   <NavLink className="d-inline p-2 bg-dark text-white" to="/seles">Seles</NavLink>||

      //   <NavLink className="d-inline p-2 bg-dark text-white" to="/service">Service</NavLink>
        
      //  </Nav>
      //  </Navbar.Collapse>
      //   </Navbar>
    <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Tutorial</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/seles">Seles</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/service">Service</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>

    );
    }

    export default Navigation;