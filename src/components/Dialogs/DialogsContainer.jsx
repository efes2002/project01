import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    let onNewMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action)
    };

    return (
        <Dialogs
            updateNewMessageText={onNewMessageChange}
            SendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
}

export default DialogsContainer;