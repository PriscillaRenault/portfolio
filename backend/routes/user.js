const express = require('express');
const router = express.Router();
const validateUser = require('../middleware/validateUser');

const userCtrl = require('../controllers/user');

router.post('/login', validateUser, userCtrl.login);

module.exports = router;
