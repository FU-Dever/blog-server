const multer = require('multer');
const PostController = require('../controller/postController');
const router = require('express').Router();
const upload = multer();

router.patch('/:username', upload.single('image'), PostController.post);
router.get('/:username', PostController.get);

module.exports = router;