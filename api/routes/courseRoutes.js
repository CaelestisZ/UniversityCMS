const express = require('express');
const courseController = require('./../controllers/courseController');

const router = express.Router();

router.get('/', courseController.getAll);
router.get('/:code', courseController.getCode);
router.post('/', courseController.update);

module.exports = router;