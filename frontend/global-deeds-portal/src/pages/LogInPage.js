import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const LogInPage = () => {
//state for error messages for wrong credentials    
    const [errorMessage, setErrorMessage] = useState('');
    
    
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const navigate = useNavigate();
    
    const onLogInClicked = async () => {
        alert('Not coded yet');
    }

    return (
        <div className="content-container">
            <h1>Welcome to the portal</h1>
            {/* displays a div when wrong credentials entered */}
            {errorMessage && <div className="fail">{errorMessage}</div>}

            <input value={emailValue} onChange={event => setEmailValue(event.target.value)}placeholder="name@email.com" />
            <input value={passwordValue} onChange={event => setPasswordValue(event.target.value)} type="password" placeholder="password" />
            <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>Log In</button>
            <button onClick={() => navigate.push('/forgot-password')} >Forgot your password?</button>
            <button onClick={()=> navigate.push('/signup')}>No account? Sign Up</button>
        </div>
    );
}
