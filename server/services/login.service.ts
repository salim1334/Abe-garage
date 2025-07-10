// Import the query function from the db.config.js file
import conn from '../config/db.config';
// Import the bcrypt module to do the password comparison
import bcrypt from 'bcrypt';
// Import the employee service to get employee by email
import { getEmployeeByEmail } from './employee.service';
// Handle employee login
export async function login(employeeData: any) {
  try {
    let returnData = {}; // Object to be returned
    const employee: any = await getEmployeeByEmail(employeeData.employee_email);
    if (employee.length === 0) {
      returnData = {
        status: 'fail',
        message: 'Employee does not exist',
      };
      return returnData;
    }
    console.log(
      'employeeData.employee_password (entered):',
      employeeData.employee_password
    );
    console.log(
      'employee[0].employee_password_hashed (from DB):',
      employee[0].employee_password_hashed
    );

    const passwordMatch = await bcrypt.compare(
      employeeData.employee_password,
      employee[0].employee_password_hashed
    );
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
  } catch (error) {
    console.error("error during login: " + error);
  }
}
