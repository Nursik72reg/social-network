import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, setAuthUser, switchTopic} from "../../redux/auth-reducer";
class HeadersContainer extends React.Component{
    componentDidMount() {
        this.props.authMe();
    }
    render() {
        return(
            <Header login = {this.props.login} isAuth = {this.props.isAuth} isTopic = {this.props.isTopic}
                    switchTopic = {this.props.switchTopic}/>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        login: state.authUser.login,
        isAuth: state.authUser.isAuth,
        isTopic: state.authUser.isTopic
    }
};
export const HeaderContainer = connect(mapStateToProps, {authMe,switchTopic})(HeadersContainer);