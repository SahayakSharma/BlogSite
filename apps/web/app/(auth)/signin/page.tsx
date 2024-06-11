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
            else {
                router.replace('/dashboard')
            }
        
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
        }
      }, [user]);
  return (
    loader?(
        <>
            <RiLoader5Line className="w-[30px] h-[30px]  animate-spin mx-auto mt-[200px]" />
        </>
    ):(
        <div className='w-full h-screen flex justify-center items-center' style={{backgroundColor:theme.bgcolor,color:theme.fontcolor}} >
            <div className='w-[350px] h-[400px] flex flex-col justify-between items-center py-[20px]'>
                <p className='text-center font-bold text-[25px] px-[20px]' style={{color:theme.fontcolor}}>We Are Preparing Something Great For You !</p>
                <div className='w-full h-[200px] flex flex-col justify-around'>
                <span className='w-[80%] mx-auto h-[50px] rounded-3xl  bg-[#000000] flex  items-center cursor-pointer' onClick={handlesignin}><p className='w-[100%] mx-auto px-[10px] flex justify-around'><FcGoogle className='w-[30px] h-[30px]'/><p className='px-[15px] font-bold text-[15px] pt-[3px] text-white'>Continue with Apple</p></p></span>
                <span className='w-[80%] mx-auto h-[50px] rounded-3xl  bg-[#18436e] flex  items-center cursor-pointer' onClick={handlesignin}><p className='w-[100%] mx-auto px-[10px] flex justify-around'><FcGoogle className='w-[30px] h-[30px]'/><p className='px-[15px] font-bold text-[15px] pt-[3px] text-white'>Continue with Google</p></p></span>
                <span className='w-[80%] mx-auto h-[50px] rounded-3xl  bg-[#e23f36] flex  items-center cursor-pointer' onClick={handlesignin}><p className='w-[100%] mx-auto px-[10px] flex justify-around'><FcGoogle className='w-[30px] h-[30px]'/><p className='px-[15px] font-bold text-[15px] pt-[3px] text-white'>Continue with Email</p></p></span>
                </div>
            </div>
        </div>
    )
  )
}

export default page
