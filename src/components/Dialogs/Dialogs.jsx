import React from "react";
import css from "./Dialogs.module.css"
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(value => <DialogItems id={value.id} name={value.name} key={Math.random()}/>);
    let messageElements = props.dialogsPage.messages.map(value => <Message name={value.name} text={value.message} key={Math.random()}/>);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessageActionCreator();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageTextActionCreator(text);
    };


    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div className={css.message_elements}>
                    {messageElements}
                </div>
                <div className={css.message_chat_input}>
                    <div className={css.d0}>
                        <div className={css.d1}>
                           <textarea
                               ref={newMessageElement}
                               onChange={onMessageChange}
                               value={props.dialogsPage.newMessageText}>
                            </textarea>
                        </div>
                        <div className={css.d2}>
                            <button onClick={addMessage}>отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;