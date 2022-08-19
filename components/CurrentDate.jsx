// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import React from "react";

export default function CurrDate() {
	// 		This function gets the current data and formats how it will display
	const current = new Date();
	const date = `${current.getDate()} ${current.getFullYear()}, ${current.getHours()}:${String(
		current.getMinutes()
	).padStart(2, "0")}`;

	const month = current.toLocaleString("default", { month: "short" });

	return (
		<div className="date">
			<p>
				{month} {date}
			</p>
		</div>
	);
}
