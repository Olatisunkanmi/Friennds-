const express = require('express');
const POSTROUTER = require('./routes/PostsRoute');
const USERROUTER = require('./routes/UserRoutes');
const PRODUCTSROUTER = require('./routes/ProductsRoutes');
const morgan = require('morgan');
const app = express();
const AppError = require('./utils/appError');
app.use(express.json());
app.use(morgan('common'));

app.use('/api/v1/posts', POSTROUTER);
app.use('/api/v1/users', USERROUTER);
app.use('/api/v1/products', PRODUCTSROUTER);

app.use('*', (req, res, next) => {
	res.status(404).json({
		status: 'Error',
	});
	next();
});

app.use((err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';
});

module.exports = app;
