import React from 'react';
import css from './Myposts.module.css';
import Post from "./Post/Post";

function Myposts() {
    return (
        <div className={css.myposts}>
            <div className={css.ps1}>Posts</div>
            <div className={css.ps2}>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    );
}

export default Myposts;