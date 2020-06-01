import React from 'react';
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MyPostsContainer";

function Profile(props) {

    return (
        <div className={css.app_profile}>
            <ProfileInfo/>
            <MypostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;