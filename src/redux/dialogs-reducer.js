const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_MESSAGE): {
            let newMessage = {id: 4, name: "Иван", message: state.newMessageText};
            let stateCopy = {...state};
            if (stateCopy.newMessageText) {
                stateCopy.messages.push(newMessage);
                stateCopy.newMessageText = '';
            }
            return stateCopy;
        }
        case (UPDATE_NEW_MESSAGE_TEXT): {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
    }
    return state;
}

export default dialogsReducer;