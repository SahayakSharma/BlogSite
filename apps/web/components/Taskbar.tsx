"use client";
import React from "react";
import { useTheme } from "../context/themeContext";
import { MdCreateNewFolder } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { MdOutlineFeedback } from "react-icons/md";
import { SiPopos } from "react-icons/si";
import { RiDashboard2Fill } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { useActive } from "../context/activeContext";
import { Authentication } from "../Firebase/auth";
import { useRouter } from "next/navigation";

const Taskbar = () => {
  const { active, setActive } = useActive();
  const { theme } = useTheme();
  const router = useRouter();

  const handleSignOut = () => {
    const auth = Authentication.getInstance();
    auth.signout().then((res) => {
      if (res.error) console.log(res.error.message);
      else router.replace("/");
    });
  };

  return (
    <div
      className="w-[22%] h-[100%] p-[30px]"
      style={{ boxShadow:"0.2px 0.2px 8px #121212", }}
    >
      <ul className="flex flex-col">
        <li
          className="px-[10px] my-[10px] rounded-md  h-[50px] text-[20px] py-[20px] flex items-center"
          style={{
            backgroundColor:
              active === "Dashboard"
                ? '#313131'
                : "",
            userSelect: "none",
          }}
        >
          <RiDashboard2Fill className="w-[20px] h-[20px]" />
          <p
            className="px-[15px] cursor-pointer"
            onClick={() => setActive("Dashboard")}
          >
            Dashboard
          </p>
        </li>
        <li
          className="px-[10px] my-[10px] rounded-md h-[50px] text-[20px] py-[20px] flex items-center"
          style={{
            backgroundColor:
              active === "Your Blogs"
                ? '#313131'
                : "",
            userSelect: "none",
          }}
        >
          <CiViewList className="w-[20px] h-[20px]" />
          <p
            className="px-[15px] cursor-pointer"
            onClick={() => setActive("Your Blogs")}
          >
            Your Blogs
          </p>
        </li>
        <li
          className="px-[10px] my-[10px] rounded-md h-[50px] text-[20px] py-[20px] flex items-center"
          style={{
            backgroundColor:
              active === "New Blog"
                ? '#313131'
                : "",
            userSelect: "none",
          }}
        >
          <MdCreateNewFolder className="w-[20px] h-[20px]" />
          <p
            className="px-[15px] cursor-pointer"
            onClick={() => setActive("New Blog")}
          >
            Create New
          </p>
        </li>
        <li
          className="px-[10px] my-[10px] rounded-md h-[50px] text-[20px] py-[20px] flex items-center"
          style={{
            backgroundColor:
              active === "Popular"
                ? '#313131'
                : "",
            userSelect: "none",
          }}
        >
          <SiPopos className="w-[20px] h-[20px]" />
          <p
            className="px-[15px] cursor-pointer"
            onClick={() => setActive("Popular")}
          >
            Popular Blogs
          </p>
        </li>
        <li
          className="px-[10px] my-[10px] rounded-md h-[50px] text-[20px] py-[20px] flex items-center"
          style={{
            backgroundColor:
              active === "Feedback"
                ? '#313131'
                : "",
            userSelect: "none",
          }}
        >
          <MdOutlineFeedback className="w-[20px] h-[20px]" />
          <p
            className="px-[15px] cursor-pointer"
            onClick={() => setActive("Feedback")}
          >
            Feedback Form
          </p>
        </li>
        <li
          className="px-[10px] my-[10px] rounded-md h-[50px] text-[20px] py-[20px] flex items-center "
          style={{ userSelect: "none" }}
        >
          <PiSignOutBold className="w-[20px] h-[20px]" />
          <p className="px-[15px] cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Taskbar;
