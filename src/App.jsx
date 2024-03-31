
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
import { SidebarContextProvider } from './components/Context/sidebarContext.jsx'

import { NavContextProvider } from './components/Context/NavContext.jsx'
import { UserContextProvider } from './components/Context/userContext.jsx'

function App() {
  
  const routes=createHashRouter([
    {path:"",element:<Layout/>,children:[
      {path:'/home',element:<Home/>},
      {index:true,element:<Home/>},
      {path:'/subjects',element:<Subjects/>},
      {path:'/about',element:<Aboute/>},
      {path:'/profile',element:<Profile/>},
      ]},
      {path:'/logout',element:<LogOut/>},
      {path:'/logIn',element:<LogIn/>},
      {path:'/register',element:<Register/>},
     
  ])
  

  
  return <NavContextProvider>
  <UserContextProvider>
  <SidebarContextProvider>
      <RouterProvider router={routes}></RouterProvider>
      </SidebarContextProvider>
      </UserContextProvider>
      </NavContextProvider>
    
}

export default App
