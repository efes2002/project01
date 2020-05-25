import React from "react";
import css from "./Dialogs.module.css"
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(value => <DialogItems id={value.id} name={value.name}/>);
    let messageElements = props.dialogsPage.messages.map(value => <Message name={value.name} text={value.message}/>);
    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;