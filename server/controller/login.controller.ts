import { Request, Response, NextFunction } from 'express';
// Import the login service 
import { login } from '../services/login.service';
// Import the jsonwebtoken module
import jwt from 'jsonwebtoken';
// Import the secret key from the environment variables
const jwtSecret = process.env.JWT_SECRETJWT_SECRET;

// Handle employee login 
async function logIn(req: Request, res: Response, next: NextFunction) {
  try {
    console.log(req.body);
    const employeeData: any = req.body;
    // Call the logIn method from the login service 
    const employee: any = await login(employeeData);
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
    const token = jwt.sign(payload, jwtSecret, {
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
  } catch (error) {
    res.status(403).json({
      status: 'fail',
      message: 'Error while login'
    });
  }
}

export { logIn };