const express = require("express");
let router = express.Router();

const { models, sequelize } = require('../models');
let bookmarks;

//Sequelize works when it goes before the router (for some reason... ask ed)

sequelize.authenticate().then(async () => {

  bookmarks = await models.Bookmark.findAll();

})

router.get("/", function (req, res) {
  res.render("pages/index", {
    //Bookmarks: bookmarks.map(bookList => bookList.dataValues.url) 
    //Because the table contents are stored in an object inside an array, we need to map.
    Bookmarks: bookmarks.map(bookList => bookList.dataValues.url)
  });
   
});

module.exports = router;