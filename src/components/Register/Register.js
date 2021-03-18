import React, { Fragment,useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../actions/auth";
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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();


      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    
  };

  return (
   <Fragment>
    

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <Fragment>
            <div className="form fade-in">
              <Input
                type="text"
                placeholder="Username"
                className="form-control"
                name="username"
                aria-label="Type in your new username here"
                value={username}
                onChange={onChangeUsername}
                validations={[required, vusername]} />

              <Input
                type="text"
                placeholder="Email"
                className="form-control"
                name="email"
                value={email}
                aria-label="Type in your email address here"
                onChange={onChangeEmail}
                validations={[required, validEmail]} />

              <Input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                value={password}
                aria-label="Type in your password here"
                onChange={onChangePassword}
                validations={[required, vpassword]} />

              <button className="btn btn-primary btn-block" aria-label="Press this button to login">Sign Up</button>

            </div>
            </Fragment>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        </Fragment>
  );
};

export default Register;