const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs-extra');
const cloudinary = require('./cloudinaryConfig');

// Configuration de Multer pour stocker temporairement les fichiers
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware de conversion WebP et envoi à Cloudinary
const processImage = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Aucune image envoyée' });
  }

  try {
    // Créer un chemin temporaire pour le fichier WebP
    const tempPath = path.join(__dirname, 'temp', `${Date.now()}.webp`);
    await fs.ensureDir(path.join(__dirname, 'temp')); // Assure que le dossier existe

    // Convertir l'image en WebP avec Sharp
    await sharp(req.file.buffer)
      .webp({ quality: 80 }) // Ajuste la qualité selon tes besoins
      .toFile(tempPath);

    // Upload sur Cloudinary
    const result = await cloudinary.uploader.upload(tempPath, {
      folder: 'portfolio-images', // Dossier Cloudinary
      use_filename: true,
      resource_type: 'image',
    });

    // Supprimer le fichier temporaire
    await fs.remove(tempPath);

    // Ajouter l'URL Cloudinary dans la requête
    req.imageUrl = result.secure_url;
    next();
  } catch (error) {
    console.error("Erreur lors du traitement de l'image :", error);
    res.status(500).json({ error: "Erreur lors du traitement de l'image" });
  }
};

module.exports = { upload, processImage };
