import axios from "axios";
import { createContext } from "react";


export const userContext=createContext()


export const UserContextProvider=({children})=>{

async function sendDataToSigin(values){
    console.log(values);
const res = await axios.post('http://localhost:5000/user/',values)
console.log(res);

}


    return <userContext.Provider value={{sendDataToSigin}}>

{children}


    </userContext.Provider>
}

