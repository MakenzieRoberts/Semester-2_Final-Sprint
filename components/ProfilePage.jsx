import "../stylesheets/profilepage.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProfilePage({ handleUserInfo, username, pronouns, bio }) {
	function sendData(e) {
		var un = document.querySelector("#username").value;
		var pp = document.querySelector("#pronouns").value;
		var bb = document.querySelector("#bio").value;
		handleUserInfo(un, pp, bb);
		navigateToFeed();
		e.preventDefault();
	}
	const navigate = useNavigate();

	const navigateToFeed = () => {
		navigate("/feed");
	};
	return (
		<div className="profilepage">
			<Logo />
			<form class="form">
				<div id="form-title">
					<h2>Create Profile</h2>
				</div>
				<div class="inputs">
					<div class="gradient-border">
						<input type="text" id="username" placeholder="Username" />
					</div>
					<div class="gradient-border">
						<input type="text" id="pronouns" placeholder="Preferred Pronouns" />
					</div>
					<div class="gradient-border">
						<textarea type="text" id="bio" placeholder="Bio" />
					</div>

					<button onClick={sendData}>
						<Link class="button-text" to="/feed">
							Proceed
						</Link>
					</button>
				</div>
			</form>
		</div>
	);
}

export default ProfilePage;
