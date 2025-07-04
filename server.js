const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors()); // allow frontend access
const PORT = process.env.PORT || 3001;

const UNSPLASH_API = "https://api.unsplash.com";

app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`${UNSPLASH_API}/search/photos`, {
      params: { query, per_page: 30 },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
