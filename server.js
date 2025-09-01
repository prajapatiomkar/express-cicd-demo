const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from CI/CD with GitHub Actions updated 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running`);
});
