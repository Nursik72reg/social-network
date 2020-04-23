import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger
                this.props.setProfile(response.data);
            });

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
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileContainers = connect(mapStateToProps,{
        setProfile:setProfileInfo
    }
    )(withUrlDataContainerComponent);