// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import React from "react";
import "../stylesheets/navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<div className="navbar">
			{/* 
			Faux 'nav links' for display only 
			*/}
			<div id="nav-links">
				<Link to="#">Home</Link>
				<Link to="#">Explore</Link>
			</div>
		</div>
	);
}

export default NavBar;
