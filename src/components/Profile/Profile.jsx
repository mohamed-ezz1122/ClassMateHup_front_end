import React, { useContext, useEffect } from 'react'
import { userContext } from '../Context/userContext.jsx'
import { Postcontext } from '../Context/PostContect.jsx'
import Post from '../Post/Post.jsx'
import { getAllPost } from '../../utils/Post.js'
import Loading from '../Loading/Loading.jsx'


export default function Profile() {

  const {token}=useContext(userContext)

  const {setPost,posts} =useContext(Postcontext)

  useEffect(() => {
    getAllPost({token,updater:setPost})
   
  }, [])
  return <>
  
  
  <h3 className='text-center h2 text-primary border-bottom border-3 border-primary mb-3'>Your Posts</h3>

<div className="home row ">
    
    {/* <Post/> */}
    
    {
      posts === null ? <Loading/> : posts.length === 0 ? <h3 className="text-center text-primary">no posts yet</h3>: posts.map((post)=>(
        <Post key={post._id} postObj={post}/>
      ))
    }
    </div>
    
  
  
  </>
}
