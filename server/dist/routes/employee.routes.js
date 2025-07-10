"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express router
const express_1 = require("express");
// Create a new router
const router = (0, express_1.Router)();
// Import the employee controller
const employee_controller_1 = __importDefault(require("../controller/employee.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
router.post('/api/employee', auth_middleware_1.verifyToken, auth_middleware_1.isAdmin, employee_controller_1.default);
// Export the router
exports.default = router;
