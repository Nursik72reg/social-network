import React from "react";

class MyStatus extends React.Component {
    state = ({
        editMode: false,
        status:"Изменить статус"
    });
    activeEditMode = ()=>{
        this.setState({
            editMode:true
        })
    };
    deactiveEditMode = ()=>{
        this.setState({
            editMode:false
        })
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div onClick = {this.activeEditMode}>
                        <span>{this.state.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div onBlur={this.deactiveEditMode}>
                        <input autoFocus = {true} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}


export default MyStatus