import React from "react";

export default function CurrDate() {
  const current = new Date();
  const date = `${current.getDate()} ${current.getFullYear()}, ${current.getHours()}:${current.getMinutes()}`;

  const month = current.toLocaleString("default", { month: "short" });

  return (
    <div className="date">
      <h1>
        {month} {date}
      </h1>
    </div>
  );
}
