// Import the express module
import express from 'express';

const router = express.Router();

import { logIn } from '../controller/login.controller';

router.post('/api/employee/login', logIn);

export default router;