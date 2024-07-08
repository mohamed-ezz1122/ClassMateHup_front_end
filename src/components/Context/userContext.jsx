
import axios from "axios";
import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const userContext=createContext()


export const UserContextProvider=({children})=>{
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(true)
async function getDataToRegister(values) {


    const { data } = await axios.post(
      "http://127.0.0.1:8080/student/signup",
      values
    );
   
    return data
  
  }
  async function signInMethod(values) {
    const { data } = await axios.post(
      "http://localhost:8080/student/signin",
      values
    );
   
    return data
  
    
  }

  function ConfirmTheSlit(){





    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Log Out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "Logout Success",
          icon: "success"
        });
        logOut()
      }
    });
  }

  function logOut(){
    // console.log("log out");
    // localStorage.removeItem("token")
    
    setToken(null)
  }
const [isComment, setIsComment] = useState(false)
function showComment(){

   if(!isComment){
    // setIsComment(true)
        document.querySelector('#comment').classList.add("py-4")
   }

    
}


    return <userContext.Provider value={{getDataToRegister,showComment,signInMethod,token,user, setUser, setToken,logOut,ConfirmTheSlit,isAdmin,setIsAdmin}}>

{children}


    </userContext.Provider>
}

