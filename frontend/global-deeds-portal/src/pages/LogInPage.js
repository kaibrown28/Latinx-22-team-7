import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBar } from '../components/Navbar';


export const LogInPage = () => {
//state for error messages for wrong credentials    
    const [errorMessage, setErrorMessage] = useState('');
    const [, setToken] = useToken();
    
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const navigate = useNavigate();
    
    const onLogInClicked = async () => {
        const response = await axios.post('/api/login', {
            email: emailValue,
            password: passwordValue,
        });
        const { token } = response.data;
        setToken(token);
        navigate('/studentprofile');
    }

   const navigateToSignUp = () => {
    navigate('/signup')
   }

    return (
        <>
        <NavBar />
        <h1 class="lead display-4">Let's Get Started!</h1>
        <Form >
            
            {/* displays a div when wrong credentials entered */}
            {errorMessage && <div className="fail">{errorMessage}</div>}
        
        <Row className="mb-3 my-3 mx-auto">
            <Col xs="6">
            <Form.Group className="mb-2" controlID="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <input value={emailValue} onChange={event => setEmailValue(event.target.value)}placeholder="name@email.com" />
            </Form.Group>
            </Col>
        </Row>    
        <Row className="mb-3 my-3 mx-auto">
        <Col xs="6">
            <Form.Group className="mb-2 my-1" sm={3} controlID="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <input value={passwordValue} onChange={event => setPasswordValue(event.target.value)} type="password" placeholder="password" />
            </Form.Group>
        </Col> 
        </Row>
        <Row className="mb-3 my-3 mx-auto">
            <Col xs="6">
            <button variant="primary"  className="mb-2 my-1" disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>Log In</button>
            </Col>    
        </Row>   
            
            <Row className="mx-auto">
                <Col xs="3">
                    <button variant="info" onClick={() => navigate.push('/forgot-password')} >Forgot your password?</button>
                </Col>
                <Col xs="3">
                    <button variant="primary" onClick={navigateToSignUp}>No account? Sign Up</button>
                </Col>
            </Row>
        </Form>
        </>
    );
}
