const { body, validationResult } = require('express-validator');

const validateProject = [
  body('title').trim(),

  body('description').trim(),

  body('github').trim(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateProject;
