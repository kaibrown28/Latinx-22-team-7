import { App } from "../App";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const PortalHeader = () => {

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Global Deeds</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/testing">Resources</Nav.Link>
              <Nav.Link href="#link">Settings</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};