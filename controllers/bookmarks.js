const express = require("express");
let router = express.Router();

const Bookmark = require("../models").bookmark;

//START UP

router.get("/", async function (req, res) {
  const bookmarks = await Bookmark.findAll();

  res.render("pages/bookmarks", {
    Bookmarks: bookmarks.map((bookList) => bookList),
  });
});

//ADD

router.post("/", async function (req, res) {
  await Bookmark.create({
    url: req.body.url,
  });

  const bookmarks = await Bookmark.findAll();

  res.render("pages/bookmarks", {
    Bookmarks: bookmarks.map((bookList) => bookList),
  });
});

//DELETE

router.delete("/:bookmarkId", async function (req, res) {
  await Bookmark.destroy({ where: { id: req.params.bookmarkId } });

  const bookmarks = await Bookmark.findAll();

  res.render("pages/bookmarks", {
    Bookmarks: bookmarks.map((bookList) => bookList),
  });
});

//UPDATE

router.get("/:bookmarkId/edit", async function (req, res) {
  const bookmark = await Bookmark.findOne({
    where: { id: req.params.bookmarkId },
  });
  res.render("pages/update", {
    bookmark: bookmark,
    Url: bookmark.dataValues.url,
  });
});

router.put("/:bookmarkId", async function (req, res) {
  await Bookmark.update(
    { url: req.body.url },
    { where: { id: req.params.bookmarkId } }
  );
  const bookmarks = await Bookmark.findAll();
  res.render("pages/bookmarks", {Bookmarks: bookmarks.map((bookList) => bookList)})
});

module.exports = router;
