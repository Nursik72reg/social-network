import React from "react";
import classes from "./Users.module.css";
import photos from "../../img/person__img.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={classes.pageSize}>
                {pages.map(m => {
                    return <span className={props.currentPage === m && classes.select}
                                 onClick={() => {
                                     props.onPageChanged(m)
                                 }}>{m},</span>

                })}
            </div>
            {props.users.map(m => <div className={classes.container}>
                <div>
                    <NavLink to={"/profile/" + m.id}>
                        <img className={classes.img}
                             src={m.photos.small != null ? m.photos.small : photos}/>
                    </NavLink>
                    <div>
                        {m.followed
                            ? <button disabled={props.isDisable} onClick={() => {
                                props.unFollow(m.id);
                            }}>unfollowed</button>
                            : <button disabled={props.isDisable} onClick={() => {
                                props.followw(m.id);
                            }}>followed</button>
                        }

                    </div>
                </div>
                <div>
                    <div className={classes.status}>{m.status}</div>
                    <div>{m.name}</div>
                </div>
            </div>)}
        </div>
    )
};

export default Users;