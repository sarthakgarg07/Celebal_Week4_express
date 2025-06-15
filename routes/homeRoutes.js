/**
 * Home Routes
 * Handles home page and about page routes
 */

const express = require('express');
const router = express.Router();
const { getHome, getAbout } = require('../controllers/homeController');

// GET / - Home page
router.get('/', getHome);

// GET /about - About page
router.get('/about', getAbout);

module.exports = router; 