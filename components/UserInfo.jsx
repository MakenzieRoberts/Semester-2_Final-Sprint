import React from "react";
import "../stylesheets/userinfo.css";

function UserInfo(props) {
	return (
		<div className="userinfo">
			<h1> Username: {props.value1}</h1>
			<h1> Preferred Pronouns: {props.value2}</h1>
			<h1> Bio: {props.value3}</h1>
		</div>
	);
}

export default UserInfo;
