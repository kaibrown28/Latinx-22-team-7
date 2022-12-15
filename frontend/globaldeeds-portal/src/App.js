import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/AuthService";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import studentHome from "./components/studentHome"
import adminHome from "./components/adminHome";
import companyHome from "./components/companyHome";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showStudentHome: false,
      showAdminHome: false,
      showCompanyHome: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminHome: user.roles.includes("ADMIN"),
        showCompanyHome: user.roles.includes("COMPANY"),
        showStudentHome: user.roles.includes("STUDENT"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showStudentHome: false,
      showAdminHome: false,
      showCompanyHome: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showCompanyHome, showStudentHome, showAdminHome } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
           Global Deeds
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showCompanyHome && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Company Home
                </Link>
              </li>
            )}

            {showAdminHome && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {showStudentHome && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/student" element={<studentHome/>} />
            <Route path="/company" element={<companyHome />} />
            <Route path="/admin" element={<adminHome />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;