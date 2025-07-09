"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express module
const express_1 = __importDefault(require("express"));
// Create an instance of express
const router = express_1.default.Router();
// Import the install routes
const install_routes_1 = __importDefault(require("./install.routes"));
// Import the employee routes
const employee_routes_1 = __importDefault(require("./employee.routes"));
// Import the login routes
const login_routes_1 = __importDefault(require("./login.routes"));
// Use the install routes
router.use(install_routes_1.default);
// Use the employee routes
router.use(employee_routes_1.default);
// Use the login routes
router.use(login_routes_1.default);
// Export the router to be used in other files
exports.default = router;
