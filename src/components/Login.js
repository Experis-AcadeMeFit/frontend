import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'
import '../CSS/Login.css'

const Login=(props) => {
  const API_URL='http://localhost:8080/';

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  
  
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
      // if the email/pass didn't match
      if(error.response.data.status === 400) {
        setMessage('bad username or password')
      } else {
        // otherwise log the error for debug
        console.log(error)
      }
    }
  }

  if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser } />

  return (
    < div className="LoginSingupWrap">
    <div className="form">

      <p>{message}</p>

      <form onSubmit={handleSumbit}>
        <input
          id='email-input'
          type='email'
          placeholder='user@domain.com'
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