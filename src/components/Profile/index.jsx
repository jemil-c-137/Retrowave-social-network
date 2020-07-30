import React from "react";

import User from "./User";
import MyPostsContainer from "./MyPosts/MyPostContainer";



const Profile = (props) => {

    return (
      <main >
        <User updateStatus={props.updateStatus} status={props.status} profile={props.profile}/>
        <MyPostsContainer/>
      </main>
    )

}

export default Profile