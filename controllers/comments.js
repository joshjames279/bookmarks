const express = require("express");
let router = express.Router({mergeParams: true});

const { bookmark, comment } = require('../models')

//SET UP COMMENTS

router.get('/add', async function (req, res) {
  
  const Bookmark = await bookmark.findOne({ where: { id: req.params.bookmarkId } })

  res.render("comments/add", { 
    bookmark: Bookmark 
  })
})

//ADD COMMENT

router.post('/', async function (req, res) {

  await comment.create({
    comment: req.body.comment,
    bookmarkId: req.params.bookmarkId
  })
    
    res.redirect("/bookmarks")
  })
  
module.exports = router;