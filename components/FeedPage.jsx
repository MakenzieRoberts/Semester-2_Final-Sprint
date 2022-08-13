import "../stylesheets/feedpage.css";
import Logo from "./Logo";
import React from "react";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import UserPicture from "./UserPicture";
import { useState } from "react";
import CurrDate from "./CurrentDate";

function FeedPage({ username, pronouns, bio }) {
	const [feedMsgStyle, setMsgStyle] = useState("visiblefeedmsg");

	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState("");

	const changeMsgStyle = () => {
		console.log("you just clicked");

		setMsgStyle("hiddenfeedmsg");
	};

	function sendData(e) {
		empty(post);

		clearFields();

		e.preventDefault();
	}

	const empty = (post) => {
		if (!post) {
			alert("blank");
			return;
		}
		changeMsgStyle();
		setPosts([post, ...posts]);
	};

	function showPosts() {
		return (
			<>
				{posts.map((post) => {
					return (
						<>
							<div className="newpost">
								<div className="newpost-user">
									<div className="newpost-pic">
										<UserPicture />
									</div>

									<div className="newpost-userinfo">
										<div className="newpost-namepronouns">
											<p className="newpost-username-text">{username}</p>

											<p className="newpost-pronouns-text">({pronouns})</p>
										</div>
									</div>
								</div>

								<div className="newpost-content">
									<p>{post}</p>

									<div className="newpost-date">
										<CurrDate />
									</div>
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
					<div className="gradient-border">
						<div className="form-container">
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

								<button className="button-text" type="submit">
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
