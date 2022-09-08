const AppError = (res, req) => {
	res.status(404).json({
		status: 'Error',
	});
};

module.exports = AppError;
