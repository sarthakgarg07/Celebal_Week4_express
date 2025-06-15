/**
 * Error Handler Middleware
 * Handles server errors gracefully
 */
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    message: 'Internal server error',
    requestId: req.requestId,
    error: err.message
  });
};

module.exports = errorHandler; 