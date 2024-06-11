'use client'
import React,{useEffect, useState} from 'react'
import { useTheme } from '../context/themeContext'

const Navbar = () => {
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
    <div className='w-full h-[70px] flex justify-end items-center' style={{backgroundColor:theme.bgcolor, boxShadow:theme.shadow}}>
      <button className='w-[120px] h-[50px] border-2 rounded-md mx-[20px] text-[15px] font-bold' style={{backgroundColor:theme,color:theme.fontcolor,borderColor:theme.fontcolor}} onClick={handlethemechange}>Toggle theme</button>
    </div>
  )
}

export default Navbar
