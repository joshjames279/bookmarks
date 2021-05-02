require('dotenv').config()

const express = require("express");
const methodOverride = require('method-override')
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/css'));

app.set("view engine", "ejs");

const indexRouter = require("./controllers/bookmarks");
const commentRouter = require("./controllers/comment");

app.use("/bookmarks", indexRouter);
app.use("/comment", commentRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });