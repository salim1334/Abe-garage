// Import the query function from the db.config.js file
import conn from '../config/db.config';
// Import the bcrypt module
import bcrypt from 'bcrypt';

// A function to check if employee exists in the database
async function checkIfEmployeeExists(email: string) {
  const query = 'SELECT * FROM employee WHERE employee_email = ? ';
  const rows: any = await conn.query(query, [email]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}

// A function to create a new employee
async function createEmployee(employee: any) {
  console.log('company_role_id:', employee.company_role_id);
  let createdEmployee: any = {};
  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(employee.employee_password, salt);
    // Insert the email in to the employee table
    const query =
      'INSERT INTO employee (employee_email, active_employee) VALUES (?, ?)';
    const rows: any = await conn.query(query, [
      employee.employee_email,
      employee.active_employee,
    ]);
    if (rows.affectedRows !== 1) {
      return false;
    }
    // Get the employee id from the insert
    const employee_id = rows.insertId;
    // Insert the remaining data in to the employee_info, employee_pass, and employee_role tables
    const query2 =
      'INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone) VALUES (?, ?, ?, ?)';
    const rows2: any = await conn.query(query2, [
      employee_id,
      employee.employee_first_name,
      employee.employee_last_name,
      employee.employee_phone,
    ]);
    const query3 =
      'INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?)';
    const rows3: any = await conn.query(query3, [employee_id, hashedPassword]);
    const query4 =
      'INSERT INTO employee_role (employee_id, company_role_id) VALUES (?, ?)';
    const rows4: any = await conn.query(query4, [
      employee_id,
      employee.company_role_id,
    ]);
    // construct to the employee object to return
    createdEmployee = {
      employee_id: employee_id,
    };
  } catch (err) {
    console.log(err);
  }
  // Return the employee object
  return createdEmployee;
}

// A function to get employee by email
async function getEmployeeByEmail(employee_email: any) {
  const query = `
    SELECT * FROM employee INNER JOIN employee_info ON employee.employee_id = employee_info.employee_id INNER JOIN employee_pass ON employee.employee_id = employee_pass.employee_id INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id WHERE employee.employee_email = ?
  `;
  const rows: any = await conn.query(query, [employee_email]);
  return rows;
}
// Check later
//  INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id WHERE employee.employee_email = ?

export { checkIfEmployeeExists, createEmployee, getEmployeeByEmail };
