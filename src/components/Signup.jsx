import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {API_URL, API_AUTHREGISTRE} from '../utills/APICalls'
import '../CSS/Login.css'

const  Signup = (props) => {
  const history = useHistory();

 
  // for controlled form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // todo set message if you typed wrong
 // const [message, setMessage] = useState('')


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
        username: name,
        email: email,
        password: password,
      }

      const response = await axios.post(API_URL+ API_AUTHREGISTRE, requestBody)
 
      // destructure response
      const  token  = response.data.accessToken
   
      // Save token to localStorage
      localStorage.setItem('jwtToken', token);

      // get user data from the token
      const decoded = jwt_decode(token)
      decodetredirect(decoded)
      // set the current user in the top app state
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

  function decodetredirect(decoded){
   //someone signed up and is now taken to the dashboard
    if(decoded!==null){
      history.replace("/dashboard");
    }  

  }


  return (
    <div>
       < div className="LoginSingupWrap ">
    <div className="form fade-in">

     {/* <p>{message}</p>*/}
      <form onSubmit={handleSumbit}>

        <input
          id='name-input'
          type='text'
          placeholder='your name...'
          onChange={onNameChange}
          value={name}
        />

        <input
          id='email-input'
          type='email'
          placeholder='Your Email'
          onChange={onEmailChange}
          value={email}
        />

        <input 
          id='password-input'
          type='password'
          placeholder='password'
          onChange={onPasswordChange}
        />

        <input className="LCTA"
          type='submit'
          value='SIGN UP'
        />
      </form>
    </div>

    </div>
    </div>
  )
}

export default Signup