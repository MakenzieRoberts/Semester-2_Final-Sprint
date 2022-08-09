import "../stylesheets/feedpage.css";
import React from "react";
// import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import { useState } from "react";

function FeedPage({ username, pronouns, bio }) {
	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState("");

	function sendData(e) {
		setPosts([post, ...posts]);

		clearFields();
		e.preventDefault();
	}

	function showPosts() {
		return (
			<>
				{posts.map((post) => {
					return (
						<>
							<div>{post}</div>
						</>
					);
				})}
			</>
		);
	}

	return (
		<div className="feedpage">
			<h1>FeedPage</h1>
			<NavBar />
			<UserInfo value1={username} value2={pronouns} value3={bio} />
			<form onSubmit={sendData}>
				<input
					type="text"
					id="post"
					placeholder="Create New Post..."
					value={post}
					onChange={(e) => {
						setPost(e.target.value);
					}}
				/>
				<button type="submit">Post</button>
			</form>
			<div className="target">{posts.length > 0 && showPosts()}</div>
		</div>
	);

	function clearFields() {
		setPost("");
	}
}

export default FeedPage;
