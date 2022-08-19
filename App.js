import "./stylesheets/reset.css";
import "./app.css";

import SignUpPage from "./components/SignUpPage";
import ProfilePage from "./components/ProfilePage";
import FeedPage from "./components/FeedPage";
// import Logo from "./components/Logo";
import LoginPage from "./components/LoginPage";
import LoginFeedPage from "./components/LoginFeedPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
	const [username, setUsername] = useState("");
	const [pronouns, setPronouns] = useState("");
	const [bio, setBio] = useState("");

	function handleUserInfo(un, pp, bb) {
		setUsername(un);
		setPronouns(pp);
		setBio(bb);
	}
	return (
		<div className="App">
			<div className="container">
		
				<Router>
					<Routes>
						<Route path="/" element={<SignUpPage />} />

						<Route
							path="/signup/createprofile"
							element={<ProfilePage handleUserInfo={handleUserInfo} />}
						/>
						<Route
							path="/feed"
							element={
								<FeedPage username={username} pronouns={pronouns} bio={bio} />
							}
						/>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/login/userfeed" element={<LoginFeedPage />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
