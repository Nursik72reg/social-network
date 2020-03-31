import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.item}><NavLink to={"/dialogs/" + props.id} className={classes.a}>{props.name}</NavLink>
        </div>
    )
};


const Message = (props)=>{
    return <div className={classes.message}>{props.value}</div>
}

const Dialogs = () => {

    let dialogs = [
        {name:"Dimych",id:1},
        {name:"Lena",id:2},
        {name:"Pavel",id:3},
        {name:"Vickor",id:4},
    ];

   let dial = dialogs.map((d)=>{
       return <DialogItem name = {d.name} id = {d.id}/>
   });


    let messagess = [
        {value:"Hello"},
        {value:"Hello"},
        {value:"Hello"},
    ];
    let mes = messagess.map((m)=>{
        return <Message value={m.value}/>});
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dial}
            </div>

            <div className={classes.messages}>
                {mes}

            </div>
        </div>
    )

}
export default Dialogs;
