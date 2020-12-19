/// Scrip for Serving Bundled SPA
const express = require("express");
const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile("./dist/index.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `[Ready]: Serving on ${
      process.env.PORT
        ? "https://fyleapp.herokuapp.com"
        : "https://localhost:3000"
    }`
  );
});

module.exports = app;
