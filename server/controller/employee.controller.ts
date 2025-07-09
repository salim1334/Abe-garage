// Import the employee service
import { Request, Response, NextFunction } from 'express';
import {
  checkIfEmployeeExists,
  createEmployee,
} from '../services/employee.service';

// create the add employee controller
async function createEmployees(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const employeeExists = await checkIfEmployeeExists(req?.body?.employee_email);
  if (employeeExists) {
    res.status(400).json({
      error: 'This email address is already associated with another employee!',
    });
  } else {
    try {
      const employeeData = req.body;
      // Create the employee
      const employee = await createEmployee(employeeData);
      if (!employee) {
        res.status(400).json({
          error: 'Failed to add the employee!',
        });
      } else {
        res.status(200).json({
          status: 'true',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: 'Something went wrong!',
      });
    }
  }
}

export default createEmployees;
