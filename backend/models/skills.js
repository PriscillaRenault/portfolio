const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nom de la compétence, par exemple 'JavaScript'
  value: { type: Number, required: true, min: 0, max: 100 }, // Niveau en pourcentage
});

const skillCategorySchema = new mongoose.Schema({
  title: { type: String, required: true }, // Titre de la catégorie, par exemple 'Front-end'
  skills: [skillSchema], // Tableau de compétences
});

const SkillsModel = mongoose.model('SkillCategory', skillCategorySchema);

module.exports = SkillsModel;
