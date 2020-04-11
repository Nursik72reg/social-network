let initialState = {
    pos: [
            {name: "Gergii", text: "Как это сдлетьа?"},
            {name: "Gergii", text: "Как это сдлетьа?"},
            {name: "Gergii", text: "Как это сдлетьа?"},
        ],
        newPostText: "Здарова мужик",

};

const profileReducer = (state = initialState, active) =>{

    if (active.type === "addPost") {
        let newPost = {
            name: "***",
            text: state.newPostText
        };
        state.pos.push(newPost);
        state.newPostText = "";
    } else if (active.type === "updateNewPostText") {
        state.newPostText = active.newText;
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