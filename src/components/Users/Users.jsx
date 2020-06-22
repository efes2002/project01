import React from "react";
import css from './Users.module.css';
import logo from '../../assets/images/A2.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>{pages.map(p => {
                return <span key={Math.random()} className={props.currentPage === p ? css.selectPage : null}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>{p} </span>
            })}
            </div>
            <div className={css.us}>
                {props.users.map(u =>
                    <div key={Math.random()} className={css.us2}>
                        <div className={css.us21}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small == null ? logo : u.photos.small} alt="dd"/>
                            </NavLink>
                        </div>
                        <div className={css.us22}>
                            <div className={css.us221}>
                                {" Имя: " + u.name}
                            </div>
                            <div className={css.us222}>
                                City
                            </div>
                            <div className={css.us223}>
                                Contry
                            </div>
                            <div className={css.us224}>
                                {u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "3fabe218-a95b-478b-a3e2-33a59b605d6d"
                                                }
                                            }
                                        ).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "3fabe218-a95b-478b-a3e2-33a59b605d6d"
                                                }
                                            }
                                        ).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });

                                    }}>Follow</button>}
                            </div>
                        </div>


                    </div>
                )}
            </div>
        </div>
    )
}

export default Users;