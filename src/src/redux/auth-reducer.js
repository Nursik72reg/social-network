import {Api} from "../Api/Api";
import React from "react";

const AUTH_USER = "authUser";
const TOPIC = "topic";

let initialState = {
    userId : null,
    login:null,
    email:null,
    isAuth:false,
    isTopic:true
};

const authReducer = (state = initialState, action)=>{
        switch (action.type) {
            case AUTH_USER:
                return {
                    ...state,
                    ...action.authUser,
                    isAuth: true
                };
            case TOPIC:{
                return {
                    ...state,
                    isTopic:action.topic
                }
            }
        }
    return state;
};



export const setAuthUser = (userId, login,email)=>{
    return{
        type: AUTH_USER,
        authUser:{userId,login,email}
    }
};

export const switchTopic = (topic)=>{
    return{
        type:TOPIC,
        topic
    }
}



export const authMe = ()=> {
    return (dispatch) => {
        Api.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUser(id, login, email))
                }
            })
    };
}


export default authReducer;