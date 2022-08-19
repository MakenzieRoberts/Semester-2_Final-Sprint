// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import "../stylesheets/loginpage.css";
import Logo from "./Logo";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	// 		For detailed comments on this validation method, refer to SignUpPage.jsx / ProfilePage.jsx
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
		} // eslint-disable-next-line
	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		console.log(errors);

		if (!values.email) {
			errors.email = "Email is required!";
		}

		if (!values.password) {
			errors.password = "Password is required";
		}

		return errors;
	};

	return (
		<div className="loginpage">
			<Logo />
			<form className="form" onSubmit={handleSubmit}>
				<div id="form-title">
					<h2>Login</h2>
				</div>
				<div className="inputs">
					<div className="gradient-border">
						<input
							name="email"
							type="text"
							placeholder="E-mail"
							value={formValues.email}
							onChange={handleChange}
						/>
					</div>
					<p>{formErrors.email}</p>
					<div className="gradient-border">
						<input
							name="password"
							type="password"
							placeholder="Password"
							value={formValues.password}
							onChange={handleChange}
						/>
					</div>
					<p>{formErrors.password}</p>

					<button className="button-text">Login</button>
				</div>
				<div id="signup-message">
					<p>
						Don't Have an Account?{" "}
						<Link className="signup" to="/">
							Sign Up!
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
