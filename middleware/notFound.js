/**
 * 404 Not Found Middleware
 * Returns appropriate responses for undefined routes
 */
const notFound = (req, res) => {
  res.status(404).json({
    message: 'Route not found',
    requestId: req.requestId,
    error: `Cannot ${req.method} ${req.url}`,
    availableRoutes: ['GET /', 'GET /users', 'GET /users/:id', 'POST /users', 'GET /about']
  });
};

module.exports = notFound; 