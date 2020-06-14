import React from "react";
import css from './Users.module.css';

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>{pages.map(p => {
                    return <span className={props.currentPage === p && css.selectPage}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}>{p} </span>
                })}
            </div>
            <div>
                {props.users.map(u =>
                    <div key={Math.random()}>
                        <span><img src={u.photos.small} width="150" height="150"
                                   alt="dd"/></span>
                        {(u.followed === true)
                            ? <button onClick={() => {
                               props.unfollow(u.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>unfollow</button>}
                        <span>{" Имя: " + u.name} </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Users;