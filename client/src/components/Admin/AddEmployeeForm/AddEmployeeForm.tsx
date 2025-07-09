import React from 'react'

function AddEmployeeForm() {
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new Employee</h2>
        </div>
        <div className="row clearfix">,
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      <input type="text" name="employee_email" placeholder="Employee Email" />
                    </div>

                    <div className="form-group col-md-12">
                      <input type="text" name="employee_first_name" placeholder="Employee First Name" />
                    </div>

                    <div className="form-group col-md-12">
                      <input type="text" name="employee_last_name" placeholder="Employee Last Name" />
                    </div>

                    <div className="form-group col-md-12">
                      <input type="text" name="employee_phone" placeholder="Employee Phone" />
                    </div>

                    <div className="form-group col-md-12">
                      <input type="text" name="employee_phone" placeholder="Employee Phone (555-555-5555)" required />
                    </div>

                    <div className="form-group col-md-12">
                      <select name="employee_role" className="custom-select-box">
                        <option value="1">Employee</option>
                        <option value="2">Manager</option>
                        <option value="3">Admin</option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <input type="text" name="employee_password" placeholder="Employee Password" />
                    </div>

                    <div className="form-group col-md-12">
                      <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span>Add Employee</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddEmployeeForm