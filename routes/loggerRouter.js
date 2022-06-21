const LoggerController = require('../controller/loggerController');
const router = require('express').Router();

router.get('/', LoggerController.login);
router.post('/', LoggerController.register);

module.exports = router;