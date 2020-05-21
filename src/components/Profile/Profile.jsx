import React from 'react';
import css from './Profile.module.css';
import Myposts from "./Myposts/Myposts";

function Profile() {
    return (
        <div className={css.app_profile}>
            <div className={css.pr1}></div>
            <div className={css.pr2}><Myposts/></div>
        </div>
    );
}

export default Profile;