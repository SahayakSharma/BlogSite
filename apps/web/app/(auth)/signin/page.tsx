'use client'
import React from 'react'
import { Authentication } from '../../../Firebase/auth'
import { useAuth } from '../../../context/authContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RiLoader5Line } from "react-icons/ri";
import { useTheme } from '../../../context/themeContext'
import { FcGoogle } from "react-icons/fc";
import { set } from 'firebase/database'


const page = () => {
    const {theme}=useTheme()
    const router=useRouter()
    const [loader,setloader]=useState(true)
    const {user}=useAuth()
    const [fontcol,setFontcol]=useState<string>('hsl(0deg 0% 3.92%)')
    const [shadowcol,setshadowcol]=useState<string>('0.2px 0.2px hsl(0deg 0% 3.92%)')
    const handlesignin=()=>{
        const auth=Authentication.getInstance()
        auth.signInWithGoogle().then((res)=>{
            if(res.error) console.log(res.error)
            else console.log(res.res)
        
        })
    }
    const handlesignout=()=>{
        const auth=Authentication.getInstance()
        auth.signout().then((res)=>{
            if(res.error) console.log(res.error.message)
            else console.log(res.res)
        })
    }
    useEffect(() => {
        console.log(theme)
        if (user) {
          router.replace("/dashboard");
          return;
        }
        else {
            setloader(false);
            if(theme==='#ffffff'){
                setFontcol('hsl(0deg 0% 3.92%)')
                setshadowcol('0.2px 0.2px hsl(0deg 0% 3.92%)')
            }
            else{
                setFontcol('#ffffff')
                setshadowcol('0.2px 0.2px #ffffff')
            
            }
        }
      }, [user]);
  return (
    loader?(
        <>
            <RiLoader5Line className="w-[30px] h-[30px]  animate-spin mx-auto mt-[200px]" />
        </>
    ):(
        <div className='w-full h-screen flex justify-center items-center' style={{backgroundColor:theme,color:fontcol}} >
            <div className='w-[300px] h-[400px] flex flex-col justify-between items-center py-[20px]' style={{boxShadow:shadowcol}}>
                <p className='text-center font-bold text-[20px]' style={{color:fontcol}}>Sign in to your account</p>
                <span className='w-[80%] h-[50px] rounded-md border-2 mx-auto flex  items-center cursor-pointer' style={{borderColor:fontcol}}><p className='px-[10px] flex'><FcGoogle className='w-[30px] h-[30px]'/><p className='px-[10px] font-bold' style={{color:fontcol}}>Sign in with google</p></p></span>

            </div>
        </div>
    )
  )
}

export default page
