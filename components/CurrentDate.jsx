import React from "react";

export default function CurrDate() {
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  } ${current.getFullYear()}, ${current.getHours()}:${current.getMinutes()}`;

  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  const d = new Date();
  let day = weekday[d.getDay()];

  return (
    <div className="date">
      <h1>
        {day} {date}
      </h1>
    </div>
  );
}
