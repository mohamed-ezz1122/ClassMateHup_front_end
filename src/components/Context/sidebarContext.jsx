import { createContext, useReducer } from "react";
import propTypes from "prop-types"
import sidebarReducer from "../Reducer/SidebarReducer.js";

const initiolValus={
    isSidebarOpen:false
}


export const sidebarContext=createContext({})

export const SidebarContextProvider=({children})=>{

    const [state,dispatch]=useReducer(sidebarReducer,initiolValus)

    const toggleSidebar=()=>{
        dispatch({
            type:"TOGGLE_SIDEBAR"
        })
    }


    return <sidebarContext.Provider value={{...state,toggleSidebar}}>

        {children}
    </sidebarContext.Provider>

}
SidebarContextProvider.propTypes={
    children:propTypes.node
}