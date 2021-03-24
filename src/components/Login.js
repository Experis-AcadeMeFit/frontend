import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import RoleCheck from './Rolechecker'
import { Redirect } from 'react-router-dom';
import '../CSS/Login.css'

const Login=(props) => {


  const API_URL='http://localhost:8080/';

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [message, setMessage] = useState('')
  
  
    const onChangeUserEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };

  const handleSumbit = async e => {
    try { 
      e.preventDefault()
      // post to backend with form submission
      const requestBody = {
        email: email,
        password: password
      }

      //login with API and get jwt
      const response = await axios.post(API_URL+'api/auth/login', requestBody)
      
      // destructure response
      const  token  = response.data.accessToken

      // Save token to localStorage
      localStorage.setItem('jwtToken', token);

      // get user data from the token
      const decoded = jwt_decode(token)

      // set the current user in the top app state
      props.setCurrentUser(decoded)
      
    } catch(error) {
      console.log(error)
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
    } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
    }
    console.log(error);
    }
  }

  //Someone loged in so lets redirect to the daashboard
  if(props.currentUser) return <Redirect to='/dashboard' component={ RoleCheck } currentUser={ props.currentUser } />

  return (
    < div className="LoginSingupWrap">
    <div className="form fade-in">

     {/* <p>{message}</p> */}

      <form onSubmit={handleSumbit}>
        <input
          id='email-input'
          type='email'
          placeholder='Your Eamil'
          onChange={onChangeUserEmail}
          value={email}
          required
        />
        <input 
          id='password-input'
          type='password'
          placeholder='password'
          onChange={onChangePassword}
          required
        />

        <input className="CTA"
          type='submit'
          value='login'
        />
      </form>
    </div>
    </div>
  )
}


export default Login