"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "@/context/themeContext";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { RiLoader5Line } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const page = () => {
  const router = useRouter();

  const { theme } = useTheme();
  const params = useSearchParams();
  const [loader, setloader] = useState(true);
  const [liked, setliked] = useState(false);
  const [post, setpost] = useState<any>([]);
  const a = params.get("post") || "";

  const handlelike = () => {
    if (!liked) {
      setliked(true);
      let like = parseInt(post.likecounter) + 1;

      async function incrementlike() {
        const response = await fetch("/api/blogs", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            toupdate: "like",
            postid: a,
          },
          body: JSON.stringify({
            likecounter: like,
          }),
        });
        if (response.ok) {
          console.log("like updated");
        }
      }

      incrementlike();
    } else {
      setliked(false);
      async function decrementlike() {
        const response = await fetch("/api/blogs", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            toupdate: "like",
            postid: a,
          },
          body: JSON.stringify({
            likecounter: post.likecounter,
          }),
        });
        if (response.ok) {
          console.log("like updated");
        }
      }

      decrementlike();
    }
  };

  useEffect(() => {
    async function getposts() {
      const response = await fetch("/api/uniqueblog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          blogid: a,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setpost(data);
        setloader(false);
        async function updateview() {
          const response = await fetch("/api/blogs", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              toupdate: "view",
              postid: a,
            },
            body: JSON.stringify({
              viewcounter: data.viewcounter + 1,
            }),
          });
          if (response.ok) {
            console.log("view updated");
          }
        }

        updateview();
      }
    }

    getposts();
  }, []);

  const formattedCreatedAt = post.id
    ? format(new Date(post.createdAt), "HH:mm dd-MM-yyyy ")
    : null;

  return loader ? (
    <div
      className="w-full h-screen py-[200px] "
      style={{
        backgroundColor: theme ? theme.bgcolor : "",
        color: theme ? theme.fontcolor : "",
      }}
    >
      <RiLoader5Line className="w-[30px] h-[30px] animate-spin mx-auto" />
    </div>
  ) : (
    <div
      className="w-[100%] h-screen overflow-auto p-[100px]"
      style={{
        backgroundColor: theme ? theme.bgcolor : "",
        color: theme ? theme.fontcolor : "",
      }}
    >
      <div
        className="w-[60%] mx-auto p-[20px]"
        style={{ boxShadow: "0px 0.2px 0px 0.2px #77777780" }}
      >
        <p className="text-[10px]">{post.author}</p>
        <p className="text-[45px] font-bold py-[10px]">
          {post.title.length > 80
            ? post.title.substring(0, 80) + " . . . .  . ."
            : post.title}
        </p>
        <p className="text-[10px]">{formattedCreatedAt}</p>
        <p className="text-[13px] text-justify py-[40px]">{post.content}</p>
        {!liked ? (
          <BiLike
            className="w-[20px] h-[20px] my-[50px] ml-[10px]"
            onClick={() => handlelike()}
          />
        ) : (
          <BiSolidLike
            className="w-[20px] h-[20px] my-[50px] ml-[10px]"
            onClick={() => handlelike()}
          />
        )}
        <button
          className="w-[150px] h-[50px] border-2 rounded-md text-[13px]"
          onClick={() => router.push("/")}
          style={{ borderColor: theme ? theme.fontcolor : "" }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default page;
