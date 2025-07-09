// Import the express module
import express from 'express';

// Create an instance of express
const router = express.Router();

// Import the install controller
import { install } from '../controller/install.controller';

// Create a route to install the database
router.get('/install', install);

// Export the router to be used in other files
export default router;
