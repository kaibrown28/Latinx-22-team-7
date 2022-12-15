import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios'

export const StudentSignUp = () => {
//state for error messages for wrong credentials    
    const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');
    
    
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const navigate = useNavigate();
    
    const onSignUpClicked = async () => {
       const response = await axios.post('/signup', {
        email:emailValue,
        password:passwordValue,
       });
       const { token } = response.data;
       setToken(token);
       navigate('/')
    }

    const navigateToLogIn = () => {
        navigate('/login')
       }
    const navigateToCompanySignUp = () => {
        navigate('/companysignup')
       }

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {/* displays a div when wrong credentials entered */}
            {errorMessage && <div className="fail">{errorMessage}</div>}

            <input value={emailValue} onChange={event => setEmailValue(event.target.value)}placeholder="name@email.com" />
            <input value={passwordValue} onChange={event => setPasswordValue(event.target.value)} type="password" placeholder="password" />
            <input value={confirmPasswordValue} onChange={event => setConfirmPasswordValue(event.target.value)} type="password" placeholder="confirm password" />
            <button 
            disabled={
                !emailValue || !passwordValue ||
                passwordValue !== confirmPasswordValue
            } 
            onClick={onSignUpClicked}>Sign Up</button>
            <button onClick={navigateToLogIn} >Already have an account? Log in.</button>
            <button onClick={navigateToCompanySignUp}>Are you a company? Click here.</button>
        </div>
    );
}
