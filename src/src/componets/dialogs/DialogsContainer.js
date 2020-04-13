import React from "react";
import {addMessagesActiveCreate} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = (props) => {
    let dialogs = props.store.getState();
    let btnOnClick = (text)=>{
        props.store.dispatch(addMessagesActiveCreate(text))
    };

    return (
       <Dialogs btnAddClick = {btnOnClick}
                dialogs = {dialogs.dialogsPage.dialogs}
                message = {dialogs.dialogsPage.messagess}/>
    )

};*/
let p1 = (state)=>{
  return{
      dialogs:state.dialogsPage.dialogs,
      message:state.dialogsPage.messagess
  }
};
let p2 = (dispatch)=>{
    return{
        btnAddClick:(text)=>{
            dispatch(addMessagesActiveCreate(text));
        }
    }
};

const DialogsContainer = connect(p1,p2)(Dialogs)

export default DialogsContainer;