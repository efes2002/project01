import React from 'react';
import css from './Profile.module.css';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={css.app_profile}>
            <ProfileInfo/>
            <Myposts/>
        </div>
    );
}

export default Profile;