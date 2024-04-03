import axios from "axios";
import { createContext, useState } from "react";


export const userContext=createContext()


export const UserContextProvider=({children})=>{

async function sendDataToSigin(values){
    console.log(values);
const res = await axios.post('http://localhost:5000/user/',values)
console.log(res);

}
const [isComment, setIsComment] = useState(false)
function showComment(){

   if(!isComment){
    // setIsComment(true)
        document.querySelector('#comment').classList.add("py-4")
   }

    
}


    return <userContext.Provider value={{sendDataToSigin,showComment}}>

{children}


    </userContext.Provider>
}

