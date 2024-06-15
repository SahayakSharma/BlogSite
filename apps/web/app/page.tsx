'use client'
import { Button } from "@repo/ui/button";
import Image from "next/image";
import { useTheme } from "../context/themeContext";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { set } from "firebase/database";
import { useState } from "react";
import BlogPost from "../components/BlogPost";


export default function Home() {
  const [blogs,setBlogs]=useState([])
  const {theme}=useTheme()
  const router=useRouter()

  useEffect(()=>{
    async function getposts(){
      const response=await fetch('/api/blogs',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'to_get':'all'
        },
      })
      if(response.ok){
        const data=await response.json()
        setBlogs(data)  
      }
    }
    getposts()
  },[])
  
  console.log(theme)
  return (
    <div className="w-full h-screen" style={{backgroundColor:theme.bgcolor}}>
      <Navbar/>
      {
        blogs.map((blog:any)=>{
          return(
            <BlogPost key={blog.id} title={blog.title} id={blog.id} content={blog.content} author={blog.author} createdAt={blog.createdAt} />
          )
        })
      }
      


    </div>
  );
}
