import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post
            profilePic={"https://simonadev.co.uk/wp-content/uploads/2022/03/IMG_20211225_150234-1-768x1024.jpg"}
            message="Wow this works"
            timestamp="This is a timestamp"
            username="simdev"
            image={"https://www.creatopy.com/blog/wp-content/uploads/2019/07/where-are-stories-on-facebook-600x600.png"}
         />
        <Post />
        <Post />
    </div>
  )
}

export default Feed;