const Post = require("../models/postModel");
const ErrorResponse = require("../utils/errorResponse");

//create blog
exports.createPost = async (req, res, next) => {
  const { title, content, author, likes, comments } = req.body;

  try {
    const post = await Post.create({
      title,
      content,
      author: req.user._id,
    });
    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Show posts
exports.showPost = async (req, res, next) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("author", "firstName" + " lastName");
    res.status(201).json({
      success: true,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

//Show single post
exports.showSinglePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "comments.author",
      "firstName" + " lastName"
    );
    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};

//Delete post
exports.deletePost = async (req, res, next) => {
  const currentPost = await Post.findById(req.params.id);
  try {
    const post = await Post.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "post deleted",
    });
  } catch (error) {
    next(error);
  }
};

//Update post
exports.updatePost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const currentPost = await Post.findById(req.params.id);

    //build the object data
    const data = {
      title: title || currentPost.title,
      content: content || currentPost.content,
    };

    const postUpdate = await Post.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    res.status(200).json({
      success: true,
      postUpdate,
    });
  } catch (error) {}
};

//add comment
exports.addComment = async (req, res, next) => {
  const { comment } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: { comments: { text: comment, author: req.user._id } },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};

// Add like
exports.addLike = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likes: req.user._id },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};

//remove like
exports.removeLike = async (req, res, next) => {
  const { comment } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likes: req.user._id },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};
