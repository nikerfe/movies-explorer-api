const { celebrate, Joi } = require('celebrate');

module.exports.validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24).hex(),
  }),
});

module.exports.validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().alphanum().length(24).hex(),
  }),
});

module.exports.validateUserProfile = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports.validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9-@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()&\-[\]@:;!$'%_+*,.~#?&/=]*)/),
    trailer: Joi.string().required().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9-@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()&\-[\]@:;!$'%_+*,.~#?&/=]*)/),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail:Joi.string().required().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9-@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()&\-[\]@:;!$'%_+*,.~#?&/=]*)/),
    movieId: Joi.number().required()
  }),
});

module.exports.validateSignUp = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
  }),
});

module.exports.validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});
