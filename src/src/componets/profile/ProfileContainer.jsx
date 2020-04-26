import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profilePage} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10;
        }
        this.props.profilePage(userId)
    }

    render() {
        return (
            <Profile {...this.props} profileInfo = {this.props.profileInform}/>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        profileInform : state.profilePage.profileInfo
    }
};
let withUrlDataContainerComponent = withRouter(ProfileContainer);

export const ProfileContainers = connect(mapStateToProps,{
        profilePage
    }
    )(withUrlDataContainerComponent);