import React from 'react';
import css from './Nav.module.css'

function Nav() {
    return (
        <nav className={css.app_nav}>
            <ol>
                <li>
                    <a href="/">
                        <span className={css.f1 + " "+ css.left_icon}></span>
                        <span className={css.left_label}>Профиль</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className={css.f2 + " "+ css.left_icon}></span>
                        <span className={css.left_label}>Сообщения</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className={css.f3 + " "+ css.left_icon}></span>
                        <span className={css.left_label}>Новости</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className={css.f4 + " "+ css.left_icon}></span>
                        <span className={css.left_label}>Музыка</span>
                    </a>
                </li>
                <br></br>
                <li>
                    <a href="/">
                        <span className={css.f5 + " "+ css.left_icon}></span>
                        <span className={css.left_label}>Настройки</span>
                    </a>
                </li>
            </ol>
        </nav>
    );
}

export default Nav;
