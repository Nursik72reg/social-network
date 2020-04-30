import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profilePage} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.profilePage(userId)
    }
    render() {
        return (
            <>
            <Profile {...this.props} profileInfo = {this.props.profileInform}/>
            </>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        profileInform : state.profilePage.profileInfo,
    }
};

export default compose(
    connect(mapStateToProps,{
        profilePage
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);

/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export const ProfileContainers = connect(mapStateToProps,{
        profilePage
    }
    )(withUrlDataContainerComponent);*/
