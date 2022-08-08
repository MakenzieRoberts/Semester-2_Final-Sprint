import "../stylesheets/profilepage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
	const [usernameData, setUsernameData] = useState(null);
	const [pronounData, setPronounData] = useState(null);
	const [bioData, setBioData] = useState(null);

	const storeUserData = async () => {
		let usernameData = document.querySelector("#username").value;
		let pronounData = document.querySelector("#pronouns").value;
		let bioData = document.querySelector("#bio").value;
		setUsernameData(usernameData);
		setPronounData(pronounData);
		setBioData(bioData);
	};

	return (
		<div className="profilepage">
			<h1>Create Profile</h1>
			<input
				type="text"
				id="username"
				placeholder="Username"
				onChange={storeUserData}
			/>
			<input
				type="text"
				id="pronouns"
				placeholder="Preferred Pronouns"
				onChange={storeUserData}
			/>
			<input type="text" id="bio" placeholder="Bio" onChange={storeUserData} />
			<button type="submit" onSubmit={storeUserData}>
				<Link
					to="/feed"
					state={{
						username: usernameData,
						pronouns: pronounData,
						bio: bioData,
					}}
				>
					Continue
				</Link>
			</button>
		</div>
	);
}

export default ProfilePage;
