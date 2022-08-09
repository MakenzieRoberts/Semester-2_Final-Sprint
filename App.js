import "./App.css";
import SignUpPage from "./components/SignupPage";
import ProfilePage from "./components/ProfilePage";
import FeedPage from "./components/FeedPage";
import Logo from "./components/Logo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// Hello From DT

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
      <div class="container">
        <Logo />
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
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
