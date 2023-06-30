const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cookieParser = require('cookie-parser');
// Enable all CORS requests
app.use(cors());
app.use(cookieParser());

// MongoDB connection URI
const uri = "mongodb://localhost:27017/blogapp"; // Replace with your MongoDB connection URI

// Connect to MongoDB using Mongoose
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful connection
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.use(express.json());
// Use the routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("welcome");
});
// Middleware to parse JSON request bodies
