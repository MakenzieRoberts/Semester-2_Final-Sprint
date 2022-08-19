// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import "../stylesheets/userfeedpicture.css";
import useravatar from "../images/useravatar.png";

function UserFeedPicture() {
	//		This function returns the user image.
	return <img className="userfeedpicture" src={useravatar} alt="Avatar" />;
}

export default UserFeedPicture;
