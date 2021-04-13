const Course = require('./../models/courseModel');
const catchAsync = require('./../utils/catchAsync');

// Fetches all attendance in db
exports.getAll = catchAsync(async (req, res, next) => {
    const course = await Course.find();

    res.status(200).json({
        status: 'success',
        data: {
            course
        }
    });
})

// Get all the content of a specific course
exports.getCode = catchAsync(async (req, res, next) => {
    const course = await Course.find({
        courseCode: req.params.code
    });

    res.status(200).json({
        status: 'success',
        data: {
            course
        }
    });
})

// Updates a particular attendance field
exports.update = catchAsync(async (req, res, next) => {
    const newCourse = await Course.create({
        courseCode: req.body.courseCode,
        topic: req.body.topic,
        article: req.body.article,
        video: req.body.video
    });

    res.status(200).json({
        status: 'success',
        data: {
            newCourse
        }
    });
})