/**
 * Home Controller
 * Handles home page related logic
 */

const getHome = (req, res) => {
  const data = {
    title: 'Express.js Web Server',
    message: 'Welcome to the Express.js Web Server!',
    requestId: req.requestId,
    timestamp: new Date().toISOString(),
    endpoints: [
      { method: 'GET', path: '/', description: 'Home page' },
      { method: 'GET', path: '/users', description: 'Get all users' },
      { method: 'GET', path: '/users/:id', description: 'Get user by ID' },
      { method: 'POST', path: '/users', description: 'Create a new user' },
      { method: 'GET', path: '/about', description: 'About page' }
    ]
  };
  
  res.render('home', data);
};

const getAbout = (req, res) => {
  const data = {
    title: 'About - Express.js Web Server',
    message: 'About this Express.js Server',
    requestId: req.requestId,
    version: '1.0.0',
    description: 'A simple Express.js web server demonstrating basic routing, middleware, controllers, and Pug templates',
    features: [
      'Basic routing with multiple endpoints',
      'Custom middleware for logging and request tracking',
      'JSON response handling',
      'Error handling',
      'Request parameter parsing',
      'Organized middleware structure',
      'MVC architecture with controllers',
      'Pug template engine',
      'Separate route files'
    ]
  };
  
  res.render('about', data);
};

module.exports = {
  getHome,
  getAbout
}; 