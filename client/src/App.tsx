import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AddEmployee from './pages/admin/AddEmployee';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import the css files
import './assets/template_assets/css/bootstrap.css';
import './assets/template_assets/css/style.css';
import './assets/template_assets/css/responsive.css';
import './assets/template_assets/css/color.css';
import './assets/styles/custom.css';
import Unauthorized from './pages/Unauthorized';
import PrivateAuthRoute from './components/Auth/PrivateAuthRoute';
import Orders from './pages/admin/Orders';
import Customers from './pages/admin/Customers';
import Employees from './pages/admin/Employees';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />
        <Route path="/admin/employees" element={<Employees />} />
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
