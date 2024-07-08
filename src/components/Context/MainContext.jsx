import { createContext, useState } from "react";


export const MainContext=createContext()

export const MainContextProvider=({children})=>{
    const [mode, setMode] = useState("light")
    const [error, seterror] = useState(null)
    function repaceMode(){
      if(mode=='light'){
        setMode("dark")
        console.log(mode);
      }else{
        setMode("light")
        console.log(mode);
      }
    }

return <MainContext.Provider value={{mode,setMode,repaceMode,error, seterror}}>

{children}


</MainContext.Provider>


}
