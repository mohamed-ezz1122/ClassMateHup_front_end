import Post from "../Post/Post.jsx"
import style from './Home.moduls.css'
import AddPost from '../AddPost/AddPost'
import { navContext } from "../Context/NavContext.jsx"
import { useContext } from "react"


export const Home=()=>{
    const {showModel}=useContext(navContext)

   

    return <>
    <div className="container position-relative">
    <div className="home row ">
    <Post/>
    
    <button className="btn btn-primary justwidth addPost col-2   m-3 mb-5  " onClick={()=>{
        showModel()
    }}>
    <i className="fa-solid fa-plus fs-5 pe-2"></i>
    POST
    </button>
    </div>
    <AddPost/>
    </div>
    
   

   
    
    
    
    </>
    
    
}