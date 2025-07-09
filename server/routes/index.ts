// Import the express module
import express from 'express';

// Create an instance of express
const router = express.Router();

// Import the install routes
import installRoutes from './install.routes';

// Import the employee routes
import employeeRoutes from './employee.routes';

// Import the login routes
import loginRoutes from './login.routes';

// Use the install routes
router.use(installRoutes);

// Use the employee routes
router.use(employeeRoutes);

// Use the login routes
router.use(loginRoutes);

// Export the router to be used in other files
export default router;
