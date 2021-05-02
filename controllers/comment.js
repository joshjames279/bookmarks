const express = require("express");
let router = express.Router();

const Bookmark = require("../models").bookmark;

router.get("/:bookmarkId", async function (req, res) {

  const bookmark = await Bookmark.findOne({
    where: { id: req.params.bookmarkId },
  });

  res.render("pages/comment", {
    Comment: bookmark.dataValues.info,
    bookmark: bookmark
  });
});

router.get("/:bookmarkId/edit", async function (req, res) {

    const bookmark = await Bookmark.findOne({
      where: { id: req.params.bookmarkId },
    });

    res.render("pages/comment2", {
      bookmark: bookmark});
})

router.put("/:bookmarkId", async function (req, res) {
  console.log(req.body.comment)
  req.app.locals.text = req.body.comment
  
  await Bookmark.update(
    { info: req.body.comment },
    { where: { id: req.params.bookmarkId } }
  );
  const bookmarks = await Bookmark.findAll();
  res.render("pages/bookmarks", {
    Bookmarks: bookmarks.map((bookList) => bookList),
  })
});
  
    module.exports = router;