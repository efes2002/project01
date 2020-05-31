const ADD_POST = 'ADD-POST';
const UPDATE_NE_POST_TEXT = 'UPDATE_NE_POST_TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NE_POST_TEXT, newText: text})

const profileReducer = (state, action) => {
        switch (action.type) {
            case (ADD_POST):
                let newPost = {id: 4, message: state.newPostText, likeCount: 87};
                if (state.newPostText) {
                    state.posts.push(newPost);
                    state.newPostText = '';
                }
                break;
            case (UPDATE_NE_POST_TEXT):
                state.newPostText = action.newText;
                break;
            default:
        }
    return state;
};

export default profileReducer;