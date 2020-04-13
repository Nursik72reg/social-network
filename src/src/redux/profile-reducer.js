const ADD_POST = "addPost";
const UPDATE_NEW_POST_TEXT = "updateNewPostText";


let initialState = {
    pos: [
        {name: "Gergii", text: "Как это сдлетьа?"},
        {name: "Gergii", text: "Как это сдлетьа?"},
        {name: "Gergii", text: "Как это сдлетьа?"},
    ],
    newPostText: "Здарова мужик",

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
    }
    return state;
};





export let addPostsActionCreator = () => {
    return {type: "addPost"}
};

export let onPostChangeActionCreator = (text) => {
    return {type: "updateNewPostText", newText: text};
};

export default profileReducer;