import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, setAuthUser} from "../../redux/auth-reducer";
class HeadersContainer extends React.Component{
    componentDidMount() {
        this.props.authMe();
    }
    render() {
        return(
            <Header login = {this.props.login} isAuth = {this.props.isAuth}/>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        login: state.authUser.login,
        isAuth: state.authUser.isAuth

    }
};
export const HeaderContainer = connect(mapStateToProps, {authMe})(HeadersContainer);