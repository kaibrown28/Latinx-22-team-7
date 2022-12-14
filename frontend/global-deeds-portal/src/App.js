import { BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

//page routes
import { Home } from './pages/Home'
import { LogInPage } from './pages/LogInPage'

import { StudentProfilePage } from './pages/StudentProfilePage'
import { StudentSignUp } from './pages/StudentSignUp';
import { CompanySignUp } from './pages/CompanySignUp';
import { CompanyJobs } from './pages/CompanyJobs';
import { CompanyProfile } from './pages/CompanyProfile';
import { Error } from './pages/Error';
import { StudentProject } from './pages/StudentProject';
import { StudentProjects } from './pages/StudentProjects';
import { StudentResources } from './pages/StudentResources';

import { PrivateRoutes } from './auth/PrivateRoutes';

export const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/signup" element={<StudentSignUp />} />
                <Route path="/companysignup" element={<CompanySignUp />} />
                <Route path="/error" element={<Error />} />
                
                <Route element={<PrivateRoutes/>} >
                    <Route path="/testing" element={<div><h2>testing</h2></div>} />
                    <Route path="/studentprofile" element={<StudentProfilePage />} />
                    <Route path="/studentproject" element={<StudentProject />} />
                    <Route path="/studentprojects" element={<StudentProjects />} />
                    <Route path="/resources" element={<StudentResources/>} />
                    <Route path="/jobs" element={<CompanyJobs />} />
                    <Route path="/companyprofile" element={<CompanyProfile />} />
                </Route>
                
                
            </Routes>
        </BrowserRouter>
    );
}