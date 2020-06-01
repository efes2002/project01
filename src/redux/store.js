import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Привет всем", likeCount: 2},
                {id: 2, message: "Как дела у вас", likeCount: 10},
                {id: 3, message: "Я тоже так думаю", likeCount: 5},
            ],
            newPostText: "new post2"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Иван"},
                {id: 2, name: "Петр"},
                {id: 3, name: "Сергей"}
            ],
            messages: [
                {id: 1, name: "Иван", message: "Привет всем"},
                {id: 2, name: "Сергей", message: "Почему так долго"},
                {id: 3, name: "Иван", message: "Это я пишу вам"}
            ],
            newMessageText: "new messages"
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.renderEntireTree = observer;
    },
    renderEntireTree() {
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.renderEntireTree(store.getState());

    }

};


export default store;