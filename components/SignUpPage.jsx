import "../stylesheets/signuppage.css";
import Logo from "./Logo";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
	const initialValues = { email: "", password: "" };

	//   pass initialvalues to this state, then onChange update the formValues with user input
	const [formValues, setFormValues] = useState(initialValues);

	//   in formErrors, setFormErrors we would be receiving props/values back in from the handleSubmit function that calls the validate function, const errors = {} in the validate function returns a value; , useState is set to an empty object {} originally
	const [formErrors, setFormErrors] = useState({});

	// setting a flag to be used as booleen
	const [isSubmit, setIsSubmit] = useState(false);

	const navigateToProfile = () => {
		navigate("/signup/createprofile");
	};
	const navigate = useNavigate();

	//   FIRST FUNCTION CREATED: function from the onchange in the input element to set the new values input by user, using an "e" for add event
	const handleChange = (e) => {
		// console.log(e.target);
		const { name, value } = e.target;
		//set the form values(setFormValues) is an object ({}) so first take all the initialState using (...) so it will = the formValues, [name] this in square brackets makes it a "key" and assign the entered value to this key, value is a key word to get the value of name
		setFormValues({ ...formValues, [name]: value });

		console.log(formValues);
	};

	//   SECOND FUNCTION CREATED:
	const handleSubmit = (e) => {
		// e.prevent.Default; prevents the page from page from being refreshed
		e.preventDefault();
		// whenever a user submits a form the program is going to call the "validate" function that will pass all the formValues, which ever occours it will be "set" in the formErrors which is an object that was returned from the validate function ==> return errors to const errors={}
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	useEffect(() => {
		// console.log(formErrors);
		console.log(Object.keys(formErrors).length);

		if (Object.keys(formErrors).length === 0 && isSubmit) {
			navigateToProfile();
			console.log(formValues);
		} // eslint-disable-next-line
	}, [formErrors]);
	//   THIRD FUNCTION CREATED: the validate function, validate = (values), values is take all the form values which have be submitted
	const validate = (values) => {
		// const errors is an errors object which is the initial object
		const errors = {};
		console.log(errors);
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		const regexPass =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/i;

		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format";
		}

		if (!values.password) {
			errors.password = "Password is required";
		} else if (!regexPass.test(values.password)) {
			errors.password =
				"Password must contain 1 uppercase, lowercase, digit, special character and be between 8 to 12 characters ";
		}

		return errors;
	};

	return (
		<div className="signuppage">
			<Logo />
			{/* so here I wanted to see all the values so I used an onSubmit listener and called it handleSubmit */}
			<form className="form" onSubmit={handleSubmit}>
				<div id="form-title">
					<h2>Sign Up</h2>
				</div>
				<div className="inputs">
					<div className="gradient-border">
						<input
							name="email"
							type="email"
							placeholder="E-mail"
							value={formValues.email}
							// below, to update and handle the value passed in by a user, using onChange and making a function called handleChange
							onChange={handleChange}
						/>
					</div>
					<p>{formErrors.email}</p>
					<div className="gradient-border">
						<input
							name="password"
							//   changed this from "text" to "password"
							type="password"
							placeholder="Password"
							//   this binds the initialValues to this input
							value={formValues.password}
							// below, to update and handle the value passed in by a user, using onChange and making a function called handleChange
							onChange={handleChange}
						/>
					</div>
					<p>{formErrors.password}</p>

					{/* I stripped out the link to show the errors */}
					<button className="button-text">Sign Up</button>

					{/* original below */}
					{/* <Link className="button-text" to="/signup/createprofile">
            <button>Sign Up</button>
          </Link> */}
				</div>
				<div id="login-message">
					<p>
						Already have an account?{" "}
						<Link className="login" to="/login">
							Login
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default SignUpPage;

// {
//   /* <div className="signuppage">
// 	<h1>Sign Up</h1>
// 	<input type="text" placeholder="E-mail" />
// 	<input type="text" placeholder="Password" />

// 	<Link to="/signup/createprofile">Sign Up</Link>
// 	<h2> Already have an account?</h2>
// 	<h1>Login</h1>
// </div>; */
// }
