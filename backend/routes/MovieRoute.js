const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => res.send("Get method for Movies"))
  .post((req, res) => res.send("Post request for movies"));

module.exports = router;
