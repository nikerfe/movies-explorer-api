const router = require('express').Router();
const {
  getMovies, deleteMovie, createMovie,
} = require('../controllers/movies');

const {
  validateMovieId, validateMovie,
} = require('../middlewares/validation');

router.get('/movies', getMovies);
router.delete('/movies/:movieId', validateMovieId, deleteMovie);
router.post('/movies', validateMovie, createMovie);

module.exports = router;
