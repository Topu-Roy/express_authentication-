const express = require("express");
const path = require("path");

const app = express();
const port = 5051;

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});