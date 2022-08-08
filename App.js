import "./App.css";
import SignUpPage from "./components/SignupPage";
import ProfilePage from "./components/ProfilePage";
import FeedPage from "./components/FeedPage";
import Logo from "./components/Logo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div class="container">
				<Logo />
				<Router>
					<Routes>
						<Route path="/" element={<SignUpPage />} />
						<Route path="/signup/createprofile" element={<ProfilePage />} />
						<Route path="/feed" element={<FeedPage />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
