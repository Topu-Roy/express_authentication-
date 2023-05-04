const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const port = 5051;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(cookieParser());

app.get("/", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    res.render("logout");
  } else {
    res.render("index");
  }
});

app.get("/logout", (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.redirect("/");
});

app.post("/login", (req, res) => {
  res.cookie("token", "this is a login cookie", {
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
