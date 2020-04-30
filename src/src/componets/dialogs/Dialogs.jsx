import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./message/Mesage";
import DialogItem from "./dialogMesseges/DialogItem";



const Dialogs = (props) => {
    let textArea = React.createRef();

    let btnOnClick = ()=>{
        let text = textArea.current.value;
        props.btnAddClick(text)
    };

    let dial = props.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id} url={d.url}/>
    });


    let mes = props.message.map((m) => {
        return <Message value={m.value}/>
    });


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dial}
            </div>
            <div className={classes.messages}>
                {mes}
                <textarea ref={textArea}></textarea>
                <button onClick={btnOnClick} >Ok</button>
            </div>
        </div>
    )

};
export default Dialogs;
