import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8080/api/blogs/all");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data.blogs);
        } else {
          throw new Error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="home flex flex-col">
      <NavBar />
      <div className="grid grid-cols-4 gap-4 mt-10 ml-9 ">
        {/* Render the blogs */}
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-item border border-1 p-4 bg-blue-50 w-[70%] rounded-lg shadow-md hover:shadow-lg hover:bg-blue-100 h-[100%]">
            <h2 className="font-extrabold mb-2">{blog.title}</h2>
            <p>{blog.description.substring(0, 100)}...</p>
            <Link to={`/blogs/test`} className="text-blue-700 font-semibold">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
