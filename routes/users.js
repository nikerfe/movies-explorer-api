const router = require('express').Router();
const {
  getUser, updateUser,
} = require('../controllers/users');

const {
  validateUserProfile,
} = require('../middlewares/validation');

router.get('/users/me', getUser);
router.patch('/users/me', validateUserProfile, updateUser);

module.exports = router;
