import { useContext } from "react"

import { Navigate } from "react-router-dom"
import {  userContext } from "../Context/userContext.jsx"

export default function ProtectedRoute({children}) {
  const {token} = useContext(userContext)
if(token){
  console.log(token);
   return children
}

return <Navigate to='/login'/>


}