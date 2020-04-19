import React from "react";
import {connect} from "react-redux";
import {
    folowActiveCreate,
    setCurrentActiveCreate, setIsFetcherActiveCreate, setTotalUsersActiveCreate,
    setUsersActiveCreate,
    unfolowActiveCreate
} from "../../redux/user-reducers";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader";



class UsersContainer extends React.Component {
    componentDidMount() {
            this.props.setIsFetcher(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsFetcher(false);
                    this.props.setUser(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)
                });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetcher(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetcher(false);
            this.props.setUser(response.data.items);
        });
    };
    render() {
        return(<>
                { this.props.isFetcher ? <Preloader/> : null}
            <Users onPageChanged = {this.onPageChanged}
                   currentPage = {this.props.currentPage}
                   totalUserCount = {this.props.totalUserCount}
                   pageSize = {this.props.pageSize}
                   users = {this.props.users}
                   unFollow = {this.props.unFollow}
                   followw = {this.props.followw}/>
                  </>
        )
    }
}




let mapStateToProps = (state)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUserCount:state.usersPage. totalUserCount,
        currentPage:state.usersPage.currentPage,
        isFetcher:state.usersPage.isFetcher
    }
};
/*let mapDispatchToProps =(dispatch)=>{
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
        },
        setIsFetcher(fetch){
            dispatch(setIsFetcherActiveCreate(fetch))
        }
    }
};*/


export const UserContainer = connect( mapStateToProps,
    {
        followw: folowActiveCreate,
        unFollow:unfolowActiveCreate,
        setUser:setUsersActiveCreate,
        setCurrentPage:setCurrentActiveCreate,
        setTotalUsersCount:setTotalUsersActiveCreate,
        setIsFetcher:setIsFetcherActiveCreate
    })(UsersContainer);