import React from "react";
import "../stylesheets/profilepage.css";

import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div className="profilepage">
      <h1>Create Profile</h1>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Preferred Pronouns" />
      <input type="text" placeholder="Bio" />
      <Link to="/signup/createprofile/feed">Confirm</Link>
    </div>
  );
}

export default ProfilePage;
