const AppError = require('../utils/AppError');

const handleErrorDB = (err) => {
	const message = `Invallid ${err.path} : ${err.value}. `;
	return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		err: err,
		stack: err.stack,
	});
};

// Prod level
const sendErrorProd = (err, res) => {
	if (err.isOperational) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err,
		});
	}
	//      Avoid sending error details unknown.
	//   remember OPerational err is from CL.
	else {
		// log error
		console.error('ERROR 🔥');

		// 2. send generic message
		res.status(500).json({
			status: 'error',
			message: 'Something went very wrong',
		});
	}
};

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	if (process.env.NODE_ENV === 'development') {
		let error = { ...err };
		// console.log(err);
		if (err.name == 'CastError ') error = handleErrorDB(err);
		sendErrorDev(err, res);
	} else if (process.env.NODE_ENV === 'production') {
		/**
		 * Handing Mongo DB errors esp. during prod.
		 */
		let error = { ...err };

		if (error.name == 'CastError ') error = handleErrorDB(err);

		sendErrorProd(error, res);
	}
};
