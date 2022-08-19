// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import React from "react";
import "../stylesheets/heart.css";
import heartempty from "../images/heart-empty.png";
import heartfull from "../images/heart-full.png";
import { useState } from "react";

function Heart() {
	//		This function 'fills in' the Like button (heart image) when clicked.
	const [heart, setHeart] = useState(heartempty);
	const changeHeart = (e) => {
		if (heart === heartempty) {
			setHeart(heartfull);
		} else {
			setHeart(heartempty);
		}
		e.preventDefault();
	};
	return (
		<>
			<img
				className="heart-img"
				src={heart}
				alt="Like Button"
				onClick={changeHeart}
			/>
		</>
	);
}

export default Heart;
