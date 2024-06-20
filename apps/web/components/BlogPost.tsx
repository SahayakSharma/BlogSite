"use client";
import React from "react";
import { useTheme } from "../context/themeContext";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
const BlogPost = ({ title, content, author, createdAt, id }: any) => {
  const router = useRouter();
  const formattedCreatedAt = format(new Date(createdAt), "HH:mm dd-MM-yyyy ");

  const handleredirecttoblog = () => {
    const encodedText = encodeURIComponent(title);
    router.push(`/${encodedText}/blogpost?post=${id}`);
  };

  return (
    <div
      className="w-[80%] h-[200px] mx-auto  p-[20px]  my-[30px] rounded-sm"
      style={{
        boxShadow:"0.2px 0.2px 4px #121212",
        color: 'white',
        userSelect: "none",
      }}
    >
      <p
        className="text-[20px] py-[0px] font-bold cursor-pointer"
        onClick={handleredirecttoblog}
        style={{color: 'white',}}
      >
        {title.length > 100 ? title.substring(0, 100) + " . . . .  . ." : title}
      </p>
      <p className="text-[13px] py-[20px]"
      style={{color: 'white',}}>
        {content.length > 400 ? content.substring(0, 300) + "..." : content}
      </p>
      <div className="flex justify-between text-[10px] py-[20px]"
      style={{color: 'white',}}>
        <p>Author : {author}</p>
        <p>{formattedCreatedAt}</p>
      </div>
    </div>
  );
};

export default BlogPost;
