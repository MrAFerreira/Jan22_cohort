const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const projectSchema = new Schema({
  title: String,
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = model('Project', projectSchema);
