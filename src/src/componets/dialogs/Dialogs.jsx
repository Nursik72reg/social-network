import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./message/Mesage";
import DialogItem from "./dialogMesseges/DialogItem";
import {Field, Form, reduxForm} from "redux-form";
import Textarea from "../common/FormContols";
import {maxLenght, required} from "../../utils/validators/validators";
let maxLenght30 = maxLenght(30);
const Dialogs = (props) => {

    let dial = props.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id} url={d.url}/>
    });

    let mes = props.message.map((m) => {
        return <Message value={m.value}/>
    });

    let onSubmit = (dataValue) => {
        props.btnAddClick(dataValue.Messages);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dial}
            </div>
            <div className={classes.messages}>
                {mes}
                <DialogInput onSubmit = {onSubmit}/>
            </div>
        </div>
    )

};

let DialogsInput = (props)=>{
    return(
        <Form onSubmit={props.handleSubmit}>
            <Field name="Messages" component={Textarea} placeholder={"Напиши сообщение"}
            validate={[required, maxLenght30]}/>
            <button>Ok</button>
        </Form>
    )
};
let DialogInput =  reduxForm({
    form:"Mesages"
})(DialogsInput);
export default Dialogs;
