const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: [true, 'The Course Code is required!'],
        enum: ['UE18CS351', 'UE18CS352', 'UE18CS353', 'UE18CS338', 'UE18CS348', 'UE18CS354', 'UE18CS355'],
    },
    date: {
        type: Date,
        required: [true, 'The Date is required!']
    },
    user: [{
        type: String,
        ref: 'Users',
        required: [true, 'The Student ID is required!'],
    }, ],
    status: {
        type: String,
        enum: ['P', 'Ab'],
        required: [true, 'Status (P or Ab) is required!'],
    },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;