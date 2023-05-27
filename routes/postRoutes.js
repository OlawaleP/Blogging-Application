const express = require('express');
const router = express.Router();
const { createPost, showPost, showSinglePost, deletePost, updatePost, addComment, addLike, removeLike } = require('../controllers/postController');
const { isAuthenticate, isAuthor } = require('../middleware/auth');

//blog routes
router.post('/create', isAuthenticate, isAuthor, createPost)
router.get('/all', showPost);
router.get('/:id', showSinglePost);
router.delete('/delete/:id', isAuthenticate, isAuthor, deletePost);
router.put('/update/:id', isAuthenticate, isAuthor, updatePost);
router.put('/comment/:id', isAuthenticate, addComment);
router.put('/addlike/:id', isAuthenticate, addLike);
router.put('/removelike/:id', isAuthenticate, removeLike);


module.exports = router;