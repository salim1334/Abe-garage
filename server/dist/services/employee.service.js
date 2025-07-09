"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfEmployeeExists = checkIfEmployeeExists;
exports.createEmployee = createEmployee;
// Import the query function from the db.config.js file
const db_config_1 = __importDefault(require("../config/db.config"));
// Import the bcrypt module
const bcrypt_1 = __importDefault(require("bcrypt"));
// A function to check if employee exists in the database
async function checkIfEmployeeExists(email) {
    const query = 'SELECT * FROM employee WHERE employee_email = ? ';
    const rows = await db_config_1.default.query(query, [email]);
    console.log(rows);
    if (rows.length > 0) {
        return true;
    }
    return false;
}
// A function to create a new employee
async function createEmployee(employee) {
    let createdEmployee = {};
    try {
        // Generate a salt and hash the password
        const salt = await bcrypt_1.default.genSalt(10);
        // Hash the password
        const hashedPassword = await bcrypt_1.default.hash(employee.employee_password, salt);
        // Insert the email in to the employee table
        const query = 'INSERT INTO employee (employee_email, active_employee) VALUES (?, ?)';
        const rows = await db_config_1.default.query(query, [
            employee.employee_email,
            employee.active_employee,
        ]);
        console.log(rows);
        if (rows.affectedRows !== 1) {
            return false;
        }
        // Get the employee id from the insert
        const employee_id = rows.insertId;
        // Insert the remaining data in to the employee_info, employee_pass, and employee_role tables
        const query2 = 'INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone) VALUES (?, ?, ?, ?)';
        const rows2 = await db_config_1.default.query(query2, [
            employee_id,
            employee.employee_first_name,
            employee.employee_last_name,
            employee.employee_phone,
        ]);
        const query3 = 'INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?)';
        const rows3 = await db_config_1.default.query(query3, [employee_id, hashedPassword]);
        const query4 = 'INSERT INTO employee_role (employee_id, company_role_id) VALUES (?, ?)';
        const rows4 = await db_config_1.default.query(query4, [
            employee_id,
            employee.company_role_id,
        ]);
        // construct to the employee object to return
        createdEmployee = {
            employee_id: employee_id,
        };
    }
    catch (err) {
        console.log(err);
    }
    // Return the employee object
    return createdEmployee;
}
