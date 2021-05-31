import React from "react";
import Layout from "../../Layout/Layout";
import StoryLayout from "../../Layout/StoryLayout/StoryLayout";
import post1 from "../../../Images/post2.jpeg";
import { Avatar } from "@material-ui/core";
import avatar from "../../../Images/avatar1.jpg";

function Profile() {
  return (
    <main className="profile">
      <div className="profile-container">
        <img className="profile__timeline" src={post1}></img>
      </div>
      <div className="profile__main">
        <div className="profile__info">
          <Avatar
            variant="rounded"
            style={{
              width: "160px",
              height: "160px",
              border: "3px solid white",
              marginTop: "-70px",
              borderRadius: "15px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
            src={avatar}
          />
          <div className="profile__info__right">
            <section className="profile__into__right__top"></section>
            <section className="profile__into__right__bottom"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
