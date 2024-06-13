
"use client"
import React, { useEffect } from 'react'
import { useAuth } from '../context/authContext'

const Dashboard = () => {
 
  const {user}=useAuth()
  
  return (
    <div className='w-[100%] h-[100%] py-[20px] px-[70px]' style={{userSelect:'none'}}>
      <div className='w-[100%] h-[200px] flex items-center'>
        <img src={user.photoURL} className='w-[150px] h-[150px] rounded-full' alt="" />
        <div>
        <h1 className='px-[70px] text-[70px] font-bold'>{user.displayName}</h1>
        <p className='px-[75px] text-[12px]'>{user.email}</p>
        </div>
      </div>
      <div className='w-[100%] h-[300px] py-[50px]'>
        <p className='text-[15px] py-[10px]'>Total Blogs Published  : 0</p>
        <p className='text-[15px] py-[10px]'>Total Views Received  : 0</p>
      </div>
      
    </div>
  )
  }
  
  export default Dashboard
  
  export const runtime = 'edge'