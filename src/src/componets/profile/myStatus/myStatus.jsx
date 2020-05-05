import React from "react";

class MyStatus extends React.Component {
    state = ({
        editMode: false,
    });
    activeEditMode = ()=>{
        this.setState({
            editMode:true,
            status:this.props.status
        })
    };
    deactiveEditMode = ()=>{
        this.setState({
            editMode:false
        });
        this.props.putProfileStatus(this.state.status)
    };

    onChangeStatus = (e) =>{
        this.setState({
            status:e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div onClick = {this.activeEditMode}>
                        <span>{this.props.status || "---"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div onBlur={this.deactiveEditMode}>
                        <input onChange={this.onChangeStatus}  autoFocus = {true} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}


export default MyStatus