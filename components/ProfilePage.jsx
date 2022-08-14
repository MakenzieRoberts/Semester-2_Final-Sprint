import "../stylesheets/profilepage.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage({ handleUserInfo, username, pronouns, bio }) {
	const initialValues = { username: "" };

	const [formValues, setFormValues] = useState(initialValues);

	const [formErrors, setFormErrors] = useState({});

	const [isSubmit, setIsSubmit] = useState(false);

	const navigate = useNavigate();
	const navigateToFeed = () => {
		navigate("/feed");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormValues({ ...formValues, [name]: value });

		console.log(formValues);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setFormErrors(validate(formValues));
		setIsSubmit(true);
		sendData(e);
	};

	useEffect(() => {
		console.log(Object.keys(formErrors).length);

		if (Object.keys(formErrors).length === 0 && isSubmit) {
			navigateToFeed();
			console.log(formValues);
		} // eslint-disable-next-line
	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		console.log(errors);

		if (!values.username) {
			errors.username = "Username is required!";
		}

		return errors;
	};

	/* ************************************ * *********************************** */

	function sendData(e) {
		var un = document.querySelector("#username").value;
		var pp = document.querySelector("#pronouns").value;
		var bb = document.querySelector("#bio").value;

		handleUserInfo(un, pp, bb);
		// navigateToFeed();
		e.preventDefault();
	}

	return (
		<div className="profilepage">
			<Logo />
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
							onChange={handleChange}
						/>
					</div>
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

					<button className="button-text">
						{" "}
						{/* <Link className="button-text" to="/feed"> */}
						Proceed
						{/* </Link> */}
					</button>
				</div>
			</form>
		</div>
	);
}

export default ProfilePage;
