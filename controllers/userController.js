/**
 * User Controller
 * Handles user-related operations
 */

// Mock user data
const users = [
  { id: 1, name: 'Amit Sharma', email: 'amit.sharma@example.com', createdAt: '2024-01-01T00:00:00.000Z' },
  { id: 2, name: 'Priya Singh', email: 'priya.singh@example.com', createdAt: '2024-01-02T00:00:00.000Z' },
  { id: 3, name: 'Rahul Verma', email: 'rahul.verma@example.com', createdAt: '2024-01-03T00:00:00.000Z' }
];

const getAllUsers = (req, res) => {
  const data = {
    title: 'Users - Express.js Web Server',
    message: 'Users retrieved successfully',
    requestId: req.requestId,
    count: users.length,
    users: users
  };
  
  res.render('users', data);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (user) {
    const data = {
      title: `User ${user.name} - Express.js Web Server`,
      message: 'User found',
      requestId: req.requestId,
      user: user
    };
    
    res.render('user-detail', data);
  } else {
    const data = {
      title: 'User Not Found - Express.js Web Server',
      message: 'User not found',
      requestId: req.requestId,
      error: `No user found with ID ${userId}`,
      userId: userId
    };
    
    res.status(404).render('error', data);
  }
};

const createUserForm = (req, res) => {
  const data = {
    title: 'Create User - Express.js Web Server',
    message: 'Create a new user',
    requestId: req.requestId
  };
  
  res.render('create-user', data);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  
  // Simulate creating a new user
  const newUser = {
    id: Math.floor(Math.random() * 1000) + 4,
    name: name,
    email: email,
    createdAt: new Date().toISOString()
  };
  
  // Add to users array (in a real app, this would go to a database)
  users.push(newUser);
  
  const data = {
    title: 'User Created - Express.js Web Server',
    message: 'User created successfully',
    requestId: req.requestId,
    user: newUser
  };
  
  res.status(201).render('user-created', data);
};

// JSON API endpoints for API clients
const getAllUsersJSON = (req, res) => {
  res.json({
    message: 'Users retrieved successfully',
    requestId: req.requestId,
    count: users.length,
    users: users
  });
};

const getUserByIdJSON = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (user) {
    res.json({
      message: 'User found',
      requestId: req.requestId,
      user: user
    });
  } else {
    res.status(404).json({
      message: 'User not found',
      requestId: req.requestId,
      error: `No user found with ID ${userId}`
    });
  }
};

const createUserJSON = (req, res) => {
  const { name, email } = req.body;
  
  // Simulate creating a new user
  const newUser = {
    id: Math.floor(Math.random() * 1000) + 4,
    name: name,
    email: email,
    createdAt: new Date().toISOString()
  };
  
  // Add to users array
  users.push(newUser);
  
  res.status(201).json({
    message: 'User created successfully',
    requestId: req.requestId,
    user: newUser
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUserForm,
  createUser,
  getAllUsersJSON,
  getUserByIdJSON,
  createUserJSON
}; 