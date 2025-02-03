const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const validateProject = require('../middleware/validateProject');
const { upload, processImage } = require('../middleware/uploadMiddleware');

const projectCtrl = require('../controllers/project');

router.get('/', projectCtrl.getAllProjects);

router.get('/:id', projectCtrl.getOneProject);

router.post(
  '/',
  auth,
  validateProject,
  upload.single('image'),
  processImage,
  projectCtrl.createProject,
);

router.delete('/:id', auth, projectCtrl.deleteProject);

module.exports = router;
