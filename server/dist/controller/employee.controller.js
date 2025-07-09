"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_service_1 = require("../services/employee.service");
// create the add employee controller
async function createEmployees(req, res, next) {
    const employeeExists = await (0, employee_service_1.checkIfEmployeeExists)(req?.body?.employee_email);
    if (employeeExists) {
        res.status(400).json({
            error: 'This email address is already associated with another employee!',
        });
    }
    else {
        try {
            const employeeData = req.body;
            // Create the employee
            const employee = await (0, employee_service_1.createEmployee)(employeeData);
            if (!employee) {
                res.status(400).json({
                    error: 'Failed to add the employee!',
                });
            }
            else {
                res.status(200).json({
                    status: 'true',
                });
            }
        }
        catch (error) {
            console.log(error);
            res.status(400).json({
                error: 'Something went wrong!',
            });
        }
    }
}
exports.default = createEmployees;
