const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.json({ status: "Success", posts });
  } catch (error) {
    console.log(error);
    return res.json({ status: "Error" });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body });
    return res.json({ status: "Success", post });
  } catch (error) {
    console.log(error);
    return res.json({ status: "Error" });
  }
};

const getPost = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    return res.json({ status: "Success", post });
  } catch (error) {
    console.log(error);
    return res.json({ status: "Error" });
  }
};

const updatePost = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findByIdAndUpdate(
      postId,
      { ...req.body },
      { new: true }
    );
    return res.json({ status: "Success", post });
  } catch (error) {
    console.log(error);
    return res.json({ status: "Error" });
  }
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findByIdAndDelete(postId);
    res.json({ status: "Success" });
  } catch (error) {
    console.log(error);
    return res.json({ status: "Error" });
  }
};

module.exports = { getPost, getPosts, createPost, updatePost, deletePost };
