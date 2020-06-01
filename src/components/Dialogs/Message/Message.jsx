import React from "react";
import css from "./../Dialogs.module.css"

const Message = (props) =>{
    return (
        <div className={css.message}>
            <div className={css.message_photo}>
                <div className={css.photo2}></div>
            </div>
            <div className={css.message_name}>{props.name}</div>
            <div className={css.message_con1}>
                <div className={css.message_con2}>{props.text}</div>
            </div>
        </div>
    )
}

export default Message;