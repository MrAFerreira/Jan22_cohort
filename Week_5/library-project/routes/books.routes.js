const router = require('express').Router();
const Book = require('../models/Book.model');

router.get('/books', (req, res, next) => {
  Book.find()
    .then((allBooks) => {
      //console.log(allBooks);
      res.render('books/books-list.hbs', { books: allBooks });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/books/create', (req, res, next) => {
  res.render('books/book-create.hbs');
});

router.post('/books/create', (req, res, next) => {
  const { title, author, description, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then((createdBook) => {
      console.log('Book created', createdBook.title);
      res.redirect('/books');
    })
    .catch((err) => next(err));
});

router.get('/books/:bookId', (req, res, next) => {
  const { bookId } = req.params;
  Book.findById(bookId)
    .then((foundBook) => {
      //console.log(allBooks);
      res.render('books/book-details.hbs', { book: foundBook });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/books/:bookId/edit', (req, res, next) => {
  const { bookId } = req.params;
  Book.findById(bookId)
    .then((foundBook) => {
      //console.log(allBooks);
      res.render('books/book-edit.hbs', { book: foundBook });
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/books/:bookId/edit', (req, res, next) => {
  const { bookId } = req.params;
  const { title, author, description, rating } = req.body;

  Book.findByIdAndUpdate(bookId, { title, author, description, rating })
    .then((updatedBook) => {
      res.redirect(`/books/${updatedBook._id}`);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/books/:bookId/delete', (req, res, next) => {
  const { bookId } = req.params;

  Book.findByIdAndDelete(bookId)
    .then(() => {
      res.redirect(`/books`);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
