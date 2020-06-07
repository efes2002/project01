import React from "react";


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(    [
            {id: 1, followed: true, fullName: "Петя", status: "это мой статус", location: {city: "Moscow", country: "Russia"}},
            {id: 2, followed: true, fullName: "Ваня", status: "это мой статус", location: {city: "Moscow", country: "Russia"}},
            {id: 3, followed: false, fullName: "Иван", status: "это мой статус", location: {city: "Moscow", country: "Russia"}},
        ]);
    };
    return (
        <div>
            {
                props.users.map(u =>
                    <ul>
                        <div key={u.id}>
                            {(u.followed === true)
                                ? <button onClick={() => {props.unfollow(u.id)}}>follow</button>
                                : <button onClick={() => {props.follow(u.id)}}>unfollow</button>}
                            <span>{u.fullName} </span>
                            <span>{u.location.city} </span>
                            <span>{u.location.country}</span>
                        </div>
                    </ul>
                )
            }
        </div>
    )
}

export default Users;