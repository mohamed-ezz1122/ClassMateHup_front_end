import { createContext, useState } from "react";


export const navContext=createContext()

export const NavContextProvider=({children})=>{
    const [mode, setMode] = useState("light")
    const [isOpen,setIsOpen]=useState(true)
    // const [isHidden,setIsHidden]=useState

    

    const hideNotiList=()=>{
      // console.log("✔✔");
      if(isOpen){
        
        setIsOpen(false)
        document.querySelector(".inner-notifcation").classList.add("d-none")

      }else if(!isOpen){
        setIsOpen(true)
        document.querySelector(".inner-notifcation").classList.remove("d-none")
      }
      
    }

  
///acount drower
const [state, setState] = useState({ right: false});

const toggleDrawer = (anchor, open) => (event) => {
  console.log("drawer");
  if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

return <navContext.Provider value={{mode,setMode,hideNotiList,toggleDrawer,state}}>

{children}


</navContext.Provider>


}
