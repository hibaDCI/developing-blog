const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
// router.route("/allposts").get(getAllPosts);
// router.route("/:id").get(getPost).delete(deletePost).post(updatePost);
router.route("/addPost").post(postController.createPost);
module.exports = router;
