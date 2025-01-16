const express = require('express');
const router = express.Router();

// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');
// const sharp = require('../middleware/sharp-config');
// const validateBook = require('../middleware/validateProject');

const projectCtrl = require('../controllers/projects');

router.get('/', projectCtrl.getAllProjects);

router.post('/', auth, validateBook, multer, sharp, projectCtrl.createProject);

router.put(
  '/:id',
  auth,
  validateBook,
  multer,
  sharp,
  projectCtrl.updateProject,
);

router.delete('/:id', auth, projectCtrl.deleteProject);

module.exports = router;
