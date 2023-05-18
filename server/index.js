const express = require("express");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Configure CORS

app.use(
  cors({
    origin: "https://splashseeker.vercel.app",
  })
);

//Configure rate limiting
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 500, // limit each IP to 500 requests per windowMs
  message: "Too many requests, please try again later",
});
app.use(limiter);

// Get random popular images
app.get("/getImages/:count", async (req, res) => {
  console.log(req.params);
  try {
    const count = req.params.count;
    const response = await axios.get(
      `https://api.unsplash.com/photos?per_page=${count}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_API_ACCESS_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
    console.log("data send to front");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//Search for img
app.get("/searchImages/:query/:page", async (req, res) => {
  try {
    const query = req.params.query;
    const page = req.params.page;
    console.log(query, page);

    const response = await axios.get(
      `https://api.unsplash.com/search/photos?per_page=30&page=${page}&query=${query}?`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_API_ACCESS_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
    console.log("data send to front");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
