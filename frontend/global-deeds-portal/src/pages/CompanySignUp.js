import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CompanySignUp = () => {
//state for error messages for wrong credentials    
const [token, setToken] = useToken();

const [errorMessage, setErrorMessage] = useState('');


const [emailValue, setEmailValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
const navigate = useNavigate();

const onSignUpClicked = async () => {
   const response = await axios.post('/api/signup', {
    email:emailValue,
    password:passwordValue,
   });
   const { token } = response.data;
   setToken(token);
   navigate(`/please-verify?email=${encodeURIComponent(emailValue)}`)
}

const navigateToLogIn = () => {
    navigate('/login')
   }
const navigateToStudentSignUp = () => {
    navigate('/studentsignup')
   }



    return (
        <>
        <Header />
            <div>
                <h1 class="lead display-4">Sign Up</h1>
                {/* displays a div when wrong credentials entered */}
                {errorMessage && <div className="fail">{errorMessage}</div>}
            </div>
        <Form class="mx-3 my-3">
            <Row>
                <Form.Group>
                    <input value={emailValue} onChange={event => setEmailValue(event.target.value)}placeholder="name@email.com" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <input value={passwordValue} onChange={event => setPasswordValue(event.target.value)} type="password" placeholder="password" />  
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <input value={confirmPasswordValue} onChange={event => setConfirmPasswordValue(event.target.value)} type="password" placeholder="confirm password" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    
                </Form.Group>
            </Row>
            <Row>
                <Button 
                disabled={
                    !emailValue || !passwordValue ||
                    passwordValue !== confirmPasswordValue
                } 
                onClick={onSignUpClicked}>Sign Up</Button>
            </Row>
            <Row>
                <Col>
                    <Button onClick={navigateToLogIn} >Already have an account? Log in.</Button>
                </Col>
                <Col>
                    <Button onClick={navigateToStudentSignUp}>Are you a student? Sign Up Here.</Button>
                </Col>
            </Row>
            
            
            
           
            
            

        </Form>
            
        <Footer />
        </>
    );
}
