import Post from "../Post/Post.jsx"
import style from './Home.moduls.css'
import AddPost from '../AddPost/AddPost'
import { navContext } from "../Context/NavContext.jsx"
import { useContext } from "react"
import { Fab } from "@mui/material"
// import AddPost from '@mui/icons-material/AddPost'
import AddIcon from '@mui/icons-material/Add';
export const Home=()=>{
    const {showModel}=useContext(navContext)

   

    return <>
    <div className="container position-relative">
    <div className="home row ">
    <Post/>
    
    
    <Fab color="primary" aria-label="add" className=" justwidth addPost col-2 position-absolute      " onClick={()=>{
        showModel()
    }}> 
  <AddIcon  />
</Fab>
    </div>
    <AddPost/>
    </div>
    
   

   
    
    
    
    </>
    
    
}