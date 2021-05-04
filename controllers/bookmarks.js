const express = require("express");
let router = express.Router();

const { comment, bookmark } = require('../models')

//START UP

router.get("/", async function (req, res) {
  const Bookmarks = await bookmark.findAll({include: comment});
  req.app.locals.text = '';

  res.render("pages/bookmarks", {
    Bookmarks: Bookmarks.map((bookList) => bookList),
    Comment: req.app.locals.text,
  });
});

//ADD

router.post("/", async function (req, res) {
  await bookmark.create({
    url: req.body.url,
  });

  const Bookmarks = await bookmark.findAll({include: comment});

  res.render("pages/bookmarks", {
    Bookmarks: Bookmarks.map((bookList) => bookList),
    Comment:req.app.locals.text,
  });
});

//DELETE

router.delete("/:bookmarkId", async function (req, res) {
  await bookmark.destroy({ where: { id: req.params.bookmarkId } });

  const Bookmarks = await bookmark.findAll({include: comment});

  res.render("pages/bookmarks", {
    Bookmarks: Bookmarks.map((bookList) => bookList),
    Comment: req.app.locals.text,
  });
});

//UPDATE

router.get("/:bookmarkId/edit", async function (req, res) {
  const Bookmark = await bookmark.findOne({
    where: { id: req.params.bookmarkId },
  });
  res.render("pages/update", {
    bookmark: Bookmark,
    Url: Bookmark.dataValues.url,
  });
});

router.put("/:bookmarkId", async function (req, res) {
  await bookmark.update(
    { url: req.body.url },
    { where: { id: req.params.bookmarkId } }
  );
  const Bookmarks = await bookmark.findAll({include: comment});
  res.render("pages/bookmarks", {
    Bookmarks: Bookmarks.map((bookList) => bookList),
    Comment: req.app.locals.text,
  })
});

module.exports = router;
