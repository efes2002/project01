import React from 'react';
import css from './ProfileInfo.module.css';
import logo from './Photo/photo1.jpg'

function ProfileInfo() {
    return (
        <div className={css.pr1}>
            <div className={css.pr_info_photo}><img src={logo} alt={"logo"}/> </div>
            <div className={css.pr_info_dis}>
                <p className={`${css.text1} ${css.name1}`}>Иван</p>
                <p className={css.text1}><span className={css.span1}>День рожденья: </span> <span className={css.span2}> 10.05.1990</span></p>
                <p className={css.text1}><span className={css.span1}>Страна: </span> <span className={css.span2}> Россия</span></p>
                <p className={css.text1}><span className={css.span1}>Город: </span> <span className={css.span2}> Волгоград</span></p>
                <p className={css.text1}><span className={css.span1}>Возраст: </span> <span className={css.span2}> 20 лет</span></p>

            </div>

        </div>
    );
}

export default ProfileInfo;