const express = require("express");
let router = express.Router();

const { models, sequelize } = require('../models');

router.get("/", function (req, res) {
    sequelize.authenticate().then(async () => {

        const bookmarks = await models.Bookmark.findAll();

        console.log(bookmarks)
    })

  res.render("pages/index", {
      
  });
   
});

module.exports = router;