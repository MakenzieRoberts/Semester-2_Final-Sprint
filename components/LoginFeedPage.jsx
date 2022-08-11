import "../stylesheets/LoginFeedPage.css";
import React from "react";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import UserPicture from "./UserPicture";
import { useState } from "react";
import CurrDate from "./CurrentDate";

function LoginFeedPage({ username, pronouns, bio }) {
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
    <div className="loginfeedpage">
      <div className="nav">
        <NavBar />
      </div>
      <div className="feed">
        <div id="user">
          <div id="userpicture">
            <UserPicture />
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
        <div className="newpost">
          <div id="newpostuser">
            <div id="newpostpic">
              <UserPicture />
            </div>
            <div id="newpostuserinfo">
              <UserInfo value1={"Noman"} value2={"he/him"} />
            </div>
          </div>
          <div id="newpostcontent">
            Wow! Kara, David, and Makenzie did so well on their Sprint! I will
            give them a Pass Outstanding.
          </div>
          <div id="newpostdate">
            <CurrDate />
          </div>
        </div>
        <div className="newpost">
          <div id="newpostuser">
            <div id="newpostpic">
              <UserPicture />
            </div>
            <div id="newpostuserinfo">
              <UserInfo value1={"Noman"} value2={"he/him"} />
            </div>
          </div>
          <div id="newpostcontent">Hello Everyone! Welcome to Sprint Week!</div>
          <div id="newpostdate">
            <CurrDate />
          </div>
        </div>
      </div>
    </div>
  );

  function clearFields() {
    setPost("");
  }
}

export default LoginFeedPage;
