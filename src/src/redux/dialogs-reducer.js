let initialState = {
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
    ]
};
const dialogsReducer = (state = initialState, active) =>{
    if (active.type === "addMessages") {
        let newText = {
            value: active.text
        };
        state.messagess.push(newText);
    }

    return state;
};
export let  addMessagesActiveCreate = (text)=>{
    return{type:"addMessages", text:text}
};
export default dialogsReducer