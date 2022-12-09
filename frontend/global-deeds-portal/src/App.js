import { Route, Routes, Link } from "react-router-dom"
import { StudentProfilePage } from './pages/StudentProfilePage';
import { LogInPage } from './pages/LogInPage';
import { TestPage } from './pages/test';
import { Home } from './pages/home';


export const App = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/studentprofile">Student Profile</Link></li>
                    <li><Link to="/test">Test Page</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    
                </ul>
            </nav>
            <div>Am I dreaming?</div>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/studentprofile" element={<StudentProfilePage />} />
                <Route path="/login" element={<LogInPage />} />  
                <Route path="/test" element={<TestPage />} />  
            </Routes>
        </>
    );
}