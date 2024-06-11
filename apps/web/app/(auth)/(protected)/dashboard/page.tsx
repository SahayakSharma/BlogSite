'use client'
import React, { use } from 'react'
import { Authentication } from '../../../../Firebase/auth'
import { useAuth } from '../../../../context/authContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RiLoader5Line } from "react-icons/ri";
import { useTheme } from '../../../../context/themeContext'
import { useActive } from '../../../../context/activeContext'
import {Navbar,Taskbar,Dashboard,Popular,CreateNewBlog,Feedback,YourBlogs} from '../../../../components'
const page = () => {
  
    const {active}=useActive()
    const {theme}=useTheme()
    const {user}=useAuth()
    const router=useRouter()
    const handlesignout=()=>{
        const auth=Authentication.getInstance()
        auth.signout().then((res)=>{
            if(res.error) console.log(res.error.message)
            else console.log(res.res)
        })
    }
    useEffect(()=>{
        if(!user){
            console.log(user)
         router.push('/signin') 
        }
        
      })
  return (
    !user?(
        <div style={{backgroundColor:theme.bgcolor}}>
            <RiLoader5Line className="w-[30px] h-[30px]  animate-spin mx-auto mt-[200px]" />
        </div>
    ):(
        <div className='w-full h-screen overflow-hidden' style={{backgroundColor:theme.bgcolor,color:theme.fontcolor,borderColor:theme.fontcolor}}>
            <Navbar/>
            <div className='w-[100%] h-[100%] flex'>
                <Taskbar/>
                {(() => {
                switch (active) {
                    case 'Dashboard':
                        return <Dashboard />;
                    case 'Your Blogs':
                        return <YourBlogs />;
                    case 'New Blog':
                        return <CreateNewBlog />;
                    case 'Popular':
                        return <Popular />;
                    case 'Feedback':
                        return  <Feedback />;
                    default:
                        return null;
                }
            })()}

            </div>
        </div>
    )
  )
}

export default page
