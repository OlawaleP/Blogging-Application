const express = require('express');
const router = express.Router();
const { createPost, showPost, showSinglePost, deletePost, updatePost, addComment, addLike, removeLike } = require('../controllers/postController');
const { isAuthenticate, isAuthor } = require('../middleware/auth');

//blog routes
router.post('/post/create', isAuthenticate, isAuthor, createPost)
router.get('/posts/all', showPost);
router.get('/post/:id', showSinglePost);
router.delete('/delete/post/:id', isAuthenticate, isAuthor, deletePost);
router.put('/update/post/:id', isAuthenticate, isAuthor, updatePost);
router.put('/comment/post/:id', isAuthenticate, addComment);
router.put('/addlike/post/:id', isAuthenticate, addLike);
router.put('/removelike/post/:id', isAuthenticate, removeLike);


module.exports = router;