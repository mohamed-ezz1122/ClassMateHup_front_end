import { createContext, useState } from "react";


export const SupContext=createContext()

export  const SupContextProvider=({children})=>{
  async function getDataFromDc() {


    const { data } = await axios.get(
      "http://localhost:8080/doctor/subject/doctor@example.com"
    );
   
    return data
  
  }

return <SupContext.Provider value={{getDataFromDc}}>

{children}


</SupContext.Provider>


}
