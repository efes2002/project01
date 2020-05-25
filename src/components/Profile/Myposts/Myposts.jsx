import React from 'react';
import css from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
    let massageDate = [
        {id:1, message:"Привет всем", likeCount: 2},
        {id:2, message:"Как дела у вас", likeCount: 10},
        {id:3, message:"Я тоже так думаю", likeCount: 5},
    ]
    return (
        <div className={css.pr2}>
            <div className={css.posts_0}>
                <div className={css.ps1}>
                    <div className={css.creat_post}>
                        <div className={css.f1}>My posts</div>
                        <div className={css.f2}><textarea></textarea></div>
                        <div className={css.f3}><button>add post</button></div>
                    </div>
                </div>
                <div className={css.ps2}>
                    <Post message={massageDate[0].message} likecount={massageDate[0].likeCount}/>
                    <Post message={massageDate[1].message} likecount={massageDate[1].likeCount}/>
                    <Post message={massageDate[2].message} likecount={massageDate[2].likeCount}/>
                </div>
            </div>
        </div>
    );
}

export default Myposts;