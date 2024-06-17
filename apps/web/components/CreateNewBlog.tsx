import { useState } from "react";
import React from "react";
import { useTheme } from "../context/themeContext";
import { useAuth } from "../context/authContext";

const CreateNewBlog = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [newpost, setnewpost] = useState({ title: "", content: "" });
  const handlepublish = async () => {
    if (newpost.title === "" || newpost.content === "")
      return alert("Please Fill The Fields");
    else {
      if (user) {
        const response = await fetch("/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authorid: user.uid,
            title: newpost.title,
            content: newpost.content,
            author: user.displayName,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        }
        alert("Post Published Successfully");
        setnewpost({ title: "", content: "" });
      }
    }
  };
  return (
    <div className="w-[100%] h-[100%] p-[50px] flex flex-col text-[15px]">
      <input
        type="text"
        placeholder="Title Of The Blog"
        className="w-[100%] h-[50px] my-[20px]  px-[20px]  bg-inherit outline-none"
        style={{
          boxShadow:"0.2px 0.2px #464646",
        }}
        value={newpost.title}
        onChange={(e) =>
          setnewpost((post) => ({ ...post, title: e.target.value }))
        }
      />
      <textarea
        placeholder="Write The Content!"
        className="w-[100%] h-[300px] my-[20px] px-[20px] rounded-md bg-inherit outline-none"
        value={newpost.content}
        onChange={(e) =>
          setnewpost((post) => ({ ...post, content: e.target.value }))
        }
      ></textarea>
      <div className="h-[100px]">
        Insert The Thumbnail : <input type="file" className=" font-thin" />
      </div>
      <div className="w-[100%] h-[70px] flex justify-end items-center">
        <button
          className="w-[120px] h-[50px] border-2 font-bold text-[20px] rounded-md"
          style={{ borderColor: 'white' }}
          onClick={handlepublish}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreateNewBlog;
