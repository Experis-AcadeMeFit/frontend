/**https://bezkoder.com/react-hooks-redux-login-registration-example/ */
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";


import GlobalStyle from "./theme/globalStyles";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
import LandingPage from "./components/Landingpage/landingPage";
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import User from './components/users/User';
import Admin from './components/users/Admin';
import Contributor from './components/users/Contributor'
import Profile from './components/users/Profile'
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./utills/history";

import "./App.css";

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      console.log("currentUser")
      console.log(currentUser)
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Fragment>
      <GlobalStyle />
      <AppHeader />
      <Router history={history}>
      
        <nav className="header-nav">

          <div className="navbar-nav mr-auto">
            <li className="menu-link ">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="menu-link">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="menu-link">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="menu-link">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="menu-link">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="menu-link">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="menu-link">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="menu-link">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
      <Switch>
            <Route exact path={["/", "/home"]} component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={User} />
            <Route path="/mod" component={Contributor} />
            <Route path="/admin" component={Admin} />
          </Switch>
      
      </Router>

      <AppFooter />
    </Fragment>
  );
}

export default App;
