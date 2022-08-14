import React from "react";
import "../stylesheets/userinfo.css";
import { useState, useEffect } from "react";
function UserInfo(props) {
	const [pronounsFormat, setPronounsFormat] = useState(props.value2);

	useEffect(() => {
		if (pronounsFormat.length !== 0) {
			setPronounsFormat(`(${props.value2})`);
		}
	}, []);

	return (
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
