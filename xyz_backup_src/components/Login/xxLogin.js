import React, { Fragment,useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

import "../CSS/Login.css";
function Login() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };


  return (
    <Fragment>
      <div className="login-page">
    
  
        <div className="form">
          <form className={isActive ? "register-form-hide" : "register-form-show"}>
            <input type="text" placeholder="name" aria-label="Type in your new username here"/>
            <input type="password" placeholder="password" aria-label="Type in your new password here"/>
            <input type="text" placeholder="email address" aria-label="Type in your email address here"/>
            <button aria-label="Press this button to create your account">create an account</button>
            <p className="message" onClick={handleToggle}>Already registered? Sign In</p>
          </form>
          <form className={isActive ? "login-form-show" : "login-form-hide"}>
            <input type="text" placeholder="username" aria-label="Type in your username here"/>
            <input type="password" placeholder="password" aria-label="Type in your password here"/>
            <button aria-label="Press this button to login">login</button>
            <p className="message" onClick={handleToggle}>
              <strong>Not registered? Create an account</strong>
            </p>
          </form>
        </div>
        </div>
    
    </Fragment>
  );
}

export default Login;
