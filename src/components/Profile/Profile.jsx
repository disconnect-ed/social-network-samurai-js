import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./Profile.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
            />
            <MyPostsContainer profile={props.profile} />
        </div>
    )
}

export default Profile;