import axios from 'axios';
import AuthHeader from './AuthHeader';

const API_URL = 'http://localhost:8080/api';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getStudentHome() {
    return axios.get(API_URL + 'user', { headers: AuthHeader() });
  }

  getAdminHome() {
    return axios.get(API_URL + 'mod', { headers: AuthHeader() });
  }

  getCompanyHome() {
    return axios.get(API_URL + 'admin', { headers: AuthHeader() });
  }
}

export default new UserService();