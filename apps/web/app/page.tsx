'use client'
import { Button } from "@repo/ui/button";
import Image from "next/image";
import { useTheme } from "../context/themeContext";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";


export default function Home() {
  const {theme,setTheme}=useTheme()
  const router=useRouter()
  
  console.log(theme)
  return (
    <div className="w-full h-screen" style={{backgroundColor:theme.bgcolor}}>
      <Navbar/>
      <button className="w-[200px] h-[50px] border-2 rounded-md ml-[600px] mt-[200px] font-bold text-[20px] my-[50px]" onClick={()=>router.push("/signin")} style={{borderColor:theme.fontcolor,color:theme.fontcolor}}>Signin</button>



    </div>
  );
}
