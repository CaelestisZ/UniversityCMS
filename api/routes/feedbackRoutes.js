const express = require('express');
const feedbackController = require('./../controllers/feedbackController');

const router = express.Router();

router.post('/', feedbackController.submit);
router.get('/', feedbackController.getAll);

module.exports = router;