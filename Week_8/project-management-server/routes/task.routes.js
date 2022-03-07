const router = require('express').Router();

const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

router.post('/tasks', (req, res, next) => {
  const { title, description, projectId } = req.body;

  Task.create({ title, description, project: projectId })
    .then((newTask) => {
      return Project.findByIdAndUpdate(projectId, { $push: { tasks: newTask._id } }, { new: true });
    })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

module.exports = router;
