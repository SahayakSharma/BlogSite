import React,{useState,useEffect} from "react";
import BlogPost from "./BlogPost";
import { IoConstructOutline } from "react-icons/io5";

const Popular = () => {
  const [blogs, setBlogs] = useState([]);
  const[sortedbylike,setsortedbylike]=useState([])
  const[sortedbyviews,setsortedbyviews]=useState([])
  const [loader,setloader]=useState(true)

  const sortbylike=()=>{
    const sortedblogs=blogs.sort((a,b)=>b['likecounter']-a['likecounter'])
    setsortedbylike(sortedblogs)
    return(
      <>
        {sortedbylike.map((blog: any) => {
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
      </>
    )
  }
  const sortbyviews=()=>{
    const sortedblogs=blogs.sort((a,b)=>b['viewcounter']-a['viewcounter'])
    setsortedbyviews(sortedblogs)
    return(
      <>
        {sortedbyviews.map((blog: any) => {
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
      </>
    )
  }

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
    <div className="w-[100%] h-[100%] overflow-auto">
      <IoConstructOutline className="w-[100px] h-[100px] mt-[200px] mx-auto" />
      <p className="text-center text-[20px] font-medium py-[20px]">Work in Progress! _ Will be Available Soon!</p>
      {/* <button onClick={sortbylike}>Filter by liked</button>
      <button onClick={sortbyviews}>Filter by views</button> */}
      {/* { title, content, author, createdAt, id }: any */}
      {/* {blogs.map((blog: any) => {
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
      })} */}

    </div>
  );
};

export default Popular;
