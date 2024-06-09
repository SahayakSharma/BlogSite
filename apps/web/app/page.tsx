'use client'
import { Button } from "@repo/ui/button";
import Image from "next/image";
import { useTheme } from "../context/themeContext";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
export default function Home() {
  const {theme,setTheme}=useTheme()
  
  console.log(theme)
  return (
    <div className="w-full h-screen" style={{backgroundColor:theme}}>
      <Navbar/>



    </div>
  );
}
