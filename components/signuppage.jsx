import "../stylesheets/signuppage.css";
import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
	return (
		<div className="signuppage">
			<form class="form">
				<div id="form-title">
					<h2>Sign Up</h2>
				</div>
				<div class="inputs">
					<div class="gradient-border">
						<input type="text" placeholder="E-mail" />
					</div>
					<div class="gradient-border">
						<input type="text" placeholder="Password" />
					</div>

					<Link class="button-text" to="/signup/createprofile">
						<button>Sign Up</button>
					</Link>
				</div>
				<div id="login-message">
					<p>
						Already have an account? <span id="login-link">Login</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default SignUpPage;

{
	/* <div className="signuppage">
	<h1>Sign Up</h1>
	<input type="text" placeholder="E-mail" />
	<input type="text" placeholder="Password" />

	<Link to="/signup/createprofile">Sign Up</Link>
	<h2> Already have an account?</h2>
	<h1>Login</h1>
</div>; */
}
