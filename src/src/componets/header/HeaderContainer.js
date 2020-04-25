import React from "react";
import Header from "./Header";
import * as axios from  "axios";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/auth-reducer";
import {Api} from "../../Api/Api";
class HeadersContainer extends React.Component{
    componentDidMount() {
       Api.authMe()
            .then(response=>{
                if(response.data.resultCode===0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUser(id, login, email)
                }
            })
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUser})(HeadersContainer);