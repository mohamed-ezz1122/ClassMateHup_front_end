import Post from "../Post/Post.jsx"
import  './Home.css'

import { useContext, useEffect, useState } from "react"
import { Fab } from "@mui/material"
// import AddPost from '@mui/icons-material/AddPost'
import AddIcon from '@mui/icons-material/Add';
import { getAllPost, showModelToAddPost } from "../../utils/Post.js"
import { userContext } from "../Context/userContext.jsx"
import { Postcontext } from "../Context/PostContect.jsx"
import Loading from "../Loading/Loading.jsx"
import { navContext } from "../Context/NavContext.jsx";
import axios from "axios";
import { useQueries, useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { Offline, Online } from "react-detect-offline";
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';

export const Home=()=>{
    const {token,isAdmin}=useContext(userContext)
    const {setPost,posts} =useContext(Postcontext)
    const {hideNotiList} =useContext(navContext)
    // const [isAdmin, setIsAdmin] = useState(true)

    //distract data from req
    const getAllPosts=async()=>{
      const {data} = await axios.get('https://note-sigma-black.vercel.app/api/v1/notes/allNotes')
      // console.log(data.notes);
      
      // setPostArra(data.notes)
      return data
    }
    let {isLoading,isError,data,isFetched}= useQuery('allPosts',getAllPosts)
    // console.log(data?.notes);

   useEffect(() => {
    //  getAllPost({token,updater:setPost})
    //  getAllPosts()
    //  hideNotiList()
   }, [])
   

    return <>
    <Helmet>
      <meta name="description" content="All posts" />
      <title>
Home
      </title>
    </Helmet>



    <div className="container position-relative">
    <div className="home row ">
    
   
    {/* <Post/> */}
    
    {
      isLoading?<Loading/>:
       data?.notes.map((post)=>(
        <Post key={post._id} postObj={post}/>
      ))
    }
    
    
    
    {isAdmin?<Fab color="primary" aria-label="add" sx={{position:"fixed",right:0,bottom:0,marginBottom:"30px",marginInline:"30px"}} onClick={()=>{
        showModelToAddPost({token,updater:setPost})
    }} > 
  <AddIcon  />
    </Fab>:""}
    </div>
   
    </div>
    
   

   
    
    
    
    </>
    
    
}