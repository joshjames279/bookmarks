const express = require("express");
let router = express.Router();

const Bookmark = require('../models').bookmark

router.get("/", async function (req, res) {
  const bookmarks = await Bookmark.findAll();

  res.render("pages/index", {
    //Bookmarks: bookmarks.map(bookList => bookList.dataValues.url) 
    //Because the table contents are stored in an object inside an array, we need to map.
    Bookmarks: bookmarks.map(bookList => bookList.url)
  });
   
});

module.exports = router;