const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  project: { type: Schema.Types.ObjectId, ref: 'Project' },
});

module.exports = model('Task', taskSchema);
