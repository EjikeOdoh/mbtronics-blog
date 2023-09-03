const express = require("express");

const {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).patch(updatePost).delete(deletePost);

module.exports = router;
