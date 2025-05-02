import React, { useState } from 'react';
import './DepartmentManagement.css';

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState({
    name: '',
    hod: ''
  });
  const [employees, setEmployees] = useState([]); // This would typically come from props or context

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newDepartment.name.trim()) {
      setDepartments(prev => [...prev, { ...newDepartment, id: Date.now() }]);
      setNewDepartment({ name: '', hod: '' });
    }
  };

  const handleDelete = (departmentId) => {
    setDepartments(prev => prev.filter(dept => dept.id !== departmentId));
  };

  return (
    <div className="department-management">
      <h2>Department Management</h2>
      
      <form onSubmit={handleSubmit} className="department-form">
        <div className="form-group">
          <label htmlFor="departmentName">Department Name</label>
          <input
            type="text"
            id="departmentName"
            name="name"
            value={newDepartment.name}
            onChange={handleInputChange}
            required
            placeholder="Enter department name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="hod">Head of Department</label>
          <select
            id="hod"
            name="hod"
            value={newDepartment.hod}
            onChange={handleInputChange}
            required
          >
            <option value="">Select HOD</option>
            {employees.map(employee => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-button">Add Department</button>
      </form>

      <div className="departments-list">
        <h3>Departments</h3>
        {departments.length === 0 ? (
          <p className="no-departments">No departments added yet.</p>
        ) : (
          <div className="departments-grid">
            {departments.map(dept => (
              <div key={dept.id} className="department-card">
                <h4>{dept.name}</h4>
                <p>HOD: {employees.find(emp => emp.id === dept.hod)?.name || 'Not assigned'}</p>
                <button
                  onClick={() => handleDelete(dept.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentManagement; 