import "../stylesheets/LoginPage.css";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <form class="form">
        <div id="form-title">
          <h2>Login</h2>
        </div>
        <div class="inputs">
          <div class="gradient-border">
            <input type="text" placeholder="E-mail" />
          </div>
          <div class="gradient-border">
            <input type="text" placeholder="Password" />
          </div>

          <Link class="button-text" to="/login/userfeed">
            <button>Login</button>
          </Link>
        </div>

        <div id="login-message">
          <p>
            Don't Have an Account?{" "}
            <Link class="login" to="/login">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
