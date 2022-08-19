// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import React from "react";
import "../stylesheets/userinfo.css";
import { useState, useEffect } from "react";

function UserInfo(props) {
	const [pronounsFormat, setPronounsFormat] = useState(props.value2);

	// 		If pronoun user data are provided in ProfilePage, format it with ()
	useEffect(() => {
		if (pronounsFormat.length !== 0) {
			setPronounsFormat(`(${props.value2})`);
		} // eslint-disable-next-line
	}, []);

	return (
		//		User info display
		<div className="userinfo">
			<div id="namepronouns">
				<p id="username-text">{props.value1}</p>

				<p id="pronouns-text">{pronounsFormat}</p>
			</div>
			<div id="bio">
				<p id="bio-text"> {props.value3}</p>
			</div>
		</div>
	);
}

export default UserInfo;
