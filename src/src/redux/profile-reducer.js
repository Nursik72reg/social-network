import {Api} from "../Api/Api";

const ADD_POST = "addPost";
const UPDATE_NEW_POST_TEXT = "updateNewPostText";
const PROFILE_INFO = "profileInfo";


let initialState = {
    pos: [
        {name: "Gergii", text: "Как это сдлетьа?"},
        {name: "Gergii", text: "Как это сдлетьа?"},
        {name: "Gergii", text: "Как это сдлетьа?"},
    ],
    newPostText: "Здарова мужик",
    profileInfo : null

};

const profileReducer = (state = initialState, active) => {
    let copState;

    switch (active.type) {
        case ADD_POST:
            copState = {...state};
            let newPost = {
                name: "***",
                text: copState.newPostText
            };
            copState.pos = [...state.pos, newPost];
            copState.newPostText = "";
            return copState;
        case UPDATE_NEW_POST_TEXT:
            copState = {...state};
            copState.newPostText = active.newText;
            return copState

        case PROFILE_INFO:{
            return {
                ...state,
                profileInfo: active.profile
            }
        }
    }
    return state;
};


export let addPostsActionCreator = () => {
    return {type: ADD_POST}
};

export let onPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT , newText: text};
};
export let setProfileInfo = (profile) =>{
    return{
        type: PROFILE_INFO,
        profile
    }
};

export const profilePage = (userId) =>{
    return (dispatch) =>{
        Api.profilePage(userId)
            .then(response=>{
                dispatch(setProfileInfo(response.data))
            })
    }

}

export default profileReducer;