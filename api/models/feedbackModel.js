const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: [true, 'The Course Code is required!'],
        enum: ['UE18CS351', 'UE18CS352', 'UE18CS353']
    },
    instructor: {
        type: String,
        required: [true, 'The Instructor Name is required!'],
        enum: ['George', 'John', 'Mia', 'Jessie']
    },
    ratings: [{
        type: Number,
        required: [true, 'The Ratings fields are required!'],
        validate: {
            validator: function (el) {
                return el > 0 && el <= 5;
            },
            message: 'The ratings field must be within 1-5.',
        },
    }, ]
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;