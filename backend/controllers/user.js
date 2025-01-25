const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: 'Identifiant ou mot de passe incorrect' });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: 'Identifiant ou mot de passe incorrect' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', {
              expiresIn: '24h',
            }),
          });
        })
        .catch((error) =>
          res
            .status(500)
            .json({ message: 'Erreur de vérification du mot de passe', error }),
        );
    })
    .catch((error) =>
      res
        .status(500)
        .json({ message: 'Erreur de connexion à la base de données', error }),
    );
};
