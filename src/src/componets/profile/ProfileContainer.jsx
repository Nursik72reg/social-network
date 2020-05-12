import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileStatus, profilePage, putProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userID
        }
        this.props.profilePage(userId);
        this.props.getProfileStatus(userId)

    }

    render() {
        return (
            <>
                <Profile {...this.props} profileInfo={this.props.profileInform} status={this.props.status}
                         putProfileStatus={this.props.putProfileStatus}/>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profileInform: state.profilePage.profileInfo,
        status: state.profilePage.status,
        userID: state.authUser.userId
    }
};

export default compose(
    connect(mapStateToProps, {
        profilePage,
        getProfileStatus,
        putProfileStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


