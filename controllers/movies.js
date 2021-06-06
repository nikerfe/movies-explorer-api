const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ })
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

/* check 403 */
module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.cardId)
    .then((movie) => {
      if (!movie) {
        throw (new NotFoundError('Запрашиваемая карточка не найдена'));
      } else if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError(
          'Эту карточку может удалить только владелец',
        );
      }
      Movie.findByIdAndRemove(req.params.cardId)
        .then((movieRemove) => res.status(200).send(movieRemove));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Указан не верный id карточки');
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Введены некорректные данные');
      }
    })
    .catch(next);
};
