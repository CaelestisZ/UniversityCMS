const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: [true, 'The Course Code is required!'],
        enum: ['UE18CS351', 'UE18CS352', 'UE18CS353']
    },
    topic: {
        type: String,
        required: [true, 'The Topic Name is required!']
    },
    article: {
        type: String,
        required: [true, 'The Article is required!']
    },
    video: {
        type: String,
        required: [true, 'The Video Embedding is mandatory.']
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;