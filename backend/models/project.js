const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  skills: [{ type: String }],
  issues: [{ type: String }],
  github: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);
