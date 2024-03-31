import { createContext, useState } from "react";


export const navContext=createContext()

export const NavContextProvider=({children})=>{

    const [mode, setMode] = useState("light")
    const [isOpen,setIsOpen]=useState(false)
    // const [isHidden,setIsHidden]=useState

    const  darkMode = ()=>{
      // console.log('mode');
      if(mode=="light"){
        console.log(mode);
        setMode("darck")
        // localStorage.setItem("mode",mode)
        // console.log(document.querySelectorAll("li"));
        
  
        document.querySelector('nav').classList.replace("bg-body-tertiary","bg-dark")
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        document.querySelector(".inner-notifcation").classList.replace("bg-primary","bg-dark")
        document.querySelector(".add-post").classList.replace("bg-primary","bg-dark")
        // console.log(document.querySelector(".inner-notifcation"));
        const allLi= document.querySelectorAll(".nav-link")
        for(let i=0; i < allLi.length;i++){
          // console.log();
          allLi[i].classList.replace("text-primary","text-white")
        }
        
      }
      if(mode=="darck"){
        console.log(mode);
        setMode("light")
       
        document.querySelector('nav').classList.replace("bg-dark","bg-body-tertiary")
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
        document.querySelector(".inner-notifcation").classList.replace("bg-dark","bg-primary")
        document.querySelector(".add-post").classList.replace("bg-dark","bg-primary")

  
  
        const allLi= document.querySelectorAll(".nav-link")
        for(let i=0; i < allLi.length;i++){
          
          allLi[i].classList.replace("text-white","text-primary")
        }
        
      }
     
      
    }

    const hideNotiList=()=>{
      if(isOpen){
        setIsOpen(false)
        document.querySelector(".inner-notifcation").classList.replace("d-flex","d-none")
      }else if(!isOpen){
        setIsOpen(true)
        document.querySelector(".inner-notifcation").classList.replace("d-none","d-flex")
      }
      
    }

    function showModel(){
      
      document.querySelector(".add-post").classList.replace("d-none","d-flex")
      document.body.style.overflow="hidden"
  }
  const hideModel=()=>{
    document.querySelector(".add-post").classList.replace("d-flex","d-none")
    document.body.style.overflow="auto"
    // console.log(e);

  }

return <navContext.Provider value={{mode,setMode,darkMode,hideNotiList,showModel,hideModel}}>

{children}


</navContext.Provider>


}
