import React from 'react'
import { useTheme } from '../context/themeContext'
const CreateNewBlog = () => {
  const {theme}=useTheme()
  return (
    <div className='w-[100%] h-[100%] p-[50px] flex flex-col text-[15px]'>
      <input type="text" placeholder='Title Of The Blog' className='w-[100%] h-[50px] my-[20px]  px-[20px]  bg-inherit outline-none' style={{boxShadow:theme.bgcolor==='hsl(0deg 0% 3.92%)'? '0px 0.2px white':'0px 0.2px black'
      }} />
      <textarea placeholder='Write The Content!' className='w-[100%] h-[300px] my-[20px] px-[20px] rounded-md bg-inherit outline-none'></textarea>
      <div className='h-[100px]'>Insert The Thumbnail : <input type="file" className=' font-thin'/></div>
      <div className='w-[100%] h-[70px] flex justify-end items-center'>
        <button className='w-[120px] h-[50px] border-2 font-bold text-[20px] rounded-md' style={{borderColor:theme.fontcolor}}>Publish</button>
      </div>
    </div>
  )
}

export default CreateNewBlog
