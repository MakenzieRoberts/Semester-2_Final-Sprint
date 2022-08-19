// Project by: Kara Balsom, Makenzie Roberts, & David Turner
//Date Written: August 8, 2022
//File Name: Team1_Sprint2.zip

import "../stylesheets/signuppage.css";
import "../stylesheets/logo.css";
import logo from "../images/logo.png";
function Logo() {
	return (
		<>
			<div className="logo-area">
				<a href="/">
					<img src={logo} alt="SafeSpace Logo" />
				</a>
			</div>
		</>
	);
}

export default Logo;
