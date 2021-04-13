const express = require('express');
const eventsController = require('./../controllers/eventsController');

const router = express.Router();

router.get('/', eventsController.getAll);
router.post('/', eventsController.publish);
router.get('/latestEvent', eventsController.getLatest);

module.exports = router;