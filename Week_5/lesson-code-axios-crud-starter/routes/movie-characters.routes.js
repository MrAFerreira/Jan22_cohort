const router = require('express').Router();
const ApiService = require('../services/api.service');

const apiService = new ApiService();

router.get('/movie-characters/list', (req, res, next) => {
  apiService
    .getAllCharacters()
    .then((response) => {
      //res.json(response.data);
      res.render('pages/characters-list', { characters: response.data });
    })
    .catch((err) => next(err));
});

router.get('/movie-characters/create', (req, res, next) => {
  res.render('pages/new-character-form');
});

router.post('/movie-characters/create', (req, res, next) => {
  const { name, occupation, weapon } = req.body;

  apiService
    .createCharacter({ name, occupation, weapon })
    .then(() => {
      res.redirect('/movie-characters/list');
    })
    .catch((err) => next(err));
});

router.get('/movie-characters/edit/:id', (req, res, next) => {
  const { id } = req.params;
  apiService
    .getOneCharacter(id)
    .then((response) => {
      res.render('pages/edit-character-form', { character: response.data });
    })
    .catch((err) => next(err));
});

router.post('/movie-characters/edit/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, weapon } = req.body;

  apiService
    .editCharacter(id, { name, occupation, weapon })
    .then(() => {
      res.redirect('/movie-characters/list');
    })
    .catch((err) => next(err));
});

module.exports = router;
