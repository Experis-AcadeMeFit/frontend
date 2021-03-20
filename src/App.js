import { Fragment,useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import GlobalStyle from "./theme/globalStyles";

import AppHeader from './containers/AppHeader/AppHeader'
import Navbar from './components/Navbar'
import Login from './components/Login'

import Profile from './components/Profile'
import Signup from './components/Signup'
import Welcome from './components/Welcome'
import './App.css';

function App() {
  // user data if the a user is logged in 
  const [currentUser, setCurrentUser] = useState(null)

  // if the user navigates away and comes back, look for a jwt
  useEffect(() => {
    const token = localStorage.getItem('jwtToken')
    if (token) {
      // set the current usr if jwt is found
      setCurrentUser(jwt_decode(token))
    } else {
      // double check that current user is null if the jwt is not found 
      setCurrentUser(null)
    }
  }, [])

  // deletes jwt from local storage to log user out
  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
    }
  }

  return (
    <Fragment>
    <GlobalStyle />
    <AppHeader/>

    <Router>
    
        <Navbar currentUser={ currentUser } handleLogout={ handleLogout } />


      <div className="jib">
          <Switch>
            <Route 
              path='/signup'
              render={ (props) => <Signup {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
            />

            <Route 
              path='/login'
              render={ (props) => <Login {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
            />

            <Route 
              path="/profile" 
              render={(props) => currentUser ? <Profile {...props} handleLogout={handleLogout} currentUser={ currentUser } /> : <Redirect to="/login" /> }
            />

            <Route exact path="/" component={ Welcome } />
          </Switch>
      </div>

    </Router>
    </Fragment>
  );
}

export default App;
