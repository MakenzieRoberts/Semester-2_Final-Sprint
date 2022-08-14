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
