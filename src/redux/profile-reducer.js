const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
    posts: [
        {id: 1, message: "Привет всем", likeCount: 2},
        {id: 2, message: "Как дела у вас", likeCount: 10},
        {id: 3, message: "Я тоже так думаю", likeCount: 5},
    ],
    newPostText: "new post2"
};

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case (ADD_POST):
                let newPost = {id: 4, message: state.newPostText, likeCount: 87};
                if (state.newPostText) {
                    state.posts.push(newPost);
                    state.newPostText = '';
                }
                break;
            case (UPDATE_NEW_POST_TEXT):
                state.newPostText = action.newText;
                break;
            default:
        }
    return state;
};

export default profileReducer;