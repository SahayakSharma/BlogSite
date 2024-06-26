import React from "react";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
const YourBlogs = () => {
  const { user } = useAuth();
  const [userposts, setUserposts] = useState([]);

  useEffect(() => {
    async function getposts() {
      const response = await fetch("/api/blogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          to_get: user.uid,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserposts(data);
      }
    }
    getposts();
  }, []);

  return (
    <div className="w-[100%] h-[100%] overflow-auto p-[50px]">
      {userposts.map((blog: any) => {
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
    </div>
  );
};

export default YourBlogs;
