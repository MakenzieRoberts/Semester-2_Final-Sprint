import "../stylesheets/feedpage.css";
import React from "react";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import UserPicture from "./UserPicture";
import { useState } from "react";
import CurrDate from "./CurrentDate";

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
							<div className="newpost">
								<div id="newpostuser">
									<div id="newpostpic">
										<UserPicture />
									</div>
									<div id="newpostuserinfo">
										<UserInfo value1={username} value2={pronouns} />
									</div>
								</div>
								<div id="newpostcontent">{post}</div>
								<div id="newpostdate">
									<CurrDate />
								</div>
							</div>
						</>
					);
				})}
			</>
		);
	}

	return (
		<div className="feedpage">
			<div className="nav">
				<NavBar />
			</div>
			<div className="feed">
				<div id="user">
					<div id="userpicture">
						<UserPicture />
					</div>
					<div id="userinfo">
						<UserInfo value1={username} value2={pronouns} value3={bio} />
					</div>
				</div>

				<form onSubmit={sendData}>
					<textarea
						type="text"
						id="post"
						placeholder="Create New Post..."
						value={post}
						onChange={(e) => {
							setPost(e.target.value);
						}}
					/>
					<button class="button-text" type="submit">
						Post
					</button>
				</form>
				<div className="target">{posts.length > 0 && showPosts()}</div>
			</div>
		</div>
	);

	function clearFields() {
		setPost("");
	}
}

export default FeedPage;
