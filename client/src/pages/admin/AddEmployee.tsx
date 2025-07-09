import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';
import AddEmployeeForm from '../../components/Admin/AddEmployeeForm/AddEmployeeForm';

const AddEmployee: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="container-flueid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <AddEmployeeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
