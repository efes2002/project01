import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";


const MypostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    };

    return (
        <Myposts
            addPostActionCreator={addPost}
            updateNewPostTextActionCreator={onPostChange}
            profilePage={state}
        />
    );
}

export default MypostsContainer;