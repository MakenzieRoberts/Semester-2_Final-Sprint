import React from "react";
import "../stylesheets/userinfo.css";

function UserInfo(props) {
	return (
		<div className="userinfo">
			<div id="namepronouns">
				<p id="username-text">{props.value1}</p>

				<p id="pronouns-text">({props.value2})</p>
			</div>
			<div id="bio">
				<p id="bio-text"> {props.value3}</p>
			</div>
		</div>
	);
}

export default UserInfo;
