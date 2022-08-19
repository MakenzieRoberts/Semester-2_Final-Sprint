// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import "../stylesheets/feedpage.css";
import Logo from "./Logo";
import React from "react";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import UserPicture from "./UserPicture";
import Heart from "./Heart";
import { useState, useEffect } from "react";
import CurrDate from "./CurrentDate";

function FeedPage({ username, pronouns, bio }) {
	const [feedMsgStyle, setMsgStyle] = useState("visiblefeedmsg");

	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState("");
	const [pronounsFormat, setPronounsFormat] = useState(pronouns);

	useEffect(() => {
		if (pronounsFormat.length !== 0) {
			setPronounsFormat(`(${pronouns})`);
		} // eslint-disable-next-line
	}, []);

	//		Function to hide message that appears while feed is empty
	const changeMsgStyle = () => {
		setMsgStyle("hiddenfeedmsg");
	};
	// 		This function runs when the new post form is submitted.
	function sendData(e) {
		//		Post validation, hides empty feed message, sets post state
		empty(post);
		//		Clears input field
		clearFields();

		e.preventDefault();
	}
	//		Post validation, hides empty feed message, sets post state
	const empty = (post) => {
		if (!post) {
			alert("Post cannot be blank.");
			return;
		}
		//		 Hides empty feed message
		changeMsgStyle();
		//		 Sets post state
		setPosts([post, ...posts]);
	};

	function showPosts() {
		return (
			<>
				{posts.map((post) => {
					return (
						<>
							{/* *************************** New Post User Info *************************** */}
							<div className="newpost">
								<div className="newpost-user">
									<div className="newpost-pic">
										<UserPicture />
									</div>

									<div className="newpost-userinfo">
										<div className="newpost-namepronouns">
											<p className="newpost-username-text">{username}</p>

											<p className="newpost-pronouns-text">{pronounsFormat}</p>
										</div>
									</div>
								</div>
								{/* **************************** New Post Content **************************** */}
								<div className="newpost-content">
									{/* 
											Post Display
									*/}
									<p>{post}</p>

									{/* 
											Date Display
									*/}
									<div className="newpost-date">
										<CurrDate />
									</div>
								</div>

								{/* 
										Like Button Component
								*/}
								<Heart />
							</div>
						</>
					);
				})}
			</>
		);
	}

	return (
		/* ******************************** Feed JSX ******************************** */
		<div className="feedpage">
			<div className="nav">
				<Logo />
				<NavBar />
			</div>
			<div className="feed">
				{/* ************************** User Information Area ************************* */}
				<div id="user">
					<div id="userpicture">
						<UserPicture />
					</div>
					<div id="userinfo">
						<UserInfo value1={username} value2={pronouns} value3={bio} />
					</div>
				</div>
				{/* ************************** Create New Post Area ************************** */}
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
								{/* 
										Submit Button
								 */}
								<button className="button-text" type="submit">
									Post
								</button>
							</form>
						</div>
					</div>
				</div>
				{/* ******************************** Feed Area ******************************* */}
				<div id="posts-container">
					<p className={feedMsgStyle}>
						Looks like you don't have any posts to show.
					</p>
					<div className="target">{posts.length > 0 && showPosts()}</div>
				</div>
			</div>
		</div>
	);

	//		Clears new post input after submittal
	function clearFields() {
		setPost("");
	}
}

export default FeedPage;
