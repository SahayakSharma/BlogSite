"use client";

import { useTheme } from "../context/themeContext";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import BlogPost from "../components/BlogPost";
import { RiLoader5Line } from "react-icons/ri";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loader,setloader]=useState(true)

  useEffect(() => {
    async function getposts() {
      const response = await fetch("/api/blogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          to_get: "all",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
        setloader(false)
      }
    }
    getposts();
  }, []);

  return (
    loader?(
      <>
        <RiLoader5Line className="w-[30px] h-[30px] mt-[50px]  animate-spin mx-auto" />
      </>
    ):(
    <div
      className="w-full h-screen"
      style={{backgroundColor: '#2b2b2b' }}
    >
      <Navbar />
      {blogs.map((blog: any) => {
        return (
          <BlogPost
            key={blog.id}
            title={blog.title}
            id={blog.id}
            content={blog.content}
            author={blog.author}
            createdAt={blog.createdAt}
          />
        );
      })}
    </div>)
  );
}
