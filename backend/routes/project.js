const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const validateProject = require('../middleware/validateProject');
const multer = require('../middleware/multer-config');
const sharp = require('../middleware/sharp-config');

const projectCtrl = require('../controllers/project');

router.get('/', projectCtrl.getAllProjects);

router.get('/:id', projectCtrl.getOneProject);
router.post(
  '/',

  auth,
  validateProject,
  multer,
  sharp,
  projectCtrl.createProject,
);

router.put(
  '/:id',

  projectCtrl.updateProject,
);

router.delete('/:id', auth, projectCtrl.deleteProject);

module.exports = router;
