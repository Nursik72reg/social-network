import React from "react";
import {connect} from "react-redux";
import {
    followThunk,
    getPageUserThunk,
    getUserThunk,  unFollowThunk,

} from "../../redux/user-reducers";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
     this.props.getUserThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
    this.props. getPageUserThunk(pageNumber, this.props.pageSize)
    };

    render() {
        return (<>
                {this.props.isFetcher ? <Preloader/> : null}
                <Users onPageChanged={this.onPageChanged}
                       currentPage={this.props.currentPage}
                       totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       unFollow={this.props.unFollowThunk}
                       followw={this.props.followThunk}
                       isDisable={this.props.isDisableBtn}
                />
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
        isFetcher: state.usersPage.isFetcher,
        isDisableBtn:state.usersPage.isDisable
    }
};
export const UserContainer = connect(mapStateToProps,
    {
        getUserThunk,
        getPageUserThunk,
        unFollowThunk,
        followThunk
    })(UsersContainer);