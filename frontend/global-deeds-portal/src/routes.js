import { Routes, Route, Link } from  'react-router-dom';
import { StudentProfilePage } from './pages/StudentProfilePage';
import { LogInPage } from './pages/LogInPage';
import { TestPage } from './pages/test';



export const PageRoutes = () => {
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/test">Test Page</Link></li>
                <li><Link to="/login">Log In</Link></li>
                
            </ul>
        </nav>
      
      
            <Routes>
                {/* <Route path="/" /> */}
                <Route path="/studentprofile" element={<StudentProfilePage />}>Profile</Route>
                <Route path="/login" element={<LogInPage />} />  
                <Route path="/test" element={<TestPage />} />  
            </Routes>
           
        
        </>
    )
}