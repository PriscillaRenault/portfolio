//main file of the backend

//Import dotenv to hide
require('dotenv').config();

//Main dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const projectsRoutes = require('./routes/project');

//Connect BDD MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('ECHEC Connexion à BDD MongoDB ECHEC'));

// Middleware
app.use(express.json());
app.use(bodyParser.json());

//CORS Cross Origin Resource Sharing
app.use(cors());

//Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

//Export app to server.js
module.exports = app;
