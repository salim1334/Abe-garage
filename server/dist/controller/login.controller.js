"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = logIn;
// Import the login service 
const login_service_1 = require("../services/login.service");
// Import the jsonwebtoken module
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Import the secret key from the environment variables
const jwtSecret = process.env.JWT_SECRETJWT_SECRET;
// Handle employee login 
async function logIn(req, res, next) {
    try {
        console.log(req.body);
        const employeeData = req.body;
        // Call the logIn method from the login service 
        const employee = await (0, login_service_1.login)(employeeData);
        // If the employee is not found
        if (employee.status === "fail") {
            res.status(403).json({
                status: employee.status,
                message: employee.message,
            });
            // console.log(employee.message);
        }
        // If successful, send a response to the client
        const payload = {
            employee_id: employee.data.employee_id,
            employee_email: employee.data.employee_email,
            employee_role: employee.data.company_role_id,
            employee_first_name: employee.data.employee_first_name,
        };
        const token = jsonwebtoken_1.default.sign(payload, jwtSecret, {
            expiresIn: "24h",
        });
        // console.log(token);
        const sendBack = {
            employee_token: token,
        };
        res.status(200).json({
            status: "success",
            message: "Employee logged in successfully",
            data: sendBack,
        });
    }
    catch (error) {
        res.status(403).json({
            status: 'fail',
            message: 'Error while login'
        });
    }
}
