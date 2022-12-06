import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const StudentProfilePage = () => {
    const navigate = useNavigate();

    //setting state for profile page
    const [interests, setInterests] = useState('');
    const [skills, setSkills] = useState('');
    const [bio, setBio] = useState('');
  
    //state for showing an error message after network request
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    //sets timeout for error and success messages
    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);

    //buttons
    const saveChanges = async () =>{

        alert('Saving Not Implemented yet')
    }
    const logOut = () =>{

        alert('Not Implemented yet')
    }
    const resetValues = () =>{

        alert('Not Implemented yet')
    }

    return (
        <div className="content-container">
            <h1>User Profile</h1>
            {showSuccessMessage && <div classname ="success">Changes saved!</div>}
            {showErrorMessage && <div classname ="failure">Oops! We couldn't save your changes.</div>}

            <label>
                #profileinput:
                    <input onChange={event => setInterests(event.target.value)} value={interests}/>
            </label>
            <label>
                #profileinput:
                    <input onChange={event => setSkills(event.target.value)} value={skills}/>
            </label>
            <label>
                #profileinput:
                    <input onChange={event => setBio(event.target.value)} value={bio}/>
            </label>
            <hr />
            <button onClick={saveChanges}>Save changes</button>
            <button onClick={resetValues}> Clear Values</button>
            <button onClick={logOut}>Log Out</button>
        </div>
    );

}