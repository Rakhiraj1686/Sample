export const sendSuccess = (res, message, data = null, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString()
  });
};

export const sendError = (res, message, error = null, statusCode = 400) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error ? error.toString() : undefined,
    timestamp: new Date().toISOString()
  });
};
