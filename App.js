require('dotenv').config()

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./controllers/index");

app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });