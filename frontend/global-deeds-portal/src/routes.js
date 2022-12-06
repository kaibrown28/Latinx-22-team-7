import { BrowserRouter as Router, Route } from  'react-router-dom';
import { StudentProfilePage } from './pages/StudentProfilePage';
import { LogInPage } from './pages/LogInPage';

export const Routes = () => {
    return (
        <Router>
            
                <Route path="/" exact>
                    <StudentProfilePage />
                </Route>
                <Route path="/login">
                    <LogInPage />
                </Route>
            
        </Router>
    )
}