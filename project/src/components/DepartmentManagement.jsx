import React, { useState } from 'react';
import './DepartmentManagement.css';

const DepartmentManagement = () => {
  // Sample employees data for HOD selection (you can ignore this)
  const [employees] = useState([
    { id: 1, name: 'John Smith', position: 'Senior Manager' },
    { id: 2, name: 'Sarah Johnson', position: 'Director' },
    { id: 3, name: 'Michael Brown', position: 'Manager' },
    { id: 4, name: 'Emily Davis', position: 'Senior Director' },
    { id: 5, name: 'David Wilson', position: 'Executive' }
  ]);

  const [departments, setDepartments] = useState([
    { id: 1, name: 'Sales', hod: '', description: 'Handles all sales operations and customer relationships' },
    { id: 2, name: 'Marketing', hod: '', description: 'Manages brand promotion and marketing strategies' },
    { id: 3, name: 'Finance', hod: '', description: 'Oversees financial operations and accounting' },
    { id: 4, name: 'Human Resources', hod: '', description: 'Manages employee relations and recruitment' },
    { id: 5, name: 'Operations', hod: '', description: 'Handles day-to-day business operations' },
    { id: 6, name: 'IT', hod: '', description: 'Manages technology infrastructure and systems' },
    { id: 7, name: 'Customer Service', hod: '', description: 'Handles customer support and satisfaction' },
    { id: 8, name: 'Research & Development', hod: '', description: 'Focuses on innovation and product development' }
  ]);

  const [newDepartment, setNewDepartment] = useState({
    name: '',
    hod: '',
    description: ''
  });

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
      setDepartments(prev => [...prev, { 
        ...newDepartment, 
        id: Date.now() 
      }]);
      setNewDepartment({ name: '', hod: '', description: '' });
    }
  };

  const handleDelete = (departmentId) => {
    setDepartments(prev => prev.filter(dept => dept.id !== departmentId));
  };

  const handleUpdateHOD = (departmentId, hodId) => {
    const selectedEmployee = employees.find(emp => emp.id === parseInt(hodId));
    setDepartments(prev => prev.map(dept => {
      if (dept.id === departmentId) {
        return { 
          ...dept, 
          hod: selectedEmployee ? selectedEmployee.name : '' 
        };
      }
      return dept;
    }));
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
                {employee.name} - {employee.position}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Department Description</label>
          <textarea
            id="description"
            name="description"
            value={newDepartment.description}
            onChange={handleInputChange}
            required
            placeholder="Enter department description"
          />
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
                <p className="description">{dept.description}</p>
                <div className="hod-section">
                  <p><strong>HOD:</strong> {dept.hod || 'Not assigned'}</p>
                  <select
                    value={employees.find(emp => emp.name === dept.hod)?.id || ''}
                    onChange={(e) => handleUpdateHOD(dept.id, e.target.value)}
                    className="hod-select"
                  >
                    <option value="">Select HOD</option>
                    {employees.map(employee => (
                      <option key={employee.id} value={employee.id}>
                        {employee.name} - {employee.position}
                      </option>
                    ))}
                  </select>
                </div>
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