const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Blog = require("../models/blogModel.js");

router.post("/publish", async (req, res) => {
  const { title, description } = req.body;

  // Assuming you have the user's ID
  const userId = "649ea8ddf6d0e808c76ce923";

  // Create a new blog instance
  const newBlog = new Blog({
    title: title,
    description: description,
    user: userId, // Associate the blog with the user's ID
  });

  // Save the new blog to the database
  newBlog
    .save()
    .then((savedBlog) => {
      console.log("Blog created:", savedBlog);
      res.status(201).json({savedBlog})
    })
    .catch((error) => {
      console.log("Error creating blog:", error);
      res.status(500).json({message : "server error"})
    });
});

router.get("/all", async (req, res) => {
    try {
      const blogs = await Blog.find()
        .populate("user", "username")
        .exec();
  
      res.status(200).json({ blogs });
    } catch (error) {
      console.log("Error fetching blogs:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

module.exports = router;
