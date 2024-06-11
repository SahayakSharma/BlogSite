'use client'
import React from 'react'
import { Authentication } from '../../../../Firebase/auth'
import { useAuth } from '../../../../context/authContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RiLoader5Line } from "react-icons/ri";


const page = () => {
  
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
        <>
            <RiLoader5Line className="w-[30px] h-[30px]  animate-spin mx-auto mt-[200px]" />
        </>
    ):(
        <div>
            <button className='w-[200px] h-[50px] border-2 border-black my-[50px] mx-auto' onClick={handlesignout}>Sign out</button>
        </div>
    )
  )
}

export default page
