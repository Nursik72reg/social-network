
const dialogsReducer = (state, active) =>{
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