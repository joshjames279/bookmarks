const express = require("express");
let router = express.Router({mergeParams: true});

const { comment, bookmark } = require('../models')

router.get('/add', async function (req, res) {
  
  const Bookmark = await bookmark.findOne({ where: { id: req.params.bookmarkId } })

  res.render("comments/add", { bookmark: Bookmark })
})

router.post('/', async function (req, res) {
  console.log(req.params)

  await comment.create({
    comment: req.body.comment,
    bookmarkId: req.params.bookmarkId
  })
    
    res.redirect("/bookmarks")
  })
  
module.exports = router;