const express = require("express");
const router = express.Router();

const {dumyLink} = require("../controller/comment");
const {createComment} = require("../controller/comment");
const {createPost, getAllPosts} = require("../controller/create");
const {likePost, unlikePost} = require("../controller/like");

 router.get("/dumyroute",dumyLink);
 router.post("/comment/create",createComment);
 router.post("/post/create",createPost);
 router.get("/post",getAllPosts);
 router.post("/likes/like",likePost);
 router.post("/likes/unlike",unlikePost);
module.exports = router;