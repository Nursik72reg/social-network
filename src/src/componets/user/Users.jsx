import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import photos from "../../img/person__img.png"

class Users extends React.Component {
    componentDidMount (){
        if(this.props.users.length === 0) {
            alert("ad");
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUser(response.data.items);
                   this.props.setTotalUsersCount(response.data.totalCount)
                });
        }
    }



    onPageChanged  = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
        });



    };

    render() {
        let pageCount = Math.ceil(this.props.totalUserCount/this.props.pageSize);
        let pages =[];
        for (let i=1; i<=pageCount;i++){
            pages.push(i)
        }
        return (
            <div>
               <div>
                {pages.map(m=>{
                    return <span className={this.props.currentPage === m && classes.select}
                                 onClick={()=>{this.onPageChanged(m)}}>{m}</span>
                })}
               </div>
                {this.props.users.map(m => <div className={classes.container}>
                    <div>
                        <img className={classes.img}
                             src={m.photos.small !=null ? m.photos.small : photos}/>
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
                        <div>{m.name}</div>
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