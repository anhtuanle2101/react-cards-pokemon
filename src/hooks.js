import Axios from "axios";
import React, {useState} from "react";
import axios from "axios";
import uuid from "uuid";

const useFlip = (initVal) =>{
    const [state, setState] = useState(initVal);
    const toggleState = ()=>{
        setState(state=>!state);
    }

    return [state, toggleState];
}

const useAxios = (url) =>{
    const [state, setState] = useState([]);
    const addItem = async ()=>{
        const res = await axios.get(url);
        setState(state => [...state, { ...res.data, id: uuid() }]);
    }

    return [state, addItem];
}

const useAxios2 = (baseUrl) =>{
    const [state, setState] = useState([]);
    const addItem = async (end = "") =>{
        console.log(end);
        const res = await axios.get(`${baseUrl}/${end}`);
        setState(state =>[ ...state, {...res.data, id:uuid()}]);
    }

    return [state, addItem];
}

export {useFlip, useAxios, useAxios2};