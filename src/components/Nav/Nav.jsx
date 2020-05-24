import React from 'react';
import css from './Nav.module.css'
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={css.app_nav}>
            <ol>
                <li>
                    <NavLink to="/profile" activeClassName={css.activeLink}>
                        <span className={css.f1 + " " + css.left_icon}></span>
                        <span className={css.left_label}>Профиль</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={css.activeLink}>
                        <span className={css.f2 + " " + css.left_icon}></span>
                        <span className={css.left_label}>Сообщения</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={css.activeLink}>
                        <span className={css.f3 + " " + css.left_icon}></span>
                        <span className={css.left_label}>Новости</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Music" activeClassName={css.activeLink}>
                        <span className={css.f4 + " " + css.left_icon}></span>
                        <span className={css.left_label}>Музыка</span>
                    </NavLink>
                </li>
                <br></br>
                <li>
                    <NavLink to="/settings" activeClassName={css.activeLink}>
                        <span className={css.f5 + " " + css.left_icon}></span>
                        <span className={css.left_label}>Настройки</span>
                    </NavLink>
                </li>
            </ol>
        </nav>
    );
}

export default Nav;
