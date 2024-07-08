
import './App.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import { Home } from './components/Home/Home.jsx'
import LogOut from './components/LogOut/LogOut.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import Register from './components/Register/Register.jsx'
import Subjects from './components/Subjects/Subjects.jsx'
import Profile from './components/Profile/Profile.jsx'
import Aboute from './components/Aboute/Aboute.jsx'

import { NavContextProvider, navContext } from './components/Context/NavContext.jsx'
import { UserContextProvider } from './components/Context/userContext.jsx'

import ProtectedRoute from './components/protectedRoute/protectedRoute.jsx'
import { PostcontextProvider } from './components/Context/PostContect.jsx'


import { MainContext, MainContextProvider } from './components/Context/MainContext.jsx'
import Matarilas from './components/Matarilas/Matarilas.jsx'
import SubMatarilas from './components/Sub-Matarilas/SubMatarilas.jsx'
import Specialties from './components/Specialties/Specialties.jsx'
import { SupContext, SupContextProvider } from './components/Context/SupContext.jsx'
import DoctorLogin from './components/LogIn/DoctorLogin.jsx'


function App() {
  // const {mode}=useContext(MainContext)
  // console.log(mode);
 
  
  const routes=createHashRouter([
    {path:"",element:
    <ProtectedRoute>
      <Layout/>

    </ProtectedRoute>
    ,children:[
      {path:'/home',element:<Home/>},
      {index:true,element:<Home/>},
      {path:'/subjects',element:<Subjects/>},
      {path:'/about',element:<Aboute/>},
      {path:'/profile',element:<Profile/>},
      {path:'/subMaterials',element:<SubMatarilas/>},
      {path:'/materials',element:<Matarilas/>},
      {path:'/specialties',element:<Specialties/>},
      ]},
      {path:'/logout',element:<LogIn/>},
      {path:'/logIn',element:<LogIn/>},
      {path:'/logInDr',element:<DoctorLogin/>},
      {path:'/register',element:<Register/>},
     
  ])
  

  

  
  return <MainContextProvider>
   
  <NavContextProvider>
  <UserContextProvider>
  <PostcontextProvider>
    <SupContextProvider>
      <RouterProvider router={routes}></RouterProvider>
      </SupContextProvider>
      </PostcontextProvider>
      </UserContextProvider>
      </NavContextProvider>

      </MainContextProvider>
      
      // 
}

export default App
