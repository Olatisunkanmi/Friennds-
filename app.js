const express = require('express');
const morgan = require('morgan');
const app = express();
const AppError = require('./utils/AppError');
const errController = require('./Controllers/errorController');
const USERROUTER = require('./routes/UserRoutes');

app.use(express.json());
app.use(morgan('common'));

app.get('/api/v1/', (req, res) => {
	res.send('Welcome to Cracked Ink');
});

app.use('/api/v1/users', USERROUTER);

app.all('*', (req, res, next) => {
	next(
		new AppError(
			`Can't find ${req.originalUrl} on this server!!`,
			404,
		),
	);
});

app.use(errController);

module.exports = app;
