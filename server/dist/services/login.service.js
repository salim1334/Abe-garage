"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
// Import the bcrypt module to do the password comparison
const bcrypt_1 = __importDefault(require("bcrypt"));
// Import the employee service to get employee by email
const employee_service_1 = require("./employee.service");
// Handle employee login
async function login(employeeData) {
    try {
        let returnData = {}; // Object to be returned
        const employee = await (0, employee_service_1.getEmployeeByEmail)(employeeData.employee_email);
        if (employee.length === 0) {
            returnData = {
                status: 'fail',
                message: 'Employee does not exist',
            };
            return returnData;
        }
        console.log('employeeData.employee_password (entered):', employeeData.employee_password);
        console.log('employee[0].employee_password_hashed (from DB):', employee[0].employee_password_hashed);
        const passwordMatch = await bcrypt_1.default.compare(employeeData.employee_password, employee[0].employee_password_hashed);
        console.log('Password match result:', passwordMatch);
        if (!passwordMatch) {
            returnData = {
                status: 'fail',
                message: 'Incorrect password',
            };
            return returnData;
        }
        returnData = {
            status: 'success',
            data: employee[0],
        };
        return returnData;
    }
    catch (error) {
        console.error("error during login: " + error);
    }
}
