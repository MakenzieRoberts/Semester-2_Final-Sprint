import "../stylesheets/profilepage.css";
import React, { useState } from "react";
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
			<h1>Create Profile</h1>
			<input type="text" id="username" placeholder="Username" />
			<input type="text" id="pronouns" placeholder="Preferred Pronouns" />
			<input type="text" id="bio" placeholder="Bio" />
			{/* !KENZI: Keeping this kere for now while I see if I can make the full-button link work */}
			<button onClick={sendData}>
				<Link to="/feed">Proceed</Link>
			</button>
		</div>
	);
}

export default ProfilePage;
