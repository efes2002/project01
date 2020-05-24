import React from 'react';
import css from './Post.module.css';

function Post(props) {
    return (
        <div className={css.post}>
            {props.name}
        </div>
    );
}

export default Post;