import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {

    _options: {
        profilePage:{
            pos: [
                {name: "Gergii", text: "Как это сдлетьа?"},
                {name: "Gergii", text: "Как это сдлетьа?"},
                {name: "Gergii", text: "Как это сдлетьа?"},
            ],
            newPostText: "Здарова мужик",
        },
        dialogsPage:{
            dialogs: [
                {name: "Dimych", id: 1},
                {name: "Lena", id: 2},
                {name: "Pavel", id: 3},
                {name: "Vickor", id: 4},
            ],
            newMessagesText: "",
            messagess: [
                {value: "Hello"},
                {value: "Hello"},
                {value: "Hello"},
            ],
        },
        sidebar:{},




    },
    getOptions() {
        return this._options;
    },
    renderDrow() {
        console.log("d")
    },
    subscribe(observer) {
        this.renderDrow = observer;
    },


    dispatch(active) {
        this._options.profilePage = profileReducer(this._options.profilePage, active);
        this._options.dialogsPage = dialogsReducer(this._options.dialogsPage, active)
        this.renderDrow(this._options);

       /* if (active.type === "addPost") {

            let newPost = {
                name: "***",
                text: this._options.profilePage.newPostText
            };

            this._options.profilePage.pos.push(newPost);
            this._options.profilePage.newPostText = "";
            this.renderDrow(this._options);
        } else if (active.type === "updateNewPostText") {
            this._options.profilePage.newPostText = active.newText;

            this.renderDrow(this._options);
            debugger;
        } else if (active.type === "addMessages") {

            let newText = {
                value: active.text
            };
            this._options.dialogsPage.messagess.push(newText);
            this.renderDrow(this._options)

        }*/
    }

};
/*
export let addPostsActionCreator = () => {
    return {type: "addPost"}
};

export let onPostChangeActionCreator = (text) => {
    return {type: "updateNewPostText", newText: text};
};

export let  addMessagesActiveCreate = (text)=>{
    return{type:"addMessages", text:text}
};*/



export default store;
window.store = store;