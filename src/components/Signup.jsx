import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'

export default function Signup(props) {
  const API_URL='http://localhost:8080/';
  // for controlled form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // for flash message
  const [message, setMessage] = useState('')


  const onNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };


  const handleSumbit = async e => {
    try { 
      e.preventDefault()
      // post to backend with form submission
      const requestBody = {
        name: name,
        email: email,
        password: password,
      }

      const response = await axios.post(API_URL+'api/auth/register', requestBody)
      
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
      // if the email was found in the db
      if(error.response.status === 400) {
        setMessage('email exists')
      } else {
        // otherwise log the error for debug
        console.log(error)
      }
    }
  }

 if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser } />

  return (
    <div>
      <h3>Registration Form:</h3>

      <p>{message}</p>

      <form onSubmit={handleSumbit}>
        <label htmlFor='name-input'>name:</label>

        <input
          id='name-input'
          type='text'
          placeholder='your name...'
          onChange={onNameChange}
          value={name}
        />

        <label htmlFor='email-input'>email:</label>

        <input
          id='email-input'
          type='email'
          placeholder='user@domain.com'
          onChange={onEmailChange}
          value={email}
        />

        <label htmlFor='password-input'>password:</label>

        <input 
          id='password-input'
          type='password'
          placeholder='password'
          onChange={onPasswordChange}
        />

        <input 
          type='submit'
          value='login'
        />
      </form>
    </div>
  )
}