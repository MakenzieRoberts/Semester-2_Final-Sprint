import React from "react";

export default function CurrDate() {
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
