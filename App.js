import "./App.css";
import SignUpPage from "./components/signuppage";
import ProfilePage from "./components/profilepage";
import FeedPage from "./components/feedpage";
import Logo from "./components/logo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Logo />
			<Router>
				<Routes>
					<Route path="/" element={<SignUpPage />} />
					<Route path="/signup/createprofile" element={<ProfilePage />} />
					<Route path="/feed" element={<FeedPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
