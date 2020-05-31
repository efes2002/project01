import React from 'react';
import css from './Myposts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const Myposts = (props) => {
    let postsElements = props.posts.map(value => <Post message={value.message} likecount={value.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    };


    return (
        <div className={css.pr2}>
            <div className={css.posts_0}>
                <div className={css.ps1}>
                    <div className={css.creat_post}>
                        <div className={css.f1}>My posts</div>
                        <div className={css.f2}>
                            <textarea
                                ref={newPostElement}
                                onChange={onPostChange}
                                value={props.newPostText}>
                            </textarea>
                        </div>
                        <div className={css.f3}>
                            <button onClick={addPost}>add post</button>
                        </div>
                    </div>
                </div>
                <div className={css.ps2}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default Myposts;