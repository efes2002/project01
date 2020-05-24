import React from "react";
import css from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={css.dialog}>

            <div className={css.dialog_photo}>
                <div className={css.photo1}></div>
            </div>
            <div className={css.dialog_name}>
                <NavLink to={path} activeClassName={css.activeLink}>{props.name}</NavLink>
            </div>
        </div>
        )
}

const Message = (props) =>{
    return (
        <div className={css.message}>
            <div className={css.message_photo}><div className={css.photo2}></div></div>
            <div className={css.message_name}>{props.name}</div>
            <div className={css.message_con1}>
                <div className={css.message_con2}>{props.text}</div>
            </div>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_items}>
                <Dialog id={"1"} name={"Иван"}/>
                <Dialog id={"2"} name={"Петр"}/>
                <Dialog id={"3"} name={"Сергей"}/>
            </div>

            <div className={css.messages}>
                <Message name={"Иван"} text={"Привет всем"}/>
                <Message name={"Сергей"} text={"Почему так долго"}/>
                <Message name={"Петр"} text={"Это я пишу вам"}/>
            </div>
        </div>
    );
}

export default Dialogs;