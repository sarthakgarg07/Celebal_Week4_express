/**
 * Middleware Index
 * Exports all middleware functions for easier importing
 */

const logger = require('./logger');
const requestId = require('./requestId');
const errorHandler = require('./errorHandler');
const notFound = require('./notFound');
const { validateUser } = require('./validation');

module.exports = {
  logger,
  requestId,
  errorHandler,
  notFound,
  validateUser
}; 