/**
 * Validation Middleware
 * Validates user input for creating new users
 */
const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      message: 'Validation failed',
      requestId: req.requestId,
      error: 'Name and email are required'
    });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Validation failed',
      requestId: req.requestId,
      error: 'Please provide a valid email address'
    });
  }
  
  next();
};

module.exports = {
  validateUser
}; 