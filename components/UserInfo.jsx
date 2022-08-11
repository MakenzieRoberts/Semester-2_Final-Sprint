import React from "react";
import "../stylesheets/UserInfo.css";

function UserInfo(props) {
  return (
    <div className="userinfo">
      <div id="namepronouns">
        <h1>{props.value1}</h1>

        <h1>({props.value2})</h1>
      </div>
      <div id="bio">
        <h1> {props.value3}</h1>
      </div>
    </div>
  );
}

export default UserInfo;
