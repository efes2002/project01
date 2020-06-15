import React from 'react';
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

function Profile(props) {
    if (!props.profile) {return <Preloader/>}
    return (

        <div className={css.app_profile}>
            <ProfileInfo profile={props.profile}/>
            <MypostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;