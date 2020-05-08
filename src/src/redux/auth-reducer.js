import {Api} from "../Api/Api";
import React from "react";
import {stopSubmit} from "redux-form";


const AUTH_USER = "authUser";
const TOPIC = "topic";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isTopic: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                ...action.authUser
            };
        case TOPIC: {
            return {
                ...state,
                isTopic: action.topic
            }
        }
    }
    return state;
};

export const setAuthUser = (userId, login, email, isAuth) => {
    return {
        type: AUTH_USER,
        authUser: {userId, login, email, isAuth}
    }
};

export const switchTopic = (topic) => {
    return {
        type: TOPIC,
        topic
    }
};


export const authMe = () => {
    return (dispatch) => {
        return Api.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUser(id, login, email, true))
                }
            })
    };
};
export const postAuthLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        Api.postAuthLogin(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authMe())
                } else {
                    let message = response.data.length = 1 ? response.data.messages[0] : "Some error";
                    dispatch(stopSubmit("Login", {_error: message}));
                }
            })
    }
};
export const deleteAuthLogin = () => {
    return (dispatch) => {
        Api.deletAuthLogin()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUser(null, null, null, false))
                }
            })
    }
};


export default authReducer;