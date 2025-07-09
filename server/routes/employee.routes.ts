// Import the express router
import { Router } from 'express';

// Create a new router
const router = Router();

// Import the employee controller
import createEmployee from '../controller/employee.controller';

router.post('/api/employee', createEmployee);

// Export the router
export default router;