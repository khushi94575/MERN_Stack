const notFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        errors: []
    });
};

const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal server error";
    let errors = err.errors || [];

    // Mongoose invalid ObjectId
    if (err.name === "CastError") {
        statusCode = 400;
        message = `Invalid value for '${err.path}'`;
        errors = [];
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = "Validation failed";

        errors = Object.values(err.errors).map((error) => ({
            field: error.path,
            message: error.message
        }));
    }

    // MongoDB duplicate key
    if (err.code === 11000) {
        statusCode = 409;
        message = "Conflict";

        errors = Object.entries(err.keyValue || {}).map(
            ([field, value]) => ({
                field,
                message: `${field} '${value}' already exists`
            })
        );
    }
    res.status(statusCode).json({
    success: false,
    message,
    errors
});
}
module.exports = {
    notFound,
    errorHandler
};