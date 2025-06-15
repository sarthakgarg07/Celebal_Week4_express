const express = require('express');
const path = require('path');
const { logger, requestId, errorHandler, notFound } = require('./middleware');

// Import routes
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Custom middleware for logging requests
app.use(logger);

// Custom middleware for adding request ID
app.use(requestId);

// Serve static files (if any)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', homeRoutes);
app.use('/', userRoutes);

// JSON API endpoints (for API clients)
app.get('/api', (req, res) => {
  res.json({
    message: 'Express.js Web Server API',
    requestId: req.requestId,
    timestamp: new Date().toISOString(),
    endpoints: {
      home: 'GET /',
      users: 'GET /users',
      userById: 'GET /users/:id',
      createUser: 'POST /users',
      about: 'GET /about',
      apiUsers: 'GET /api/users',
      apiUserById: 'GET /api/users/:id',
      apiCreateUser: 'POST /api/users'
    }
  });
});

// 404 middleware for handling undefined routes
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Available endpoints:`);
  console.log(`   GET  / - Home page (HTML)`);
  console.log(`   GET  /users - Users list (HTML)`);
  console.log(`   GET  /users/create - Create user form (HTML)`);
  console.log(`   GET  /users/:id - User details (HTML)`);
  console.log(`   POST /users - Create user (HTML form)`);
  console.log(`   GET  /about - About page (HTML)`);
  console.log(`   GET  /api - API information (JSON)`);
  console.log(`   GET  /api/users - Users list (JSON)`);
  console.log(`   GET  /api/users/:id - User details (JSON)`);
  console.log(`   POST /api/users - Create user (JSON)`);
  console.log(`📁 Organized structure:`);
  console.log(`   ├── Controllers (MVC pattern)`);
  console.log(`   ├── Routes (separate route files)`);
  console.log(`   ├── Views (Pug templates)`);
  console.log(`   └── Middleware (organized folder)`);
}); 