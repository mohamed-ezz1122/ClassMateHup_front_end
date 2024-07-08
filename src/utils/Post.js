//show model to add post

import axios from "axios";
import Swal from "sweetalert2";



export function showModelToAddPost({token,updater}){
  Swal.fire({
    title: "Add post ",
   html:`

   <input name:"subjectName" id="subjectName" type="text" class="form-control mb-2" placeholder="enter subject Name"/>
   <input name:"title" id="title" type="text" class="form-control mb-2" placeholder="enter title"/>
   <textarea name:"content" id="content" type="email" class="form-control mb-2" placeholder="enter content"></textarea>
   <div class="input-group">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
  
</div>
   `,
    showCancelButton: true,
    confirmButtonText: "Add",
    showLoaderOnConfirm: true,
    preConfirm:  () => {
      const title= document.getElementById("title").value
      const content= document.getElementById("content").value
      const subjectName= document.getElementById("subjectName").value
      const file= document.getElementById("inputGroupFile04").value

      return {title,content,subjectName,file}
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    console.log(result.value);//{title,content,subjectName,file}
    sendDataToAddPost({title:result.value.title,content:result.value.content,subjectName:result.value.subjectName,file:result.value.file,token,updater})
  });
    }


    ////////////CLING API

    async function sendDataToAddPost({title,content,token,updater}){
      const {data} = await axios.post(`https://note-sigma-black.vercel.app/api/v1/notes`,{title,content,subjectName,file},{
        headers:{token}
      })
      // console.log(data);
      if(data.msg === "done"){
        // console.log("✔");                
        getAllPost({token,updater})
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Post has been Added",
          showConfirmButton: false,
          timer: 1500
        }); 
      }
    }

    //=====>get all post 

   export async function getAllPost({token,updater}){
    try {
      const {data} = await axios.get('https://note-sigma-black.vercel.app/api/v1/notes',{headers:{
      token
    }})
    // console.log(data,'ss');
    updater(data.notes)

    } catch (error) {
      updater([])
    }
    
    }


    //================delete post ===>


    export const showModelToDelete=({postId,token,updater})=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       //==send data to delete caling

       sendDataToDelete({postId,token,updater})


         
        }
      });
    }



           //==send data to delete function

           async function sendDataToDelete({postId,token,updater}){
           const {data}= await axios.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${postId}`,{headers:{
            token
           }})
          //  console.log(data);
           getAllPost({token,updater})
           Swal.fire({
            title: "Deleted!",
            text: "Your Post has been deleted.",
            icon: "success"
          });
           }


           //==update function

           //==========(1)show update model

           export const showupdateModel=({preContent,preTitle,postId,token,updater})=>{
            Swal.fire({
              title: "Update Post ",
             html:`
             <input name:"title" id="title" type="email" class="form-control mb-2" placeholder="enter title" value="${preTitle}"/>
             <textarea name:"content" id="content" type="email" class="form-control mb-2" placeholder="enter content">${preContent}</textarea>
             `,
              showCancelButton: true,
              confirmButtonText: "update",
              showLoaderOnConfirm: true,
              preConfirm:  () => {
                const subjectName= document.getElementById("subjectName").value
                const file= document.getElementById("inputGroupFile04").value
          
                return {title,content,subjectName,file}
              },
              allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
              // console.log(result);//{title,content}

              sendDataToUpdate({postId,token,updater,title:result.value.title,content:result.value.content,subjectName:result.value.subjectName,file:result.value.file})
              
            });
           }



           const  sendDataToUpdate=async({postId,token,updater ,title,content} )=>{

            const {data} = await axios.put(`https://note-sigma-black.vercel.app/api/v1/notes/${postId}`,{title,content},{headers:{
              token
             }})

            // console.log(data);

            getAllPost({token,updater})
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Post has been Updated ",
              showConfirmButton: false,
              timer: 1500
            }); 
           }

           //////=======get user posts ===============///

           export  const getUserPosts=async()=>{

           const {data} = await axios.get(``)
          //  console.log(data);
           }