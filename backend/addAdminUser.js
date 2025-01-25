require('dotenv').config(); // Ajoute cette ligne tout en haut
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');

// Connexion à MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Erreur: MONGO_URI est undefined. Vérifie ton fichier .env.');
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connexion à MongoDB réussie');

    email = '';
    password = '';

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Cet utilisateur existe déjà.');
      mongoose.disconnect();
      return;
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('Utilisateur administrateur ajouté avec succès !');

    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB', err);
  });
