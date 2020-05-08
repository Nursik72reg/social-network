import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED";


let initialState = {
    initialized:false
};

const appReducer = (state = initialState, action)=>{
    switch (action.type) {
        case INITIALIZED_SUCCESS:{
            return{
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};

export const initializedSuccess = () =>{
    return{
        type:INITIALIZED_SUCCESS
    }
};

export const initializeApp = () =>{
    return(dispatch)=>{
        let promise = dispatch(authMe())
        promise.then(()=>{
            dispatch(initializedSuccess() )
        })
    }
};

export default appReducer;