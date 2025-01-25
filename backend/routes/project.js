const express = require('express');
const router = express.Router();

const projectCtrl = require('../controllers/project');

router.get('/', projectCtrl.getAllProjects);

router.post(
  '/',

  projectCtrl.createProject,
);

router.put(
  '/:id',

  projectCtrl.updateProject,
);

router.delete('/:id', projectCtrl.deleteProject);

module.exports = router;
