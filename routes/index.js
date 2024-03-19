"use strict";
const express = require("express"),
  router = express.Router();

router.get("/", async (req, res) => {
  res.send("Welcome to the API!  Nothing to see here.");
});


module.exports = router;
