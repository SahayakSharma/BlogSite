'use client'
import React,{useEffect, useState} from 'react'
import { useTheme } from '../context/themeContext'
import { MdWbSunny } from "react-icons/md";
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const router=useRouter()
    const {user}=useAuth()
    const {theme,setTheme}=useTheme()
    const [fontcol,setFontcol]=useState<string>('hsl(0deg 0% 3.92%)')
    const [shadowcol,setshadowcol]=useState<string>('hsl(0deg 0% 3.92%)')
    useEffect(()=>{
      
    },[])

    const handlethemechange=()=>{
        if(theme.bgcolor==='hsl(0deg 0% 3.92%)'){
        setTheme({bgcolor:"#ffffff",fontcolor:'hsl(0deg 0% 3.92%)',shadow:'0.2px 0.2px hsl(0deg 0% 3.92%)'})
        localStorage.setItem('theme',JSON.stringify({bgcolor:"#ffffff",fontcolor:'hsl(0deg 0% 3.92%)',shadow:'0.2px 0.2px hsl(0deg 0% 3.92%)'}))
      }
      else{
        setTheme({bgcolor:'hsl(0deg 0% 3.92%)',fontcolor:'#ffffff',shadow:'0.2px 0.2px #ffffff'})
        localStorage.setItem('theme',JSON.stringify({bgcolor:'hsl(0deg 0% 3.92%)',fontcolor:'#ffffff',shadow:'0.2px 0.2px #ffffff'}))
      }
    }
  return (
    <div className='w-full px-[20px] h-[70px] flex justify-between text-white items-center' style={{backgroundColor:theme.bgcolor,color:theme.fontcolor, boxShadow:theme.shadow}}>
      <ul className='flex'>
        <li className='px-[10px] font-bold cursor-pointer'>Home</li>
        <li className='px-[10px] font-bold cursor-pointer'>About</li>
        <li className='px-[10px] font-bold cursor-pointer'>Blogs</li>
        
      </ul>
      <ul className='flex items-center'>
        <li><MdWbSunny className='w-[30px] h-[30px] mx-[20px] cursor-pointer' onClick={handlethemechange}/></li>
        <li>
        {user?(
            <div className='px-[10px] flex items-center'>
              <p className='text-[15px] font-bold px-[20px]'>{user.displayName}</p>
              <img className='w-[40px] h-[40px] rounded-full cursor-pointer' src={user.photoURL} alt="image here" />
            </div>
        ):(
          <div onClick={()=>router.push('/signin')}>
            <h1 className='px-[20px] font-bold text-[20px] cursor-pointer'>Login</h1>
          </div>
        )}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
