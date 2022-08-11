import "../stylesheets/feedpage.css";
import Logo from "./Logo";
import React from "react";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import UserPicture from "./UserPicture";
import { useState } from "react";
import CurrDate from "./CurrentDate";

function FeedPage({ username, pronouns, bio }) {
	const [feedMsgStyle, setStyle] = useState("visiblefeedmsg");

	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState("");

	const changeStyle = () => {
		console.log("you just clicked");

		setStyle("hiddenfeedmsg");
	};

	function sendData(e) {
		setPosts([post, ...posts]);

		clearFields();
		changeStyle();
		e.preventDefault();
	}

	function showPosts() {
		return (
			<>
				{posts.map((post) => {
					return (
						<>
							<div className="newpost">
								<div className="newpostuser">
									<div className="newpostpic">
										<UserPicture />
									</div>
									<div className="newpostuserinfo">
										<div className="userinfo">
											<div id="namepronouns">
												<p class="username-text">{username}</p>

												<p class="pronouns-text">({pronouns})</p>
											</div>
										</div>
									</div>
								</div>
								<div className="newpostcontent">
									<p>{post}</p>
								</div>
								<div className="newpostdate">
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
				<Logo />
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
				<div id="newpost-container">
					<div class="gradient-border">
						<div class="form-container">
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
						</div>
					</div>
				</div>
				<div id="posts-container">
					<p className={feedMsgStyle}>
						Looks like you don't have any posts to show.
					</p>
					<div className="target">{posts.length > 0 && showPosts()}</div>
				</div>
			</div>
		</div>
	);

	function clearFields() {
		setPost("");
	}
}

export default FeedPage;
