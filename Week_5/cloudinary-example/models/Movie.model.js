const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
  },
  { timestamps: true }
);

const Movie = model('Movie', movieSchema);
module.exports = Movie;
