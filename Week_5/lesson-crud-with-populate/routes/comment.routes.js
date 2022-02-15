const router = require('express').Router();

const User = require('../models/User.model');
const Post = require('../models/Post.model');
const Comment = require('../models/Comment.model');

// ****************************************************************************************
// POST route - create a comment of a specific post
// ****************************************************************************************

router.post('/posts/:id/comment', (req, res, next) => {
  const { id } = req.params;
  const { author, content } = req.body;

  let user;

  User.findOne({ username: author })
    .then((userFromDb) => {
      user = userFromDb;

      if (!userFromDb) {
        return User.create({ username: author });
      }
    })
    .then((newUser) => {
      Post.findById(id).then((dbPost) => {
        let newComment;

        if (newUser) {
          newComment = new Comment({ author: newUser._id, content });
        } else {
          newComment = new Comment({ author: user._id, content });
        }

        newComment.save().then((dbComment) => {
          dbPost.comments.push(dbComment._id);

          dbPost.save().then((updatedPost) => res.redirect(`/posts/${updatedPost._id}`));
        });
      });
    })
    .catch((err) => next(err));
});

module.exports = router;
