import "../stylesheets/signuppage.css";
import "../stylesheets/logo.css";
import logo from "../images/logo.png";
function Logo() {
	return (
		<>
			{/* <header> */}
			<div className="logo-area">
				<img src={logo} alt="SafeSpace Logo" />
			</div>
			{/* </header> */}
		</>
	);
}

export default Logo;
