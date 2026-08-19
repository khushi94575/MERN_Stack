const createError=(statusCode,message,errors)=>{
    const error=new Error(message);
    error.statusCode=statusCode;
    error.errors=errors;
    return error;
}

const badRequest = (message, errors = []) =>
    createError(400, message, errors);

const unauthorized = (message = "Unauthorized") =>
    createError(401, message);

const forbidden = (message = "Forbidden") =>
    createError(403, message);

const notFound = (message = "Resource not found") =>
    createError(404, message);

const conflict = (message = "Conflict", errors = []) =>
    createError(409, message, errors);

module.exports = {
    createError,
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    conflict
};