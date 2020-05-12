import {Api} from "../Api/Api";
const ADD_POST = "addPost";
const UPDATE_NEW_POST_TEXT = "updateNewPostText";
const PROFILE_INFO = "profileInfo";
const GET_STATUS = "getStatus";

let initialState = {
    pos: [
        {name: "Gergii", text: "Как это сдлетьа?"},
        {name: "Gergii", text: "Как это сдлетьа?"},
        {name: "Gergii", text: "Как это сдлетьа?"},
    ],
    profileInfo: null,
    status: "",

};

const profileReducer = (state = initialState, action) => {
    let copState;

    switch (action.type) {
        case ADD_POST:{
            let body = {name:"Sveta", text :action.value};
            return {
                ...state,
                pos:[...state.pos,body],

            }
        }

        case UPDATE_NEW_POST_TEXT:
            copState = {...state};
            copState.newPostText = action.newText;
            return copState;

        case PROFILE_INFO: {
            return {
                ...state,
                profileInfo: action.profile
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
    }
    return state;
};

export const profilePage = (userId) => {
    return (dispatch) => {
        Api.profilePage(userId)
            .then(response => {
                dispatch(setProfileInfo(response.data))
            })
    }
};
export const getProfileStatus = (id) => {
    return (dispatch) => {
        Api.getProfileStatus(id)
            .then(response => {
                dispatch(getStatus(response.data))
            })
    }
};

export const putProfileStatus = (status) => {
    return (dispatch) => {
        Api.putProfileStatus(status)
            .then(response => {
                    dispatch(getStatus(status))

            })
    }

};

export let addPostsActionCreator = (value) => {
    return {type: ADD_POST, value}
};
export let onPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text};
};
export let setProfileInfo = (profile) => {
    return {type: PROFILE_INFO, profile}
};
export let getStatus = (status) => {
    return {type: GET_STATUS, status}
};



export default profileReducer;