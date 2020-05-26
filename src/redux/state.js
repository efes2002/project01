import {renderEntireTree} from "../render";

let state = {
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
            {id: 3, name: "Петр", message: "Это я пишу вам"}
        ]
    }
}

export let addPost = () => {
    let newPost = {id: 4, message: state.profilePage.newPostText, likeCount: 87};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;