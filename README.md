# Express.js Web Server

A simple Express.js web server demonstrating basic routing and middleware functionality with organized folder structure.

## Features

- ✅ Basic Express.js server setup
- ✅ Multiple API endpoints
- ✅ Organized middleware structure in separate folder
- ✅ Custom middleware for logging and request tracking
- ✅ JSON response handling
- ✅ Error handling and 404 responses
- ✅ Request parameter parsing
- ✅ Input validation with email format checking

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
# Production mode
npm start

# Development mode (with auto-restart)
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### 1. GET / - Home Page
Returns server information and available endpoints.

**Response:**
```json
{
  "message": "Welcome to the Express.js Web Server!",
  "requestId": "abc123def",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "endpoints": {
    "home": "GET /",
    "users": "GET /users",
    "userById": "GET /users/:id",
    "createUser": "POST /users",
    "about": "GET /about"
  }
}
```

### 2. GET /users - Get All Users
Returns a list of all users.

**Response:**
```json
{
  "message": "Users retrieved successfully",
  "requestId": "abc123def",
  "count": 3,
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bob@example.com"
    }
  ]
}
```

### 3. GET /users/:id - Get User by ID
Returns a specific user by their ID.

**Parameters:**
- `id` (number): User ID

**Response (Success):**
```json
{
  "message": "User found",
  "requestId": "abc123def",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response (Not Found):**
```json
{
  "message": "User not found",
  "requestId": "abc123def",
  "error": "No user found with ID 999"
}
```

### 4. POST /users - Create New User
Creates a new user with validation.

**Request Body:**
```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

**Response (Success):**
```json
{
  "message": "User created successfully",
  "requestId": "abc123def",
  "user": {
    "id": 456,
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Response (Validation Error):**
```json
{
  "message": "Validation failed",
  "requestId": "abc123def",
  "error": "Name and email are required"
}
```

**Response (Email Validation Error):**
```json
{
  "message": "Validation failed",
  "requestId": "abc123def",
  "error": "Please provide a valid email address"
}
```

### 5. GET /about - About Page
Returns information about the server.

**Response:**
```json
{
  "message": "About this Express.js Server",
  "requestId": "abc123def",
  "version": "1.0.0",
  "description": "A simple Express.js web server demonstrating basic routing and middleware",
  "features": [
    "Basic routing with multiple endpoints",
    "Custom middleware for logging and request tracking",
    "JSON response handling",
    "Error handling",
    "Request parameter parsing",
    "Organized middleware structure"
  ]
}
```

## Middleware

The server includes several organized middleware components:

### Core Middleware
1. **JSON Parser**: Parses incoming JSON requests
2. **URL Encoded Parser**: Parses URL-encoded form data

### Custom Middleware (in `/middleware` folder)
1. **Logger** (`logger.js`): Logs all incoming requests with timestamps
2. **Request ID** (`requestId.js`): Adds a unique ID to each request for tracking
3. **Validation** (`validation.js`): Validates user input with email format checking
4. **404 Handler** (`notFound.js`): Returns appropriate responses for undefined routes
5. **Error Handler** (`errorHandler.js`): Handles server errors gracefully

## Testing the API

You can test the endpoints using curl, Postman, or any HTTP client:

### Test GET endpoints:
```bash
# Home page
curl http://localhost:3000/

# Get all users
curl http://localhost:3000/users

# Get user by ID
curl http://localhost:3000/users/1

# About page
curl http://localhost:3000/about
```

### Test POST endpoint:
```bash
# Create a new user (valid)
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Johnson", "email": "alice@example.com"}'

# Test validation (missing fields)
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Johnson"}'

# Test email validation (invalid email)
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Johnson", "email": "invalid-email"}'
```

## Project Structure

```
express-web-server/
├── middleware/              # Middleware folder
│   ├── index.js            # Middleware exports
│   ├── logger.js           # Request logging middleware
│   ├── requestId.js        # Request ID generator
│   ├── validation.js       # Input validation middleware
│   ├── notFound.js         # 404 handler
│   └── errorHandler.js     # Error handler
├── package.json            # Project dependencies and scripts
├── server.js              # Main server file
└── README.md              # This file
```

## Dependencies

- **express**: Web framework for Node.js
- **nodemon**: Development dependency for auto-restarting the server

## Benefits of Organized Middleware

1. **Modularity**: Each middleware function is in its own file
2. **Reusability**: Middleware can be easily reused across different routes
3. **Maintainability**: Easier to maintain and update individual middleware
4. **Testing**: Each middleware can be tested independently
5. **Scalability**: Easy to add new middleware without cluttering the main server file

## Resources

This project was created based on the following resources:
- [Creating a Basic Server with Express.js](https://www.iamtimsmith.com/blog/creating-a-basic-server-with-express-js)
- Express.js official documentation

## License

MIT 