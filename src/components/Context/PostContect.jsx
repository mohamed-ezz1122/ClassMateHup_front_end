import { createContext, useReducer, useState } from "react";



export const Postcontext=createContext({})

export const PostcontextProvider=({children})=>{
const [posts, setPost] = useState(null)
    


    return <Postcontext.Provider value={{setPost,posts}}>

        {children}
    </Postcontext.Provider>

}
