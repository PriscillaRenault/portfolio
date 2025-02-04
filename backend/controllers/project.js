const cloudinary = require('cloudinary').v2;
const Project = require('../models/project');
const fs = require('fs');

exports.getAllProjects = (req, res, next) => {
  Project.find()
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(400).json({ error }));
};

exports.createProject = (req, res, next) => {
  try {
    const projectObject = JSON.parse(req.body.project);
    delete projectObject._id;
    delete projectObject._userId;

    const project = new Project({
      ...projectObject,
      userId: req.auth.userId,
      image: req.imageUrl,
    });

    project
      .save()
      .then(() => res.status(201).json({ message: 'Projet enregistré !' }))
      .catch((error) => res.status(400).json({ error }));
  } catch (error) {
    console.error('Erreur lors de la création du projet :', error);
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
};

exports.getOneProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(404).json({ error }));
};

exports.deleteProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => {
      if (!project) {
        return res.status(404).json({ message: 'Projet non trouvé !' });
      }

      if (project.userId != req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
      }

      // Extract public ID from image URL
      const imageUrl = project.image;
      const publicId = imageUrl
        .split('/upload/')[1]
        .split('/')
        .slice(1)
        .join('/')
        .split('.')[0];

      console.log("URL de l'image:", imageUrl);
      console.log('Public ID extrait:', publicId);

      // Control if the image is in Cloudinary
      cloudinary.api.resource(publicId, (error, result) => {
        if (error) {
          console.error(
            "Erreur lors de la récupération de l'image Cloudinary:",
            error,
          );
          return res
            .status(500)
            .json({ message: 'Erreur récupération image Cloudinary', error });
        }

        if (!result) {
          return res
            .status(404)
            .json({ message: 'Image Cloudinary non trouvée' });
        }

        // delete image in Cloudinary
        cloudinary.uploader.destroy(publicId, (error, result) => {
          if (error) {
            console.error('Erreur suppression image Cloudinary:', error);
            return res
              .status(500)
              .json({ message: 'Erreur suppression image Cloudinary', error });
          }

          console.log('Résultat suppression image Cloudinary:', result);

          if (result.result !== 'ok') {
            return res
              .status(404)
              .json({ message: 'Image Cloudinary non trouvée' });
          }

          // delete project in database
          Project.deleteOne({ _id: req.params.id })
            .then(() =>
              res
                .status(200)
                .json({ message: 'Projet supprimé avec son image !' }),
            )
            .catch((error) => res.status(500).json({ error }));
        });
      });
    })
    .catch((error) => res.status(500).json({ error }));
};
