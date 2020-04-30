import {Api} from "../Api/Api";

const AUTH_USER = "authUser";


let initialState = {
    userId : null,
    login:null,
    email:null,
    isAuth:false
};

const authReducer = (state = initialState, action)=>{
        switch (action.type) {

            case AUTH_USER:
                return {
                    ...state,
                    ...action.authUser,
                    isAuth: true
                };

        }
    return state;
};



export const setAuthUser = (userId, login,email)=>{
    return{
        type: AUTH_USER,
        authUser:{userId,login,email}
    }
};


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