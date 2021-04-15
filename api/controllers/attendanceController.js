const Attendance = require('./../models/attendanceModel');
const catchAsync = require('./../utils/catchAsync');
const moment = require('moment');

// Fetches all attendance in db
exports.getAll = catchAsync(async (req, res, next) => {
    const attendance = await Attendance.find();

    res.status(200).json({
        status: 'success',
        data: {
            attendance
        }
    });
})

exports.getAttendanceForUser = catchAsync(async (req, res, next) => {
    const attendanceCount = await Attendance.count({
        user: req.params.id,
        courseCode: req.params.code,
        status: "P"
    });

    res.status(200).json({
        status: 'success',
        count: attendanceCount
    });
})

// Fetches the attendance for a particular date
exports.getForDate = catchAsync(async (req, res, next) => {
    const attendance = await Attendance.find({
        date: {
            $gte: req.params.date,
            $lte: req.params.date
        }
    });

    res.status(200).json({
        status: 'success',
        data: {
            attendance
        }
    });
})

// Updates a particular attendance field
exports.update = catchAsync(async (req, res, next) => {

    const newAttendance = await Attendance.create({
        courseCode: req.body.courseCode,
        date: req.body.date,
        user: req.body.user,
        status: req.body.status
    });

    res.status(200).json({
        status: 'success',
        data: {
            newAttendance
        }
    });
})