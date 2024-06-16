
"use client"
import React, { useEffect,useState } from 'react'
import { useAuth } from '../context/authContext'
import { set } from 'firebase/database'
import { MdDeleteForever } from "react-icons/md";
import { useTheme } from '../context/themeContext';
import { SlBasket } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
const Dashboard = () => {
 const {theme}=useTheme()
  const {user}=useAuth()
  const [userposts,setUserposts]=useState([])
  let number=0;

  const handlepostdelete=async(id:any)=>{
    console.log('ek bar chala')
      const response=await fetch('api/blogs',{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          id:id
        })
      })
      alert('Post Deleted Successfully')
     
      
      
  }


  useEffect(()=>{
    async function getposts(){
      const response=await fetch('/api/blogs',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'to_get':user.uid
        },
      })
      if(response.ok){
        const data=await response.json()
        setUserposts(data)
        
      }
      
    }
    getposts()
  },[])
  
  return (
    <div className='w-[100%] h-[100%] py-[20px] px-[70px] overflow-auto' style={{userSelect:'none'}}>
      <div className='w-[100%] h-[200px] flex items-center'>
        <img src={user.photoURL} className='w-[150px] h-[150px] rounded-full' alt="" />
        <div>
        <h1 className='px-[70px] text-[70px] font-bold'>{user.displayName}</h1>
        <p className='px-[75px] text-[12px]'>{user.email}</p>
        </div>
      </div>
      <div className='w-[100%] h-[200px] pt-[50px]'>
        <p className='text-[15px] py-[10px]'>Total Blogs Published  : 0</p>
        <p className='text-[15px] py-[10px]'>Total Views Received  : 0</p>
      </div>
      {
        userposts.length===0?(
          <>
          <SlBasket className='w-[150px] h-[150px] mx-auto'/>
          <p className='text-center font-bold text-[20px] py-[20px]'>You Have Not Posted Yet</p>
          </>
        ):(
          <div className='mt-[50px]'>
            <div className='w-[100%] h-[40px] flex items-center' style={{borderColor:theme.fontcolor}}>
              <div className='w-[5%] h-[100%] border-r-[1px]  font-bold flex items-center justify-center' style={{borderColor:theme.fontcolor}}>No.</div>
              <div className='w-[60%] h-[100%] border-r-[1px]  font-bold flex items-center justify-center' style={{borderColor:theme.fontcolor}}>Title</div>
              <div className='w-[10%] h-[100%] border-r-[1px]  font-bold flex items-center justify-center' style={{borderColor:theme.fontcolor}}>Views</div>
              <div className='w-[10%] h-[100%] border-r-[1px]  font-bold flex items-center justify-center' style={{borderColor:theme.fontcolor}}>Likes</div>
              <div className='w-[10%] h-[100%] border-r-[1px]  font-bold flex items-center justify-center' style={{borderColor:theme.fontcolor}}>CreatedOn</div>
              <div className='w-[5%] h-[100%]' style={{borderColor:theme.fontcolor}}></div>
            </div>
            {
              userposts.map((post:any)=>{
                number=number+1
                return( 
                  <div key={post.id} className='w-[100%] h-[60px] flex items-center border-t-[1px]' style={{borderColor:theme.fontcolor}}>
                    <div className='w-[5%] h-[100%] border-r-[1px] px-[10px] items-center flex text-[10px]' style={{borderColor:theme.fontcolor}}><h1>{number}</h1></div>
                    <div className='w-[60%] h-[100%] border-r-[1px] px-[20px] items-center flex text-[13px] cursor-pointer' style={{borderColor:theme.fontcolor}}><p>{post.title.length > 80 ? post.title.substring(0, 80) + '...' : post.title}</p></div>
                    <div className='w-[10%] h-[100%] border-r-[1px] px-[20px] items-center justify-center flex text-[10px]' style={{borderColor:theme.fontcolor}}>{post.viewcounter}</div>
                    <div className='w-[10%] h-[100%] border-r-[1px] px-[20px] items-center justify-center flex text-[10px]' style={{borderColor:theme.fontcolor}}>{post.likecounter}</div>
                    <div className='w-[10%] h-[100%] border-r-[1px] px-[20px] items-center justify-center flex text-[10px]' style={{borderColor:theme.fontcolor}}>{new Date(post.createdAt).toLocaleDateString()}</div>
                    <div className='w-[5%] h-[100%] px-[10px] items-center flex justify-center' onClick={()=>handlepostdelete(post.id)}><MdDeleteForever className='w-[20px] h-[20px] cursor-pointer' /></div>
                  </div>
                 
                )
              })
            }
          </div>
        )
      }

      
    </div>
  )
  }
  
  export default Dashboard
  
  export const runtime = 'edge'