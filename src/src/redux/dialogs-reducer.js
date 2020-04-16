const ADD_MESSAGES = "addMessages";


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
const dialogsReducer = (state = initialState, active) => {
    let copState;

    switch (active.type) {
        case ADD_MESSAGES:
        let newMessages = {
            value:active.text
        };
        copState = {...state};
        copState.messagess = [...state.messagess, newMessages];
        return copState;

     /* return {
          ...state,
          messagess: [...state.messagess,{value: active.text}]
      }*/
}
    return state;
};
export let addMessagesActiveCreate = (text) => {
    return {type: ADD_MESSAGES, text: text}
};
export default dialogsReducer