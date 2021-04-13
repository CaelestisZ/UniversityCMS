const Events = require('./../models/eventsModel');
const catchAsync = require('./../utils/catchAsync');

// Fetches all the current events
exports.getAll = catchAsync(async (req, res, next) => {
    const events = await Events.find();

    res.status(200).json({
        status: 'success',
        data: {
            events
        }
    });
})

// Fetches the latest event
exports.getLatest = catchAsync(async (req, res, next) => {
    const latestEvent = await Events.find({}).sort({
        _id: -1
    }).limit(1);

    res.status(200).json({
        status: 'success',
        data: {
            latestEvent
        }
    })
})

// Insert a new event
exports.publish = catchAsync(async (req, res, next) => {
    const newEvent = await Events.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    });

    res.status(200).json({
        status: 'success',
        data: {
            newEvent
        }
    });
})