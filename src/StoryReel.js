import React from 'react';
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
        <Story 
        image = "https://blog.hootsuite.com/wp-content/uploads/2021/03/Checking-Facebook-Story-views-1-310x614.jpg"
        profileSrc = "https://simonadev.co.uk/wp-content/uploads/2022/03/IMG_20211225_150234-1-768x1024.jpg"
        title = "Simona Ya"
        />
        <Story 
        image = "https://blog.wishpond.com/wp-content/uploads/2020/06/facebook-stories-to-Instagram.jpg"
        profileSrc = "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2V8ZW58MHx8MHx8&w=1000&q=80"
        title = "Karen Jo"
        />
        <Story 
        image = "https://images.ctfassets.net/b4k16c7lw5ut/327NYfRU0u0jvHEBhrNFm1/e50b8b931cf7cb78b4ef400d229ec0f4/Facebook_Stories_-_thumbnail.png?w=1920&h=1080&q=50&fm=png"
        profileSrc = "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        title = "Ashley Rock"
        />
        <Story 
        image = "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2022/01/Design-LP-FB-Stories-Guide-2022x3_thumbnail-scaled.jpeg"
        profileSrc = "https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg"
        title = "Selim Harun"
        />
        <Story 
        image = "https://images.ctfassets.net/00i767ygo3tc/2dkNgtt47aIKUNaytzbFh6/dee6b9ac3dfd5e48cac4c33aaeb4512a/facebook-stories-for-business.png"
        profileSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RzTZv3NNtD9PvGtd9WxT4HDRF47DKFIybw&usqp=CAU"
        title = "Jessie Edwards"
        />
    </div>
  )
}

export default StoryReel;