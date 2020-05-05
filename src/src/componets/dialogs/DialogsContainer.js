import React from "react";
import {addMessagesActiveCreate} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state)=>{
  return{
      dialogs:state.dialogsPage.dialogs,
      message:state.dialogsPage.messagess,
  }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        btnAddClick:(text)=>{
            dispatch(addMessagesActiveCreate(text));
        }
    }
};

export default  compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);


