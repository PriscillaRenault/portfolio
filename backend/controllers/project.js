const Project = require('../models/project');
const fs = require('fs');

exports.getAllProjects = (req, res, next) => {
  const language = req.query.lang || 'fr'; // Récupérer la langue depuis la requête, 'fr' par défaut
  Project.find()
    .then((projects) => {
      const projectsWithLanguage = projects.map((project) => ({
        title: project.title[language], // Récupérer le titre dans la langue demandée
        description: project.description[language], // Récupérer la description dans la langue demandée
        image: project.image,
        skills: project.skills,
        github: project.github,
      }));
      res.status(200).json(projectsWithLanguage);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.createProject = (req, res, next) => {
  try {
    if (!req.body.project) {
      return res.status(400).json({ message: 'Données du projet manquantes' });
    }

    const projectObject = JSON.parse(req.body.project);

    // Vérification des champs obligatoires
    if (
      !projectObject.title ||
      !projectObject.title.fr ||
      !projectObject.title.en
    ) {
      return res
        .status(400)
        .json({ message: 'Le titre est requis en français et en anglais' });
    }
    if (
      !projectObject.description ||
      !projectObject.description.fr ||
      !projectObject.description.en
    ) {
      return res.status(400).json({
        message: 'La description est requise en français et en anglais',
      });
    }
    if (!req.file) {
      return res.status(400).json({ message: "L'image est requise" });
    }

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
      .catch((error) => res.status(500).json({ error }));
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de la création du projet',
      error: error.message,
    });
  }
};

exports.getOneProject = (req, res, next) => {
  const language = req.query.lang || 'fr'; // Récupérer la langue depuis la requête, 'fr' par défaut
  Project.findOne({ _id: req.params.id })
    .then((project) => {
      if (!project) {
        return res.status(404).json({ error: 'Projet non trouvé' });
      }

      res.status(200).json({
        title: project.title[language], // Récupérer le titre dans la langue demandée
        description: project.description[language], // Récupérer la description dans la langue demandée
        image: project.image,
        skills: project.skills,
        github: project.github,
      });
    })
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
