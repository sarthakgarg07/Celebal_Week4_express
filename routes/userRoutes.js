/**
 * User Routes
 * Handles user-related routes
 */

const express = require('express');
const router = express.Router();
const { 
  getAllUsers, 
  getUserById, 
  createUserForm, 
  createUser,
  getAllUsersJSON,
  getUserByIdJSON,
  createUserJSON
} = require('../controllers/userController');
const { validateUser } = require('../middleware');

// HTML Routes (render Pug templates)
router.get('/users', getAllUsers);
router.get('/users/create', createUserForm);
router.get('/users/:id', getUserById);
router.post('/users', validateUser, createUser);

// JSON API Routes
router.get('/api/users', getAllUsersJSON);
router.get('/api/users/:id', getUserByIdJSON);
router.post('/api/users', validateUser, createUserJSON);

module.exports = router; 