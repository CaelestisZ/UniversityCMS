const express = require('express');
const attendanceController = require('./../controllers/attendanceController');

const router = express.Router();

router.get('/:id/:code', attendanceController.getAttendanceForUser);
router.get('/:date', attendanceController.getForDate);
router.get('/', attendanceController.getAll);
router.post('/', attendanceController.update);

module.exports = router;