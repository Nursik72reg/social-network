import React from "react";
import {connect} from "react-redux";
import {folowActiveCreate, setUsersActiveCreate, unfolowActiveCreate} from "../../redux/user-reducers";
import Users from "./Users";



let p1 = (state)=>{
    return{
        users:state.usersPage.users
    }
};
let p2 =(dispatch)=>{
    return{
        followw: (id)=>{
            dispatch(folowActiveCreate(id))
        },
        unFollow: (id)=>{
            dispatch(unfolowActiveCreate(id))
        },
        setUser:(user)=>{
            dispatch(setUsersActiveCreate(user))
        }
    }
};


export const UserContainer = connect(p1,p2)(Users);