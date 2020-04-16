import React from "react";
import classes from "./Users.module.css"
import * as axios from 'axios';

const UserCC = (props) => {
    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUser(response.data.items);
        });

    }
    let post = props.users.map((m) => {
        return <div className={classes.container}>
            <div>
                <img className={classes.img}
                     src="https://avatars.mds.yandex.net/get-pdb/1679978/b5d88035-d527-4b9d-89a9-8bf78d4af1c2/s1200"/><div>
                    {m.followed
                        ?<button onClick={()=>{props.unFollow(m.id)}}>unfollowed</button>
                        :<button onClick={()=>{props.followw(m.id)}}>followed</button>
                    }

                </div>
            </div>
            <div>
                <div className={classes.status}>{m.status}</div>
                <div>{m.fullName}</div>
            </div>
            <div>
                <div>{'m.location.city'}</div>
                <div>{'m.location.country'}</div>
            </div>
        </div>
    });

    return <div> {post}</div>

};
export default UserCC;