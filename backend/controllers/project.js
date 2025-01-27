const Project = require('../models/project');
const fs = require('fs');

exports.getAllProjects = (req, res, next) => {
  Project.find()
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(400).json({ error }));
};

exports.createProject = (req, res, next) => {
  const projectObject = JSON.parse(req.body.project);
  delete projectObject._id;
  delete projectObject._userId;

  const project = new Project({
    ...projectObject,
    userId: req.auth.userId,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  });
  project
    .save()
    .then(() => res.status(201).json({ message: 'Projet enregistré !' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOneProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(404).json({ error }));
};

exports.deleteProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => {
      if (project.userId != req.auth.userId) {
        res.status(401).json({ message: 'Not authorized' });
      } else {
        const filename = project.image.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Project.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: 'Projet supprimé !' });
            })
            .catch((error) => res.status(401).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.updateProject = (req, res, next) => {
  const projectObject = req.file
    ? {
        ...JSON.parse(req.body.project),
        image: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete projectObject._userId;

  Project.findOne({ _id: req.params.id })
    .then((project) => {
      if (project.userId != req.auth.userId) {
        res.status(401).json({ message: 'Not authorized' });
      } else {
        // delete old image if a new one is uploaded
        if (req.file) {
          const oldFilename = project.image.split('/images/')[1];
          fs.unlink(`images/${oldFilename}`, (err) => {
            if (err) {
              console.error("Erreur lors de la suppression de l'image:", err);
            }
          });
        }
        // update project
        Project.updateOne(
          { _id: req.params.id },
          { ...projectObject, _id: req.params.id },
        )
          .then(() => res.status(200).json({ message: 'Projet mis à jour !' }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
