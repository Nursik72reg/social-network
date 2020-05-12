import React from "react";
import {connect} from "react-redux";
import {
    followThunk,
    getPageUserThunk,
    getUserThunk,  unFollowThunk,

} from "../../redux/user-reducers";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import PreloaderTwo from "../common/PreloaderTwo";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUserThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
    this.props.getPageUserThunk(pageNumber, this.props.pageSize)
    };

    render() {
        return (<>
                {this.props.isFetcher ? <PreloaderTwo/> : null}
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

let AuthRedirectComponent = withAuthRedirect(UsersContainer);
export const UserContainer = connect(mapStateToProps,
    {
        getUserThunk,
        getPageUserThunk,
        unFollowThunk,
        followThunk
    })( AuthRedirectComponent);