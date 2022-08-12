require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// connect DB
connectDB();

// routes
app.use("/api/movies", require("./routes/MovieRoute"));

app.listen(5000, () => console.log("Server running on port 5000"));
