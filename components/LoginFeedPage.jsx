// 		Project by: 	Kara Balsom, Makenzie Roberts, & David Turner
//		Date Written: 	August 8, 2022
//		File Name: 		Team1_Sprint2.zip
//		GitHub URL: 	https://github.com/MakenzieRoberts/Semester-2_Final-Sprint.git

import "../stylesheets/loginfeedpage.css";
import Logo from "./Logo";
import React from "react";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import UserFeedPicture from "./UserFeedPicture";
import Heart from "./Heart";
import { useState } from "react";
import CurrDate from "./CurrentDate";

function LoginFeedPage({ username, pronouns, bio }) {
	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState("");

	// 		This function runs when the new post form is submitted.
	function sendData(e) {
		empty(post);
		//		Clears input field
		clearFields();
		e.preventDefault();
	}

	//		Post validation, hides empty feed message, sets post state.
	const empty = (post) => {
		if (!post) {
			alert("Post cannot be blank.");
			return;
		}
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
										<UserFeedPicture />
									</div>
									<div className="newpost-userinfo">
										<div className="newpost-namepronouns">
											<p className="newpost-username-text">Noman</p>

											<p className="newpost-pronouns-text">(he/him)</p>
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
		<div className="loginfeedpage">
			<div className="nav">
				<Logo />
				<NavBar />
			</div>
			<div className="feed">
				{/* ************************** User Information Area ************************* */}

				<div id="user">
					<div id="userpicture">
						<UserFeedPicture />
					</div>
					<div id="userinfo">
						<UserInfo
							value1={"Noman"}
							value2={"he/him"}
							value3={
								"I am an instructor at Keyin College. I teach my students HTML, CSS, Javascript, and React."
							}
						/>
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

				{/* 
				New Posts Area
				*/}
				<div className="target">{posts.length > 0 && showPosts()}</div>

				{/* ****************************** Pre-made Posts **************************** */}
				<div className="newpost">
					<div className="newpost-user">
						<div className="newpost-pic">
							<UserFeedPicture />
						</div>
						<div className="newpost-userinfo">
							<div className="newpost-namepronouns">
								<p className="newpost-username-text">Noman</p>

								<p className="newpost-pronouns-text">(he/him)</p>
							</div>
						</div>
					</div>
					<div className="newpost-content">
						<p>
							Wow! Kara, David, and Makenzie did so well on their Sprint! I will
							give them a Pass Outstanding.
						</p>

						<div className="newpost-date">
							<div className="date">
								<p>Aug 19 2022, 13:23</p>
							</div>
						</div>
					</div>
					<Heart />
				</div>
				<div className="newpost">
					<div className="newpost-user">
						<div className="newpost-pic">
							<UserFeedPicture />
						</div>
						<div className="newpost-userinfo">
							<div className="newpost-namepronouns">
								<p className="newpost-username-text">Noman</p>

								<p className="newpost-pronouns-text">(he/him)</p>
							</div>
						</div>
					</div>
					<div className="newpost-content">
						<p>Hello Everyone! Welcome to Sprint Week!</p>

						<div className="newpost-date">
							<div className="date">
								<p>Aug 8 2022, 9:00</p>
							</div>
						</div>
					</div>
					<Heart />
				</div>
			</div>
		</div>
	);

	function clearFields() {
		setPost("");
	}
}

export default LoginFeedPage;
