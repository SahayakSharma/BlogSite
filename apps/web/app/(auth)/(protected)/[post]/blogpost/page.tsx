'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { parse } from 'path'
import { useTheme } from '../../../../../context/themeContext'
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { RiLoader5Line } from "react-icons/ri";


const page = () => {
  const router=useRouter()
  const {theme}=useTheme()
    const params=useSearchParams()
    const [loader,setloader]=useState(true)
    const [post,setpost]=useState([])
    const a=params.get('post')
    const b=parseInt(a)
    

    useEffect(()=>{
        async function getposts(){
            const response=await fetch('/api/uniqueblog',{
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'blogid':b
              },
            })
            if(response.ok){
              const data=await response.json()
              setpost(data) 
              setloader(false) 
            }
          }
          getposts()
    },[])

    const formattedCreatedAt = post.id ? format(new Date(post.createdAt), "HH:mm dd-MM-yyyy "):null;
    
  return (
    loader?(
        <div className='w-full h-screen mt-[200px]'>
                <RiLoader5Line className="w-[30px] h-[30px] animate-spin mx-auto mt-[200px]" />
        </div>
    ):(
        <div className='w-[100%] h-screen overflow-auto p-[100px]' style={{backgroundColor:theme.bgcolor,color:theme.fontcolor}}>
            <div className='w-[60%] mx-auto p-[20px]' style={{boxShadow:'0px 0.2px 0px 0.2px #77777780'}}>
                  <p className='text-[10px]'>{post.author}</p>
                  <p className='text-[45px] font-bold py-[10px]'>{post.title}</p>
                  <p className='text-[10px]'>{formattedCreatedAt}</p>
                  <p className='text-[13px] text-justify py-[40px]'>{post.content}</p>
                  <button className='w-[150px] h-[50px] border-2 rounded-md text-[13px]' onClick={()=>router.push('/')} style={{borderColor:theme.fontcolor}}>Back to Home</button>
            </div>
        </div>
    )
  )
}

export default page
