import React from "react";
import {addMessagesActiveCreate} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessage} from "../../redux/selectors/dialog-selectors";

let mapStateToProps = (state)=>{
  return{
      dialogs:getDialogs(state),
      message:getMessage(state),
  }
};

export default  compose(
    connect(mapStateToProps,{addMessagesActiveCreate}),
    withAuthRedirect
)(Dialogs);


