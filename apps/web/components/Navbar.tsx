'use client'
import React,{useEffect, useState} from 'react'
import { useTheme } from '../context/themeContext'

const Navbar = () => {
    const {theme,setTheme}=useTheme()
    const [fontcol,setFontcol]=useState<string>('hsl(0deg 0% 3.92%)')
    const [shadowcol,setshadowcol]=useState<string>('hsl(0deg 0% 3.92%)')
    useEffect(()=>{
        if(theme==='#ffffff'){
            setFontcol('hsl(0deg 0% 3.92%)')
            setshadowcol(' 2px 0.2px hsl(0deg 0% 3.92%)')
        }
        else{ 
            setFontcol('#ffffff')
            setshadowcol('2px 0.2px #ffffff')
        }
    },[theme])

    const handlethemechange=()=>{
        if(theme==='#ffffff') setTheme('hsl(0deg 0% 3.92%)')
        else setTheme('#ffffff')
    }
  return (
    <div className='w-full h-[70px] flex justify-end items-center' style={{backgroundColor:theme, boxShadow:shadowcol}}>
      <button className='w-[120px] h-[50px] border-2 rounded-md mx-[20px] text-[15px] font-bold' style={{backgroundColor:theme,color:fontcol,borderColor:fontcol}} onClick={handlethemechange}>Toggle theme</button>
    </div>
  )
}

export default Navbar
