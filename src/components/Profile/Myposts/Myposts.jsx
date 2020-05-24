import React from 'react';
import css from './Myposts.module.css';
import Post from "./Post/Post";

function Myposts() {
    return (
        <div className={css.pr2}>
            <div className={css.myposts}>
                <div className={css.ps1}>
                    <div className={css.creat_post}>
                        <div className={css.f1}>My posts</div>
                        <div className={css.f2}><textarea></textarea></div>
                        <div className={css.f3}><button>add post</button></div>
                    </div>
                </div>
                <div className={css.ps2}>
                    <Post name={"Иван"}/>
                    <Post name={"Петр"}/>
                    <Post name={"Сергей"}/>
                </div>
            </div>
        </div>
    );
}

export default Myposts;