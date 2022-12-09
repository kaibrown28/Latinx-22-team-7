import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home'
import { LogInPage } from './pages/LogInPage'
import { TestPage } from './pages/test'
import { StudentProfilePage } from './pages/StudentProfilePage'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/studentprofile" element={<StudentProfilePage />} />
                <Route path="testing" element={<div><h2>testing</h2></div>} />
            </Routes>
        </BrowserRouter>
    );
}