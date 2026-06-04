import React from 'react';
class StateComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:"WELCOME TO WEB LAB"
        }
    }
    render(){
        return <h1>{this.state.msg}</h1>
    }
}
export default StateComp;