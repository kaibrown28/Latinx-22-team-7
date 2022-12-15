import { App } from "../App";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Global Deeds</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Our Impact</Nav.Link>
              <Nav.Link href="#link">Opportunities</Nav.Link>
              <Nav.Link href="/login">Portal</Nav.Link>
              
            </Nav>
        </Container>
      </Navbar>
    )
};