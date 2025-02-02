const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: {
    fr: { type: String, required: true },
    en: { type: String, required: true },
  },
  image: { type: String, required: true },
  description: {
    fr: { type: String, required: true },
    en: { type: String, required: true },
  },
  skills: [{ type: String }],
  github: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);
