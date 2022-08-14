import React from "react";
import "../stylesheets/heart.css";
import heartempty from "../images/heart-empty.png";
import heartfull from "../images/heart-full.png";
import { useState } from "react";

function Heart() {
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
