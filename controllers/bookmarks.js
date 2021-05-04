const express = require("express");
let router = express.Router();

const { bookmark, comment } = require('../models')

//START UP

router.get("/", async function (req, res) {

  const Bookmarks = await bookmark.findAll({include: comment});

  res.render("pages/bookmarks", {

    Bookmarks: Bookmarks.map((bookList) => bookList),

  });
});

//ADD

router.post("/", async function (req, res) {

  await bookmark.create({url: req.body.url});

  res.redirect("/bookmarks")
});

//DELETE

router.delete("/:bookmarkId", async function (req, res) {

  await bookmark.destroy({ where: { id: req.params.bookmarkId } });

  res.redirect("/bookmarks")
});

//UPDATE

router.get("/:bookmarkId/edit", async function (req, res) {

  const Bookmark = await bookmark.findOne({where: { id: req.params.bookmarkId }});

  res.render("pages/update", {

    bookmark: Bookmark,
    Url: Bookmark.dataValues.url,

  });
});

router.put("/:bookmarkId", async function (req, res) {

  await bookmark.update(
    { url: req.body.url },
    { where: { id: req.params.bookmarkId } 
  });

  res.redirect("/bookmarks")
});

module.exports = router;
