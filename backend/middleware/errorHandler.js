//acts like our own exception handler
const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	res.status(statusCode).json({
		msg: err.message,
		details: process.env.MODE === "developement" ? err.stack : null,
	});
};

module.exports = { errorHandler };
