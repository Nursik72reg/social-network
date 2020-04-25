import React from "react";
import {connect} from "react-redux";
import {
    folowActiveCreate,
    setCurrentActiveCreate, setIsFetcherActiveCreate, setTotalUsersActiveCreate,
    setUsersActiveCreate,
    unfolowActiveCreate
} from "../../redux/user-reducers";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {Api} from "../../Api/Api";

class UsersContainer extends React.Component {
    componentDidMount() {
      Api.getUsers(this.props.currentPage,this.props.pageSize )
            .then(response => {
                this.props.setIsFetcher(false);
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetcher(true);
        Api.getUsers(pageNumber, this.props.pageSize)
       .then(response => {
            this.props.setIsFetcher(false);
            this.props.setTotalUsersCount(response.data.items);
        });
    };

    render() {
        return (<>
                {this.props.isFetcher ? <Preloader/> : null}
                <Users onPageChanged={this.onPageChanged}
                       currentPage={this.props.setCurrentPage}
                       totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       unFollow={this.props.unFollow}
                       followw={this.props.followw}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetcher: state.usersPage.isFetcher
    }
};
export const UserContainer = connect(mapStateToProps,
    {
        followw: folowActiveCreate,
        unFollow:unfolowActiveCreate,
        setUser:setUsersActiveCreate,
        setCurrentPage:setCurrentActiveCreate,
        setTotalUsersCount:setTotalUsersActiveCreate,
        setIsFetcher:setIsFetcherActiveCreate
    })(UsersContainer);