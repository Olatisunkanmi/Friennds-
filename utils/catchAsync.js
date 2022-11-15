const AppError = require('../utils/AppError');

module.exports = (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch((err) =>
			res.status(401).json({
				status: 'Failed',
				message: err.message,
			}),
		);
	};
};
