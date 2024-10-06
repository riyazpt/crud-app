
export const handleSuccessResponse = (res, statusCode, data, message = 'Success') => {
    return res.status(statusCode).json({
        status: 'success',
        message: message,
        data: data,
    });
};

export const handleErrorResponse = (res, statusCode, error, message = 'An error occurred') => {
    return res.status(statusCode).json({
        status: 'error',
        message: message,
        error: error.message || error,
    });
};
