import React from 'react';
import css from './Post.module.css';

function Post(props) {
    return (
        <div className={css.post} key={props.id}>
            <div className={css.post_photo}><div className={css.photo2}></div></div>
            <div className={css.post_text}>
                {props.message}
            </div>
            <div className={css.post_like}>
                <div className={css.like_label}>
                    <div className={css.like_icon}></div>
                </div>
                <div className={css.like_count}>{props.likecount}</div>
            </div>
        </div>
    );
}

export default Post;