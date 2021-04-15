const router = require('express').Router();

const UsersController = require('../controllers/users');

router.get('/users/:id?', UsersController.get);

module.exports = router;