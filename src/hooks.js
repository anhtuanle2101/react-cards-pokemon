import React, {useState} from "react";

const useFlip = (initVal) =>{
    const [state, setState] = useState(initVal);
    const toggleState = ()=>{
        setState(state=>!state);
    }

    return [state, toggleState];
}

export default useFlip;