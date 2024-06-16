"use client";
import React from "react";
import { useTheme } from "../context/themeContext";
import { MdWbSunny } from "react-icons/md";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();

  const handlethemechange = () => {
    if (theme.bgcolor === "hsl(0deg 0% 3.92%)") {
      setTheme({
        bgcolor: "#ffffff",
        fontcolor: "hsl(0deg 0% 3.92%)",
        shadow: "0.2px 0.2px hsl(0deg 0% 3.92%)",
      });
      localStorage.setItem(
        "themeforblog",
        JSON.stringify({
          bgcolor: "#ffffff",
          fontcolor: "hsl(0deg 0% 3.92%)",
          shadow: "0.2px 0.2px hsl(0deg 0% 3.92%)",
        }),
      );
    } else {
      setTheme({
        bgcolor: "hsl(0deg 0% 3.92%)",
        fontcolor: "#ffffff",
        shadow: "0.2px 0.2px #ffffff",
      });
      localStorage.setItem(
        "themeforblog",
        JSON.stringify({
          bgcolor: "hsl(0deg 0% 3.92%)",
          fontcolor: "#ffffff",
          shadow: "0.2px 0.2px #ffffff",
        }),
      );
    }
  };
  return (
    <div
      className="w-full px-[20px] h-[70px] flex justify-between text-white items-center"
      style={{
        backgroundColor: theme?theme.bgcolor:'',
        color: theme?theme.fontcolor:'',
        boxShadow: theme?theme.shadow:'',
        userSelect: "none",
      }}
    >
      <ul className="flex">
        <li className="px-[10px] font-bold cursor-pointer">Home</li>
        <li className="px-[10px] font-bold cursor-pointer">About</li>
        <li className="px-[10px] font-bold cursor-pointer">Blogs</li>
      </ul>
      <ul className="flex items-center">
        <li className="mx-[20px] items-center">
          <p
            className="rounded-md p-[10px] cursor-pointer"
            style={{
              backgroundColor:
              theme?theme.bgcolor === "hsl(0deg 0% 3.92%)" ? "#1b1b1b" : "#e0e0e0":'',
            }}
            onClick={() => router.replace("/dashboard")}
          >
            Go to Console
          </p>
        </li>
        <li>
          <MdWbSunny
            className="w-[30px] h-[30px] mx-[20px] cursor-pointer"
            onClick={handlethemechange}
          />
        </li>
        <li>
          {user ? (
            <div className="px-[10px] flex items-center">
              <p className="text-[15px] font-bold px-[20px]">
                {user.displayName}
              </p>
              <img
                className="w-[40px] h-[40px] rounded-full cursor-pointer"
                src={user.photoURL}
                alt="image here"
              />
            </div>
          ) : (
            <div onClick={() => router.push("/signin")}>
              <h1 className="px-[20px] font-bold text-[20px] cursor-pointer">
                Login
              </h1>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
