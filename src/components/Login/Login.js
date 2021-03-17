import React, { Fragment,useState } from "react";
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
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create an account</button>
            <p className="message" onClick={handleToggle}>Already registered? Sign In</p>
          </form>
          <form className={isActive ? "login-form-show" : "login-form-hide"}>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p class="message" onClick={handleToggle}>
              Not registered? Create an account
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
