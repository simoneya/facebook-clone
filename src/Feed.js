import React, { useState, useEffect } from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {

  const [posts, setPosts] = useState([]);

  //connection to database starts:
  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    })
  }, [])
  //connection to database ends here.
  //need to add post from your firebase database manually and then it will show on the app.
  

  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />

        { posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
         />
        ))}
    </div>
  );
}

export default Feed;