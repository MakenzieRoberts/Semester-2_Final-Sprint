// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import "../stylesheets/userpicture.css";
import avatar from "../images/avatar.png";

function UserPicture() {
	//		This function returns the avatar image.
	return <img className="userpicture" src={avatar} alt="Logo" />;
}

export default UserPicture;
