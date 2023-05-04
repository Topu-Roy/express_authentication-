const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const port = 5051;

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  res.cookie("token", "this is a login cookie");
  res.send("Cookie Set");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
