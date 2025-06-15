/**
 * Request ID Middleware
 * Adds a unique ID to each request for tracking
 */
const requestId = (req, res, next) => {
  req.requestId = Math.random().toString(36).substr(2, 9);
  console.log(`Request ID: ${req.requestId}`);
  next();
};

module.exports = requestId; 