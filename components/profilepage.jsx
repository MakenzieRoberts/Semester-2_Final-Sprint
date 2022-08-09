import React from "react";
import "../stylesheets/profilepage.css";
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
    navigate("/signup/createprofile/feed");
  };

  return (
    <div className="profilepage">
      <form>
        <h1>Create Profile</h1>
        <input type="text" id="username" placeholder="Username" />
        <input type="text" id="pronouns" placeholder="Preferred Pronouns" />
        <input type="text" id="bio" placeholder="Bio" />
        <button onClick={sendData}>Submit</button>
      </form>
    </div>
  );
}

export default ProfilePage;
