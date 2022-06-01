import { Navbar,Nav,Container } from "react-bootstrap";
import React from 'react';
import ReactDOM from 'react-dom';

export default function NavbarComponent() {
    return (
<>
  <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    
  </Navbar>
  <br />


</>
    );
}

if (document.getElementById('navbar-component')) {
    ReactDOM.render(<NavbarComponent />, document.getElementById('navbar-component'));
}