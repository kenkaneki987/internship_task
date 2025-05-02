import React, { useState } from 'react';
import './EmployeeManagement.css';

const EmployeeManagement = ({ departments }) => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    fullName: '',
    aadhaarNumber: '',
    role: '',
    department: '',
    joiningDate: '',
    documents: {
      aadhaarCopy: null,
      otherDocuments: null
    }
  });

  const roles = ['Manager', 'Staff', 'Labor', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNewEmployee(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [name]: files[0]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAadhaarVerified = await verifyAadhaar(newEmployee.aadhaarNumber);
    
    const employeeData = {
      ...newEmployee,
      id: Date.now(),
      status: isAadhaarVerified ? 'pending_admin' : 'pending_verification',
      verificationStatus: {
        aadhaar: isAadhaarVerified,
        admin: false
      }
    };

    setEmployees(prev => [...prev, employeeData]);
    setNewEmployee({
      fullName: '',
      aadhaarNumber: '',
      role: '',
      department: '',
      joiningDate: '',
      documents: {
        aadhaarCopy: null,
        otherDocuments: null
      }
    });
  };
  const verifyAadhaar = async (aadhaarNumber) => {
    
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(aadhaarNumber.length === 12);
      }, 1000);
    });
  };

  const handleAdminVerification = (employeeId) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === employeeId) {
        return {
          ...emp,
          status: 'verified',
          verificationStatus: {
            ...emp.verificationStatus,
            admin: true
          }
        };
      }
      return emp;
    }));
  };

  return (
    <div className="employee-management">
      <h2>Employee Management</h2>

      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-section">
          <h3>Employee Information</h3>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={newEmployee.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="aadhaarNumber">Aadhaar Number</label>
            <input
              type="text"
              id="aadhaarNumber"
              name="aadhaarNumber"
              value={newEmployee.aadhaarNumber}
              onChange={handleInputChange}
              required
              pattern="[0-9]{12}"
              title="Please enter a valid 12-digit Aadhaar number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={newEmployee.role}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Role</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select
              id="department"
              name="department"
              value={newEmployee.department}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="joiningDate">Joining Date</label>
            <input
              type="date"
              id="joiningDate"
              name="joiningDate"
              value={newEmployee.joiningDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Document Upload</h3>
          <div className="form-group">
            <label htmlFor="aadhaarCopy">Aadhaar Copy (PDF/Image)</label>
            <input
              type="file"
              id="aadhaarCopy"
              name="aadhaarCopy"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="otherDocuments">Other Documents (Optional)</label>
            <input
              type="file"
              id="otherDocuments"
              name="otherDocuments"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">Add Employee</button>
      </form>

      <div className="employees-list">
        <h3>Employees</h3>
        {employees.length === 0 ? (
          <p className="no-employees">No employees added yet.</p>
        ) : (
          <div className="employees-grid">
            {employees.map(emp => (
              <div key={emp.id} className="employee-card">
                <h4>{emp.fullName}</h4>
                <p>Role: {emp.role}</p>
                <p>Department: {departments.find(d => d.id === emp.department)?.name || 'N/A'}</p>
                <p>Status: {emp.status.replace('_', ' ')}</p>
                <div className="verification-status">
                  <p>Aadhaar: {emp.verificationStatus.aadhaar ? '✓' : '✗'}</p>
                  <p>Admin: {emp.verificationStatus.admin ? '✓' : '✗'}</p>
                </div>
                {emp.status === 'pending_admin' && (
                  <button
                    onClick={() => handleAdminVerification(emp.id)}
                    className="verify-button"
                  >
                    Verify
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeManagement; 