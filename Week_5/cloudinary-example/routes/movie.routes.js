const router = require('express').Router();
const Movie = require('../models/Movie.model');
const fileUploader = require('../config/cloudinary.config');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/movie-list', { movies });
    })
    .catch((err) => next(err));
});

router.get('/movies/create', (req, res, next) => {
  res.render('movies/movie-create');
});

router.post('/movies/create', fileUploader.single('image'), (req, res, next) => {
  const { title, description } = req.body;

  Movie.create({ title, description, imageUrl: req.file.path })
    .then((createdMovie) => {
      console.log(createdMovie);
    })
    .catch((err) => {
      res.redirect('/movies');
      next(err);
    });
});

router.get('/movies/edit/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render('movies/movie-edit', movie);
    })
    .catch((err) => next(err));
});

router.post('/movies/edit/:id', fileUploader.single('image'), (req, res, next) => {
  const { id } = req.params;
  const { title, description, existingImage } = req.body;

  let imageUrl;

  if (req.file) {
    imageUrl = req.file.path;
  } else {
    imageUrl = existingImage;
  }

  Movie.findByIdAndUpdate(id, { title, description, imageUrl })
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => next(err));
});

module.exports = router;
