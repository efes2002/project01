import React from 'react';
import css from './Header.module.css'

function Header() {
    return (
        <header className={css.app_header}>
            <div className={css.header}>
                <div className={css.hd1}>
                    <div className={css.logo}></div>
                </div>
                <div className={css.hd1}></div>
            </div>
        </header>
    );
}

export default Header;