/*export default function ConditionalComponent(){
    let messageOne=<h1>This is message 1</h1>;
    let messageTwo=<h1>This is message 2</h1>;
    let message;
    const display =true;
    if(display){
        message=messageOne;
    }
    else{
        message=messageTwo;
    }
    return(message);
}*/

import Code from "./Code";
import Welcome from "./Welcome";
export default function ConditionalComponent(){
    const display = false;
    if(display){
        return(<Welcome/>)
    }
    else
    {
        return(<Code/>)
    }
}

/*ADVANCED REACT JS
HOOKS
Hooks allows us to "hook" into React features such as state and lifecycle methods. You must import Hooks from react.
Here we are using the useState Hook to keep track of the application state
State generally refers to application data or properties that need to be tracked

3 rules
hooks can be called inside react function
at the top level of a component
cannot be conditional*/