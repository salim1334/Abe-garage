// Import the express router
import { Router } from 'express';

// Create a new router
const router = Router();

// Import the employee controller
import {
  createEmployees,
  getAllEmployees,
} from '../controller/employee.controller';
import { verifyToken, isAdmin } from '../middlewares/auth.middleware';

router.post('/api/employee', verifyToken, isAdmin, createEmployees);

router.get('/api/employees', verifyToken, isAdmin, getAllEmployees);

// Export the router
export default router;