import React from "react";
import css from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={css.dialog} key={props.id}>
            <div className={css.dialog_photo}>
                <div className={css.photo1}></div>
            </div>
            <div className={css.dialog_name}>
                <NavLink to={path} activeClassName={css.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItems;