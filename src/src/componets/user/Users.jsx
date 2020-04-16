import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);
       if(this.props.users.length === 0) {
           alert("dasd")
           axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
               this.props.setUser(response.data.items);
           });
       }

    }


    render() {
        return (
        <div>
            {this.props.users.map(m => <div className={classes.container}>
                <div>
                    <img className={classes.img}
                         src="https://avatars.mds.yandex.net/get-pdb/1679978/b5d88035-d527-4b9d-89a9-8bf78d4af1c2/s1200"/>
                    <div>
                        {m.followed
                            ? <button onClick={() => {
                                this.props.unFollow(m.id)
                            }}>unfollowed</button>
                            : <button onClick={() => {
                                this.props.followw(m.id)
                            }}>followed</button>
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
            </div>)}
        </div>
        )
    }
}


export default Users;