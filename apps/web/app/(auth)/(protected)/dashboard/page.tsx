"use client";
import React from "react";
import { useAuth } from "../../../../context/authContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "../../../../context/themeContext";
import { RiLoader5Line } from "react-icons/ri";
import { useActive } from "../../../../context/activeContext";
import {
  Navbar,
  Taskbar,
  Dashboard,
  Popular,
  CreateNewBlog,
  Feedback,
  YourBlogs,
} from "../../../../components";
const page = () => {
  const { active } = useActive();
  const { theme } = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      console.log(user);
      router.push("/signin");
    }
  });
  return !user ? (
    <div
      className="w-full h-screen pt-[200px]"
      style={{ backgroundColor: '#2b2b2b' }}
    >
      <RiLoader5Line className="w-[30px] h-[30px]  animate-spin mx-auto" />
    </div>
  ) : (
    <div
      className="w-full h-screen "
      style={{
        backgroundColor: '#2b2b2b',
        color: 'white',
        borderColor: 'white',
      }}
    >
      <Navbar />
      <div className="w-[100%] h-[100%] flex">
        <Taskbar />
        {(() => {
          switch (active) {
            case "Dashboard":
              return <Dashboard />;
            case "Your Blogs":
              return <YourBlogs />;
            case "New Blog":
              return <CreateNewBlog />;
            case "Popular":
              return <Popular />;
            case "Feedback":
              return <Feedback />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
};

export default page;
