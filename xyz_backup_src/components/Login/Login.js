
import React, { Fragment,useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from '../../actions/auth'
import "../CSS/Login.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUserEmail = (e) => {
    const email = e.target.value;
    setUserEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
 

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();
    console.log('From Login')
console.log(email+' '+password)
   // if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
   // } else {
     //
      setLoading(false);
    //}
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <Fragment>
        

        <Form onSubmit={handleLogin} ref={form}>
        <div className="form fade-in">

        
            <Input
              type="text"
              className="form-control"
              name="email"
              placeholder="email address"
              value={email}
              onChange={onChangeUserEmail}
              validations={[required]}
            />
 
            <Input
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
         

          
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            
              <p className="alert alert-danger" role="alert">
                {message}
              </p>
           
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        </Fragment>
  );
};

export default Login;
