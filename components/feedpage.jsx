import "../stylesheets/feedpage.css";
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./navbar";

function FeedPage() {
	const location = useLocation();
	const { username } = location.state;
	const { pronouns } = location.state;
	const { bio } = location.state;

	return (
		<div className="feedpage">
			<h1>FeedPage</h1>
			<p>username: {username}</p>
			<p>pronouns: {pronouns}</p>
			<p>bio: {bio}</p>
			<NavBar />
		</div>
	);
}

export default FeedPage;
