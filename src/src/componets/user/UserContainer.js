import React from "react";
import {connect} from "react-redux";
import {
    folowActiveCreate,
    setCurrentActiveCreate, setTotalUsersActiveCreate,
    setUsersActiveCreate,
    unfolowActiveCreate
} from "../../redux/user-reducers";
import Users from "./Users";



let mapStateToProps = (state)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUserCount:state.usersPage. totalUserCount,
        currentPage:state.usersPage.currentPage
    }
};
let mapDispatchToProps =(dispatch)=>{
    return{
        followw: (id)=>{
            dispatch(folowActiveCreate(id))
        },
        unFollow: (id)=>{
            dispatch(unfolowActiveCreate(id))
        },
        setUser:(users)=>{
            dispatch(setUsersActiveCreate(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentActiveCreate(pageNumber))
         },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersActiveCreate(totalCount))
        }
    }
};


export const UserContainer = connect( mapStateToProps,mapDispatchToProps)(Users);