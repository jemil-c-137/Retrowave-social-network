import React from "react";

import User from "./User";
import MyPostsContainer from "./MyPosts/MyPostContainer";



const Profile = (props) => {

    return (
      <main >
        <User profile={props.profile}/>
        <MyPostsContainer/>
      </main>
    )

}

export default Profile