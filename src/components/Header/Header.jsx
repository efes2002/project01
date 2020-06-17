import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {

    return (
        <header className={css.app_header}>
            <div className={css.header}>
                <div className={css.hd1}>
                    <div className={css.logo}></div>
                </div>
                <div className={css.hd1}>
                    <div className={css.loginBlock}>
                        {props.isAuth? props.login: <NavLink to={'/login'}>login</NavLink>}

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;