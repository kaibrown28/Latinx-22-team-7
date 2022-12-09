import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CompanySignUp = () => {
//state for error messages for wrong credentials    
    const [errorMessage, setErrorMessage] = useState('');
    
    
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const navigate = useNavigate();
    
    const onSignUpClicked = async () => {
        alert('Not coded yet');
    }

    const navigateToLogIn = () => {
        navigate('/login')
       }


    return (
        <div className="content-container">
            <h1>Company Sign Up</h1>
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
            <button onClick={navigateToLogIn} >Are you a student? Log in here.</button>
        </div>
    );
}
