const router = require('express').Router();
const mongoose = require('mongoose');

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

router.get('/tasks', (req, res, next) => {
  Task.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/tasks/:taskId', (req, res, next) => {
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Task.findById(taskId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put('/tasks/:taskId', (req, res, next) => {
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Task.findByIdAndUpdate(taskId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete('/tasks/:taskId', (req, res, next) => {
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Task.findByIdAndRemove(taskId)
    .then((deletedTask) => {
      return Project.findByIdAndUpdate(deletedTask.project, { $pull: { tasks: taskId } }).then(() =>
        res.json({ message: `Task with ${taskId} was removed successfully` })
      );
    })
    .catch((err) => res.json(err));
});

module.exports = router;
