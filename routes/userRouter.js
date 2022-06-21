const UserController = require('../controller/userController');

const router = require('express').Router();

router.get('/', UserController.getAll);
router.get('/:username', UserController.getOne);

module.exports = router;