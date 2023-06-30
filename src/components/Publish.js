import React, { useState } from "react";
import NavBar from "./NavBar";
import Button from "./Button";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://127.0.0.1:8080/api/blogs/publish";
    const data = {
      title: title,
      description: description,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Blog published successfully!");
        // Add any additional logic here for successful submission
      } else {
        console.log("Failed to publish the blog.");
        // Add any error handling logic here
      }
    } catch (error) {
      console.log("An error occurred while publishing the blog:", error);
      // Handle any network or other errors here
    }
  };

  return (
    <div className="publish">
      <NavBar showCreateButton={false} />
      <div className="blog-form flex flex-col mt-[4%] h-[30rem] rounded-lg ml-[32%] w-[30%]">
        <div className="blog-title border border-2 border-blue-800 focus:border-blue-900">
          <input
            placeholder="Title"
            className="w-[100%] p-2"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="blog-desc border border-2 border-blue-800 focus:border-blue-900 h-[70%] mt-4 mb-4">
          <textarea
            placeholder="Description"
            className="w-[100%] h-[100%] p-2"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div onClick={handleSubmit} >
        <Button text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Publish;
