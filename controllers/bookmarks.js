const express = require("express");
let router = express.Router();

const Bookmark = require('../models').bookmark

router.get("/", async function (req, res) {
  const bookmarks = await Bookmark.findAll();

  res.render("pages/bookmarks", {
    //Bookmarks: bookmarks.map(bookList => bookList.dataValues.url) 
    //Because the table contents are stored in an object inside an array, we need to map.
    Bookmarks: bookmarks.map(bookList => bookList.url)
  });
   
});

router.post("/", async function (req,res) {

  await Bookmark.create(
    {
      url: req.body.url,
    }
  )

  const bookmarks = await Bookmark.findAll();

  res.render("pages/bookmarks", {
    Bookmarks: bookmarks.map(bookList => bookList)
  })
})

router.delete('/:bookmarkId', async function (req, res) {

  await Bookmark.destroy({where: { id: req.params.bookmarkId } })

  const bookmarks = await Bookmark.findAll()

  res.render("pages/bookmarks", { 
    Bookmarks: bookmarks.map(bookList => bookList)
  })
})

module.exports = router;