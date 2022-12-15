import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';





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
        navigate('/portal');
    }

   const navigateToStudentSignUp = () => {
    navigate('/studentsignup')
   }

    return (
        <>
        <Header />
        <h1 class="lead display-4">Let's Get Started!</h1>
        <Row>
            <Col className='mx-6 my-3' >
        <Form class="border border-warning" >
            
            {/* displays a div when wrong credentials entered */}
            {errorMessage && <div className="fail">{errorMessage}</div>}
        
        <Row className="mx-3 my-3">
            <Col >
            <Form.Group className="" controlID="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <input value={emailValue} onChange={event => setEmailValue(event.target.value)}placeholder="name@email.com" />
            </Form.Group>
            </Col>
        </Row>    
        <Row className="mx-3 my-3">
        <Col >
            <Form.Group className=""  controlID="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <input value={passwordValue} onChange={event => setPasswordValue(event.target.value)} type="password" placeholder="password" />
            </Form.Group>
        </Col> 
        </Row>
        <Row className="mx-3 my-3">
            <Col >
            <Button variant="primary"  className="" disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>Log In</Button>
            </Col>    
        </Row>   
            
            <Row className="mx-3 my-3">
                <Col >
                    <Button variant="info" onClick={() => navigate.push('/forgot-password')} >Forgot your password?</Button>
                </Col>
                <Col >
                    <Button variant="primary" onClick={navigateToStudentSignUp}>No account? Sign Up</Button>
                </Col>
            </Row>
        </Form>
        </Col>
        <Col>
            <Image class="mx-6 my-3 border border-primary fluid" src="../images/womenintech_originalsize.jpg" rounded alt="diverse women in tech" />
        </Col>
        </Row>
        <Footer />
        </>
    );
}
