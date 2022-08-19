// Project by: Kara Balsom, Makenzie Roberts, & David Turner
//Date Written: August 8, 2022
//File Name: Team1_Sprint2.zip

/Import necessary components and stylesheets
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

// Create App Function
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
				{/* <Logo /> */}
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
