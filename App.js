import "./App.css";
import SignUpPage from "./components/signuppage";
import ProfilePage from "./components/profilepage";
import FeedPage from "./components/feedpage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/signup">Sign Up</Link> <br />
        <Link to="/createprofile">Create Profile</Link> <br />
        <Link to="/feed">Post Something</Link>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/createprofile" element={<ProfilePage />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
