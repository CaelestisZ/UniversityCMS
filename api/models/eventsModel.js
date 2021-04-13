const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'The Event Title is required!'],
        unique: true,
        maxlength: 40
    },
    description: {
        type: String,
        required: [true, 'The Event Description is required!'],
        minlength: 20
    },
    date: {
        type: Date,
        required: [true, 'The Event Date is required!']
    }
});

const Events = mongoose.model('Events', eventSchema);

module.exports = Events;