

let store = {

    _state: {
        profilePage:{},
        dialogsPage:{},
        sidebar:{},
        dialogs: [
            {name: "Dimych", id: 1},
            {name: "Lena", id: 2},
            {name: "Pavel", id: 3},
            {name: "Vickor", id: 4},
        ],
        newPostText: "Здарова мужик",
        newMessagesText: "",
        messagess: [
            {value: "Hello"},
            {value: "Hello"},
            {value: "Hello"},
        ],
        pos: [
            {name: "Gergii", text: "Как это сдлетьа?"},
            {name: "Gergii", text: "Как это сдлетьа?"},
            {name: "Gergii", text: "Как это сдлетьа?"},
        ]
    },
    getOptions() {
        return this._state;
    },
    renderDrow() {
        console.log("d")
    },
    subscribe(observer) {
        this.renderDrow = observer;
    },


    dispatch(active) {
        debugger;
        if (active.type === "addPost") {
            debugger;
            let newPost = {
                name: "***",
                text: this._state.newPostText
            };

            this._state.pos.push(newPost);
            this._state.newPostText = "";
            this.renderDrow(this._state);
        } else if (active.type === "updateNewPostText") {
            this._state.newPostText = active.newText;
            this.renderDrow(this._state)
        } else if (active.type === "addMessages") {

            let newText = {
                value: active.text
            };
            this._state.messagess.push(newText);
            this.renderDrow(this._state)

        }
    }

};

export let addPostsActionCreator = () => {
    return {type: "addPost"}
};

export let onPostChangeActionCreator = (text) => {
    return {type: "updateNewPostText", newText: text};
};

export let  addMessagesActiveCreate = (text)=>{
    return{type:"addMessages", text:text}
};



export default store;
window.store = store;