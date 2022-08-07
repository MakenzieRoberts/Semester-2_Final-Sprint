import React from "react";
import "../stylesheets/signuppage.css";

import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="signuppage">
      <h1>Sign Up</h1>
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Password" />

      <Link to="/signup/createprofile">Sign Up</Link>
      <h2> Already have an account?</h2>
      <h1>Login</h1>
    </div>
  );
}

export default SignUpPage;
