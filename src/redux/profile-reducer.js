import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
    posts: [
        {id: 1, message: "Привет всем", likeCount: 2},
        {id: 2, message: "Как дела у вас", likeCount: 10},
        {id: 3, message: "Я тоже так думаю", likeCount: 5},
    ],
    newPostText: "new post2",
    profile: null
};

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case (ADD_POST): {
                let stateCopy = {...state};
                let newPost = {id: 4, message: stateCopy.newPostText, likeCount: 87};
                if (stateCopy.newPostText) {
                    stateCopy.posts.push(newPost);
                    stateCopy.newPostText = '';
                }
                return stateCopy;
            }
            case (UPDATE_NEW_POST_TEXT): {
                return {...state, newPostText: action.newText};
            }
            case (SET_USER_PROFILE): {
                return {...state, profile: action.profile};
            }
            default: return state;
        }
};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {dispatch(setUserProfile(data));
            });
    }
}

export default profileReducer;