// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import "../stylesheets/signuppage.css";
import "../stylesheets/logo.css";
import logo from "../images/logo.png";
function Logo() {
	//		This function returns the logo image.

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
