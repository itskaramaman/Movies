require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors);
connectDB();
app.use("/api/movies", require("./routes/MovieRoute"));

app.listen(5000, () => console.log("Server running on port 5000"));
