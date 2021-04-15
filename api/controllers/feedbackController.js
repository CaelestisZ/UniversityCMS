const Feedback = require('./../models/feedbackModel');
const catchAsync = require('./../utils/catchAsync');

// Fetches all the feedbacks
exports.getAll = catchAsync(async (req, res, next) => {
    const feedback = await Feedback.find();

    res.status(200).json({
        status: 'success',
        data: {
            feedback
        }
    });
})

// Fetches feedbacks for a particular course code
exports.getForCourseCode = catchAsync(async (req, res, next) => {
    const feedback = await Feedback.find({
        courseCode: req.params.code
    });

    res.status(200).json({
        status: 'success',
        data: {
            feedback
        }
    });
})

// Submit Feedback
exports.submit = catchAsync(async (req, res, next) => {
    const newFeedback = await Feedback.create({
        courseCode: req.body.courseCode,
        instructor: req.body.instructor,
        ratings: req.body.ratings
    });

    res.status(200).json({
        status: 'success',
        data: {
            newFeedback
        }
    });
})