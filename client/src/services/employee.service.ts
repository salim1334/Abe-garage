// Import from the env
const api_url = import.meta.env.VITE_API_URL;

// A function to send post request to create a new employee
const createEmployee = async (formData: any, employeeToken: string) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': employeeToken,
    },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${api_url}/api/employee`, requestOptions);
  return response;
};

// A function to send get request to get all employees
const getAllEmployees = async (token: string) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    }
  };
  const response = await fetch(`${api_url}/api/employees`, requestOptions);
  console.log(response)
  return response;
}

// Export all the functions
const employeeService = {
  createEmployee,
  getAllEmployees
};
export default employeeService;
