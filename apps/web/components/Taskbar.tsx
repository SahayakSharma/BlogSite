'use client'
import React from 'react'
import { useTheme } from '../context/themeContext'
import { MdCreateNewFolder } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { MdOutlineFeedback } from "react-icons/md";
import { SiPopos } from "react-icons/si";
import { RiDashboard2Fill } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { useActive } from '../context/activeContext';
import { Authentication } from '../Firebase/auth';
import { useRouter } from 'next/navigation';

const Taskbar = () => {
    const {active,setActive}=useActive()
    const {theme}=useTheme()
    const router=useRouter()

    const handleSignOut=()=>{
        const auth=Authentication.getInstance()
        auth.signout().then((res)=>{
            if(res.error) console.log(res.error.message)
            else router.push('/signin')
        })
    }

  return (
    <div className='w-[20%] h-[100%] p-[30px]' style={{boxShadow:theme.shadow}}>
      <ul className='flex flex-col'>
        <li className=' text-[20px] py-[20px] flex items-center'><RiDashboard2Fill className='w-[20px] h-[20px]'/><p className='px-[15px] cursor-pointer' onClick={()=>setActive('Dashboard')}>Dashboard</p></li>
        <li className=' text-[20px] py-[20px] flex items-center'><CiViewList className='w-[20px] h-[20px]'/><p className='px-[15px] cursor-pointer' onClick={()=>setActive('Your Blogs')}>Your Blogs</p></li>
        <li className=' text-[20px] py-[20px] flex items-center'><MdCreateNewFolder className='w-[20px] h-[20px]'/><p className='px-[15px] cursor-pointer' onClick={()=>setActive('New Blog')}>Create New</p></li>
        <li className=' text-[20px] py-[20px] flex items-center'><SiPopos className='w-[20px] h-[20px]'/><p className='px-[15px] cursor-pointer' onClick={()=>setActive('Popular')}>Popular Blogs</p></li>
        <li className=' text-[20px] py-[20px] flex items-center'><MdOutlineFeedback className='w-[20px] h-[20px]'/><p className='px-[15px] cursor-pointer' onClick={()=>setActive('Feedback')}>Feedback Form</p></li>
        <li className=' text-[20px] py-[20px] flex items-center'><PiSignOutBold  className='w-[20px] h-[20px]'/><p className='px-[15px] cursor-pointer' onClick={handleSignOut}>Sign Out</p></li>
       
      </ul>
    </div>
  )
}

export default Taskbar
