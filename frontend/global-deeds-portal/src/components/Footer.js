import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from 'react-bootstrap/NavBar';
import ListGroup from 'react-bootstrap/ListGroup'

export const Footer = () => {
  return (
    
    <Card class="text-center bg-primary border border-primary" >
      <Card.Body>
        <Row>
            <Col>    
                <Card.Title>Global Deeds</Card.Title>
                <Card.Img variant="bottom" src="" />                    
            </Col>
            <Col>
                <Card.Title>Quick links</Card.Title>
                <ListGroup variant="flush" class="text-white">
                    <ListGroup.Item>About</ListGroup.Item>
                    <ListGroup.Item>Services</ListGroup.Item>
                    <ListGroup.Item>Our Team</ListGroup.Item>
                    <ListGroup.Item>What We Do</ListGroup.Item>
                    <ListGroup.Item>Core Values</ListGroup.Item>              
                </ListGroup>
            </Col>
            <Col>
                <Card.Title>Contact Us</Card.Title>
                <ListGroup variant="flush"  class="text-white">
                <ListGroup.Item>Phone: +1 xxx-xxx-xxxx  ext. 3</ListGroup.Item>
                <ListGroup.Item>Email: info@gdorg.com</ListGroup.Item>
                <ListGroup.Item>Meetings by Appointment Only</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
      </Card.Body>
    </Card>
    
  );
}

