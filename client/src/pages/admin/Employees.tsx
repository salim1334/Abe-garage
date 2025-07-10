// Import the auth hook
import { useAuth } from '../../context/AuthContext';
// Import the Login component
import LoginForm from '../../components/LoginForm/LoginForm';
import type { JSX } from 'react';

function Employees(): JSX.Element {
  // Destructure the auth hook
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <h1>Employees Page</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>You are not authorized to access this page</h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Employees;
