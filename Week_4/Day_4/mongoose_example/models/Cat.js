//npm i mongoose
const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    //unique: true,
  },
  color: {
    type: String,
    enum: ['white', 'black', 'grey', 'yellow'],
  },
  age: {
    type: Number,
    min: 0,
    max: 30,
  },
  avatar: {
    type: String,
    default: 'https://forums.x-pilot.com/uploads/profile/photo-18964.jpg',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  owners: [String],
});

//The model uses the schema

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
