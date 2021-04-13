const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const eventsRouter = require('./routes/eventsRoutes');
const attendanceRouter = require('./routes/attendanceRoutes');
const courseRouter = require('./routes/courseRoutes');
const feedbackRouter = require('./routes/feedbackRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json());

app.use(cors());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 3) ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/events', eventsRouter);
app.use('/api/v1/attendance', attendanceRouter);
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/feedback', feedbackRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;