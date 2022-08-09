import "../stylesheets/profilepage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfilePage({ handleUserInfo, username, pronouns, bio }) {
	function sendData(e) {
		var un = document.querySelector("#username").value;
		var pp = document.querySelector("#pronouns").value;
		var bb = document.querySelector("#bio").value;
		handleUserInfo(un, pp, bb);
		e.preventDefault();
	}
	return (
		<div className="profilepage">
			<h1>Create Profile</h1>
			<input type="text" id="username" placeholder="Username" />
			<input type="text" id="pronouns" placeholder="Preferred Pronouns" />
			<input type="text" id="bio" placeholder="Bio" />
			{/* !KENZI : Fixed the button issue by nesting the button inside <Link> and changing 'onClick' to 'onSubmit' */}
			<Link id="feed-link" to="/feed">
				<button onSubmit={sendData}>Proceed</button>
			</Link>
		</div>
	);
}

export default ProfilePage;
