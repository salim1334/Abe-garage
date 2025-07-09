"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express module
const express_1 = __importDefault(require("express"));
// Create an instance of express
const router = express_1.default.Router();
// Import the install controller
const install_controller_1 = require("../controller/install.controller");
// Create a route to install the database
router.get('/install', install_controller_1.install);
// Export the router to be used in other files
exports.default = router;
