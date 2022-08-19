// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import "../stylesheets/profilepage.css";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage({ handleUserInfo }) {
	const initialValues = { username: "" };

	//		Pass initialvalues to this state, then onChange update the formValues with user input.
	const [formValues, setFormValues] = useState(initialValues);

	//   	In formErrors, setFormErrors we would be receiving props/values back from the handleSubmit
	//		function that calls the validate function.
	//		const errors = {} in the validate function returns a value; , useState is set to an empty
	//		object {} originally.
	const [formErrors, setFormErrors] = useState({});

	// 		Setting a flag to be used as boolean.
	const [isSubmit, setIsSubmit] = useState(false);

	const navigate = useNavigate();
	const navigateToFeed = () => {
		navigate("/feed");
	};

	//   	This function is triggered by onChange in the input element, to set the new values input by
	//		user, using an "e" for add event.
	const handleChange = (e) => {
		const { name, value } = e.target;

		//		Set the form values(setFormValues) is an object ({}) so first take all the 'initialState'
		//		using (...), so it will = the formValues.
		//		- [name] this in square brackets makes it a "key" and assign the entered value to this key.
		//		- Value is a key word to get the value of name.
		setFormValues({ ...formValues, [name]: value });

		console.log(formValues);
	};

	const handleSubmit = (e) => {
		// 		e.prevent.Default; prevents the page from page from being refreshed.
		e.preventDefault();

		// 		Whenever a user submits a form the program is going to call the "validate" function that will
		//		pass all the formValues. Whichever occurs will be "set" in the formErrors which is an
		//		object that was returned from the validate function ('return errors' to 'const errors={}')
		setFormErrors(validate(formValues));
		setIsSubmit(true);
		sendData(e);
	};

	useEffect(() => {
		// 		(If there are no form errors, and isSubmit is true)...
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			//		Then navigate to the next page.
			navigateToFeed();
		} // eslint-disable-next-line
	}, [formErrors]);

	//		The validate function.
	//		validate = (values), values is take all the form values which have be submitted.
	const validate = (values) => {
		// 'const errors' is an errors object which is the initial object.
		const errors = {};
		console.log(errors);

		// Email and password validation
		if (!values.username) {
			errors.username = "Username is required!";
		}

		return errors;
	};

	function sendData(e) {
		var un = document.querySelector("#username").value;
		var pp = document.querySelector("#pronouns").value;
		var bb = document.querySelector("#bio").value;

		handleUserInfo(un, pp, bb);
		e.preventDefault();
	}

	return (
		<div className="profilepage">
			<Logo />
			{/*		Here I wanted to see all the values so I used an onSubmit listener and called it 
					'handleSubmit'
			*/}
			<form className="form" onSubmit={handleSubmit}>
				<div id="form-title">
					<h1>Create Profile</h1>
				</div>
				<div className="inputs">
					<div className="gradient-border">
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={formValues.username}
							// 		Below, to update and handle the value passed in by a user, using
							//		onChange and making a function called 'handleChange'.
							onChange={handleChange}
						/>
					</div>
					{/* 
							If an error occurs, the message shows up here inside <p>.
					*/}
					<p>{formErrors.username}</p>
					<div className="gradient-border">
						<input
							type="text"
							id="pronouns"
							placeholder="Preferred Pronoun(s)"
						/>
					</div>
					<div className="gradient-border">
						<textarea type="text" id="bio" placeholder="Bio" />
					</div>

					<button className="button-text">Proceed</button>
				</div>
			</form>
		</div>
	);
}

export default ProfilePage;
