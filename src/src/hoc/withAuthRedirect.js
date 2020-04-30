import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuths) return <Redirect to = "/login"/>
            return <Component {...this.props}/>
        }
    }

    const mapStateToPropsParam = (state) =>{
        return{
            isAuths: state.authUser.isAuth
        }
    };

    let isParamConnect = connect(mapStateToPropsParam)(RedirectComponent);
    return  isParamConnect

};


