import "../stylesheets/LoginPage.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const initialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const navigateToProfile = () => {
    navigate("/login/userfeed");
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(Object.keys(formErrors).length);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigateToProfile();
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    console.log(errors);

    if (!values.email) {
      errors.email = "Username is required!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className="signuppage">
      <form class="form" onSubmit={handleSubmit}>
        <div id="form-title">
          <h2>Login</h2>
        </div>
        <div class="inputs">
          <div class="gradient-border">
            <input
              name="email"
              type="text"
              placeholder="E-mail"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div class="gradient-border">
            <input
              name="password"
              type="text"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <button class="button-text">Login</button>
        </div>
        <div id="login-message">
          <p>
            Don't Have an Account?{" "}
            <Link class="login" to="/">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
