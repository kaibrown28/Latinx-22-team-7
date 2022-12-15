import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { PortalHeader } from '../components/PortalHeader';


export const PortalHome= () => {
 
    return (
        <>
        <PortalHeader />
        <h1 class="display-3 text-center">Welcome to the Portal</h1>
        
        <Card.Title class="display-6 mx-3 my-3">Students</Card.Title>    
            <Card>
           
            <Row>
                <Col class="xs-3">
                    <Card.Body>
                        <Card.Title>Earn Money</Card.Title>
                            <Nav.Link href="#">Jobs</Nav.Link>
                            <Nav.Link href="#">Internships</Nav.Link>
                            <Nav.Link href="#">Summer Programs</Nav.Link>
                            <Nav.Link href="#">Financial Assistance</Nav.Link>
                    </Card.Body>
                </Col>
                
                <Col class="xs-3">
                    <Card.Body>
                        <Card.Title>Find Resources</Card.Title>
                            <Nav.Link href="#">Shelters</Nav.Link>
                            <Nav.Link href="#">Emergency Aid</Nav.Link>
                            <Nav.Link href="#">Housing Opportunities</Nav.Link>
                            <Nav.Link href="#">Hot Lines</Nav.Link>
                    </Card.Body>
                </Col>
                <Col class="xs-3">
                <Card.Body>
                    <Card.Title>Build Skills</Card.Title>
                        <Nav.Link href="#">Conferences</Nav.Link>
                        <Nav.Link href="#">Speaker Series</Nav.Link>
                        <Nav.Link href="#">Find a Mentor</Nav.Link>
                        <Nav.Link href="#">Volunteer and Community Work</Nav.Link>
                        <Nav.Link href="#">Local Event Calendar</Nav.Link>
                </Card.Body>
                </Col>
            </Row>
            </Card>

        
        <Card.Title class="display-6 mx-3 my-3 ">Companies</Card.Title>    
         <Row>
            <Card>
                <Row>
                    <Col class="xs-3 ">  
                        <Card.Body>
                            <Card.Img variant="left" src="" />
                            <Nav.Link class="display-6"href="#">
                            Post Job Opportunities 
                            </Nav.Link>
                        </Card.Body>
                    </Col>    
                    <Col class="xs-3 ">  
                        <Card.Body>
                            <Card.Img variant="left" src="" />
                            <Nav.Link class="display-6"href="#">
                            Support Your Community
                            </Nav.Link>
                        </Card.Body>
                    </Col>    
                    <Col class="xs-3 ">  
                        <Card.Body>
                            <Card.Img variant="left" src="" />
                            <Nav.Link class="display-6"href="#">
                            Find Talent
                            </Nav.Link>
                        </Card.Body>
                    </Col>    
                    
                </Row>
            </Card>

        </Row>
        </>
        )
};